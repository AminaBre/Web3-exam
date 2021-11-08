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
        public ActionResult<List<Bracelet>> Get()//Her returnerer vi JSON
        { 
            return _braceletService.Get();
        }

        [HttpGet("{id:length(24)}", Name="GetBracelet")]
        public ActionResult<Bracelet> Get(string id)//Her returnerer vi JSON
        { 
            var bracelet = _braceletService.Get(id);

            if ( bracelet == null ){
                return NotFound(bracelet);
            }
            return bracelet;
        }

        //CREATE
        [HttpPost]
        public ActionResult<Bracelet> Post(Bracelet bracelet) //Denne metoden tar i mot JSON
        {
            _braceletService.Create(bracelet);
            return CreatedAtRoute("GetBracelet", new { id = bracelet.Id.ToString() }, bracelet);
        }

        //UPDATE
        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Bracelet editedBracelet)
        {
            var bracelet = _braceletService.Get(id);
            if( bracelet == null){
                return NotFound();
            }
            _braceletService.Update(id, editedBracelet);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id){
            var bracelet = _braceletService.Get(id);

            if(bracelet == null){
                return NotFound();
            }
            _braceletService.Remove(bracelet.Id);
            return NoContent();
        }

    }
}