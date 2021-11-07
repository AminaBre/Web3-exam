using Microsoft.AspNetCore.Mvc;
using JewelleryApi.Models;
using System.Collections.Generic;
using JewelleryApi.Services;

namespace JewelleryApi.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class NecklaceController : ControllerBase
    {
        private readonly NecklaceService _necklaceService;

        public NecklaceController(NecklaceService necklaceService){
            _necklaceService = necklaceService;
        }

        [HttpGet]
        public IEnumerable<Necklace> GetNecklaces()//Her returnerer vi JSON
        {
            return _necklaceService.GetNecklaces();
        }

        [HttpPost]
        public Necklace PostNecklace(Necklace newNecklace) //Denne metoden tar i mot JSON
        {
            _necklaceService.PostNecklace(newNecklace);
            return newNecklace;
        }
    }
}