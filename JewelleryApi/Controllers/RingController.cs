using Microsoft.AspNetCore.Mvc;
using JewelleryApi.Models;
using System.Collections.Generic;
using JewelleryApi.Services;

namespace JewelleryApi.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class RingController : ControllerBase
    {
        private readonly RingService _ringService;

        public RingController(RingService ringService){
            _ringService = ringService;
        }

        [HttpGet]
        public IEnumerable<Ring> GetRings()//Her returnerer vi JSON
        {
            return _ringService.GetRings();
        }

        [HttpPost]
        public Ring PostRing(Ring newRing) //Denne metoden tar i mot JSON
        {
            _ringService.PostRing(newRing);
            return newRing;
        }
    }
}