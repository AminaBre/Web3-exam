using MongoDB.Driver;
using JewelleryApi.Models;
using System.Collections.Generic;
using System.Linq;
using JewelleryApi.DatabaseSettings;

namespace JewelleryApi.Services
{
    public class BraceletService
    {
        private readonly IMongoCollection<Bracelet> _bracelets;

        public BraceletService(IJewelleryDatabaseSettings settings)
        {
            //Koplingen til MongoDbAtlas
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );
            _bracelets = database.GetCollection<Bracelet>( settings.BraceletCollectionName );
        }

        public List<Bracelet> Get(){
            return _bracelets.Find(bracelet => true).ToList();
        }

        //!!Fra slides
        public Bracelet Get(string id){
            return _bracelets.Find<Bracelet>(bracelet => bracelet.Id == id).FirstOrDefault();
        }
        //!!


        public Bracelet Create(Bracelet bracelet)
        {
            //Kan  bruke  try/catch her
            _bracelets.InsertOne(bracelet);
            return bracelet;
        }

        //!!Fra slides
        public void Update(string id, Bracelet editedBracelet) =>
            _bracelets.ReplaceOne(bracelet => bracelet.Id == editedBracelet.Id, editedBracelet);
        

        public void Remove(Bracelet editedBracelet) =>
        _bracelets.DeleteOne(bracelet => bracelet.Id == editedBracelet.Id);

        public void Remove(string id) =>
            _bracelets.DeleteOne(bracelet => bracelet.Id == id);
        
        
        //

    }

}