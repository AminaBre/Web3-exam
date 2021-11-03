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
            _bracelets = database.GetCollection<Bracelet>( settings.JewelleryCollectionName );
        }

        public List<Bracelet> GetBracelets(){
            return _bracelets.Find(bracelet => true).ToList();
        }

        public Bracelet PostBracelet(Bracelet newBracelet)
        {
            //Kan  bruke  try/catch her
            _bracelets.InsertOne(newBracelet);
            return newBracelet;
        }

    }

}