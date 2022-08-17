using Microsoft.AspNetCore.SignalR;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace SignalRChat.Hubs
{
    public class GameHub : Hub
    {
        //For database configuration
        private readonly IConfiguration _configuration;
        public GameHub(IConfiguration config)
        {
            this._configuration = config;
        }


        //Keeping track of players
        public static List<string> playerID = new List<string>();
        public static int playerCount = 0;
        public static List<string> player_one_words = new List<string>();
        public static List<string> player_two_words = new List<string>();
        public static int player_one_score = 0;
        public static int player_two_score = 0;

        //Checking for player count
        public override async Task OnConnectedAsync()
        {
            await Clients.All.SendAsync("HideBoggle");
            playerID.Add(Context.ConnectionId);
            playerCount++;
            await base.OnConnectedAsync();
            if (playerCount < 2)
            {
                await Clients.All.SendAsync("DisableButtons");
            }
            else if (playerCount == 2)
            {
                await Clients.All.SendAsync("EnableButtons");
            }            
        }
        
        public async Task PlayGame()
        {
            await Clients.All.SendAsync("ShowBoggle");
            //await Clients.All.SendAsync("TimerStart");
        }

        public async Task Submit(string word)
        {
            //Keeping track of what player has submitted the word
            var currentPlayer = Context.ConnectionId;

            //*************DATABASE CONNECTION*************
            string connStr = _configuration.GetConnectionString("MyConnString");
            SqlConnection conn = new SqlConnection(connStr);
            conn.Open();

            
            //Holds return object
            object obj;
            //Query DB
            string query = "SELECT * FROM [dbo].[Words] WHERE words LIKE '" + word + "';";
            SqlCommand cmd = new SqlCommand(query, conn);
            obj = cmd.ExecuteScalar();
            conn.Close();
            //*************END DATABASE CONNECTION*************

            if (obj == null)
            {
                await Clients.Client(currentPlayer).SendAsync("notAWord");
            }
            else
            {
                bool existingWord = false;
                existingWord = WordExists(word);
                if (existingWord)
                {
                    await Clients.Client(currentPlayer).SendAsync("wordExists");
                }
                else
                {
                    int points = Scoring(word);
                    if (points == 0)
                    {
                        await Clients.Client(currentPlayer).SendAsync("shortWord");
                    }
                    else
                    {
                        UpddatePlayer(points, word);
                        await Clients.All.SendAsync("scores", player_one_score, player_two_score);
                        await Clients.Client(currentPlayer).SendAsync("correctWord", points);
                    }
                }
                
            }
        }

        //This function accepts a point value and the submitted word, it increase player points and adds the submitted word into the player's 
        //word list
        private void UpddatePlayer(int points, string word)
        {
            if (Context.ConnectionId == playerID[0])
            {
                player_one_score += points;
                player_one_words.Add(word);
            }
            else if (Context.ConnectionId == playerID[1])
            {
                player_two_score += points;
                player_one_words.Add(word);
            }
        }

        //Checks if word has already been submitted
        private bool WordExists(string word)
        {
            if (Context.ConnectionId == playerID[0])
            {
                if (player_one_words.Contains(word))
                {
                    return true;
                }
                else return false;
            }
            else
            {
                if (player_two_words.Contains(word))
                {
                    return true;
                }
                else return false;
            }
        }

        //This function accepts a word and scores based on word length. 
        //It returns in int score
        private int Scoring(string word)
        {
            int point = 0;
            int len = word.Length;

            if (len >= 9)
            {
                point = 15;
            }
            else if (len == 8)
            {
                point = 10;
            }
            else if (len == 7)
            {
                point = 8;
            }
            else if (len == 6)
            {
                point = 6;
            }
            else if (len == 5)
            {
                point = 4;
            }
            else if (len == 4)
            {
                point = 2;
            }
            else if (len == 3)
            {
                point = 1;
            }
            else
            {
                point = 0;
            }

            return point;
        }
    }
}
