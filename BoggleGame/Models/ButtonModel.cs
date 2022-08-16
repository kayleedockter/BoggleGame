using BoggleGame;
using SignalRChat.Hubs;

namespace BoggleGame.Models
{
    public class ButtonModel
    {
        //public GameHub GameHub = new GameHub();
        public int count = GameHub.playerCount;

        public bool State { get; set; }

        public ButtonModel(bool state)
        {
            State = state;
        }
    }
}
