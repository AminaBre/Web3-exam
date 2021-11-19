using Microsoft.AspNetCore.Mvc;
using JewelleryApi.Models;
using System.Collections.Generic;
using JewelleryApi.Services;
using System;

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
        public ActionResult<List<Necklace>> Get()//Her returnerer vi JSON
        { 
            return _necklaceService.Get();
        }

        [HttpGet("{id:length(24)}", Name="GetNecklace")]
        public ActionResult<Necklace> Get(string id)//Her returnerer vi JSON
        { 
            var necklace = _necklaceService.Get(id);

            if ( necklace == null ){
                return NotFound(necklace);
            }
            return necklace;
        }

        //CREATE
        [HttpPost]
        public ActionResult<Necklace> Post(Necklace necklace) //Denne metoden tar i mot JSON
        {
            _necklaceService.Create(necklace);
            return CreatedAtRoute("GetNecklace", new { id = necklace.Id.ToString() }, necklace);
        }

        //UPDATE
        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, Necklace editedNecklace)
        {
            var necklace = _necklaceService.Get(id);
            
            if(necklace == null){
                Console.WriteLine("necklace is null");
                return NotFound();
            }
            _necklaceService.Update(id, editedNecklace);
           
            
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id){
            var necklace = _necklaceService.Get(id);

            if(necklace == null){
                return NotFound();
            }
            _necklaceService.Remove(necklace.Id);
            return NoContent();
        }

    }
}