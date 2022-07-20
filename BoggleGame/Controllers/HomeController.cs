using BoggleGame.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace BoggleGame.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        static List<ButtonModel> buttons = new List<ButtonModel>();
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            for (int i = 0; i < 25; i++)
            {
                buttons.Add(new ButtonModel(true));
            }

            return View("Index", buttons);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public ActionResult HandleButtonClick(string mine)
        {
            int buttonNumber = Int32.Parse(mine);
            buttons[buttonNumber].State = !buttons[buttonNumber].State;
            return View("Index", buttons);
        }
    }
}