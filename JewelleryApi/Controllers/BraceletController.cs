using Microsoft.AspNetCore.Mvc;
using JewelleryApi.Models;
using System.Collections.Generic;
using JewelleryApi.Services;

namespace JewelleryApi.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class BraceletController : ControllerBase
    {
        private readonly BraceletService _braceletService;

        public BraceletController(BraceletService braceletService){
            _braceletService = braceletService;
        }

        [HttpGet]
        public IEnumerable<Bracelet> GetBracelets()//Her returnerer vi JSON
        {
            return _braceletService.GetBracelets();
        }

        [HttpPost]
        public Bracelet PostBracelet(Bracelet newBracelet) //Denne metoden tar i mot JSON
        {
            _braceletService.PostBracelet(newBracelet);
            return newBracelet;
        }
    }
}