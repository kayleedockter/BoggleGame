using BoggleGame;
using SignalRChat.Hubs;

namespace BoggleGame.Models
{
    public class ButtonModel
    {
        //public GameHub GameHub = new GameHub();
        public int count = GameHub.playerCount;
        public int p1Score = GameHub.player_one_score;
        public int p2Score = GameHub.player_two_score;

        public bool State { get; set; }

        public ButtonModel(bool state)
        {
            State = state;
        }
    }
}
