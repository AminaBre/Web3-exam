using Microsoft.AspNetCore.Mvc;
using JewelleryApi.Models;
using System.Collections.Generic;
using JewelleryApi.Services;

namespace JewelleryApi.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class JewelleryController : ControllerBase
    {
        private readonly JewelleryService _jewelleryService;

        public JewelleryController(JewelleryService jewelleryService){
            _jewelleryService = jewelleryService;
        }

        [HttpGet]
        public IEnumerable<Jewellery> GetJewellery()//Her returnerer vi JSON
        {
            return _jewelleryService.GetJewellery();
        }

        [HttpPost]
        public Jewellery PostJewellery(Jewellery newJewellery) //Denne metoden tar i mot JSON
        {
            _jewelleryService.PostJewellery(newJewellery);
            return newJewellery;
        }
    }
}