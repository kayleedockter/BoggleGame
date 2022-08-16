using Microsoft.AspNetCore.SignalR;

namespace SignalRChat.Hubs
{
    public class GameHub : Hub
    {
        public static int playerCount = 0;
        public List<string> player_one_words = new List<string>();
        public List<string> player_two_words = new List<string>();
        public static int player_one_score = 0;
        public static int player_two_score = 0;

        //Checking for player count
        public override async Task OnConnectedAsync()
        {
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
    }
}
