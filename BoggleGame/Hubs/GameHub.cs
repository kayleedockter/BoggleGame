﻿using Microsoft.AspNetCore.SignalR;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace SignalRChat.Hubs
{
    public class GameHub : Hub
    {
        private readonly IConfiguration _configuration;
        public GameHub(IConfiguration config)
        {
            this._configuration = config;
        }

        //Keeping track of player
        public static List<string> playerID = new List<string>();
        public static int playerCount = 0;
        public List<string> player_one_words = new List<string>();
        public List<string> player_two_words = new List<string>();
        public static int player_one_score = 0;
        public static int player_two_score = 0;

        //Checking for player count
        public override async Task OnConnectedAsync()
        {
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
            
            //TODO: Create JS funciton for disconnected player
            //TODO: Add word checking into a function here (Can copy "Submit" code from controller with some tweaks)
            //TODO: Rewrite AJAX function (not needed for this now)
            //TODO: Write function to add words to player word list and scores (the submit function above will call this)            
        }

        public async Task JoinGame(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
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
                //TODO: JS Function that tells user it is not a wrod
                await Clients.Client(currentPlayer).SendAsync("notAWord");
            }
            else
            {
                //TODO: JS Function that tells user points have been scored
                
                int points = Scoring(word);
                if (points == 0)
                {
                    await Clients.Client(currentPlayer).SendAsync("shortWord");
                }
                else
                {
                    await Clients.All.SendAsync("correctWord", player_one_score, player_two_score, points, word);
                }

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
