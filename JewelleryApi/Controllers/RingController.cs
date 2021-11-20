using Microsoft.AspNetCore.Mvc;
using JewelleryApi.Models;
using System.Collections.Generic;
using JewelleryApi.Services;
using System;

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
        public ActionResult<List<Ring>> Get()//Her returnerer vi JSON
        { 
            return _ringService.Get();
        }

        [HttpGet("{id:length(24)}", Name="GetRing")]
        public ActionResult<Ring> Get(string id)//Her returnerer vi JSON
        { 
            var ring = _ringService.Get(id);

            if ( ring == null ){
                return NotFound(ring);
            }
            return ring;
        }

        //CREATE
        [HttpPost]
        public ActionResult<Ring> Post(Ring ring) //Denne metoden tar i mot JSON
        {
            _ringService.Create(ring);
            return CreatedAtRoute("GetRing", new { id = ring.Id.ToString() }, ring);
        }

        //UPDATE
        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, Ring editedRing)
        {
            var ring = _ringService.Get(id);
            
            if(ring == null){
                Console.WriteLine("ring is null");
                return NotFound();
            }
            _ringService.Update(id, editedRing);
           
            
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id){
            var ring = _ringService.Get(id);

            if(ring == null){
                return NotFound();
            }
            _ringService.Remove(ring.Id);
            return NoContent();
        }

    }
}