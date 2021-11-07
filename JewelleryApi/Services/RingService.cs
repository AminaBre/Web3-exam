using MongoDB.Driver;
using JewelleryApi.Models;
using System.Collections.Generic;
using System.Linq;
using JewelleryApi.DatabaseSettings;

namespace JewelleryApi.Services
{
    public class RingService
    {
        private readonly IMongoCollection<Ring> _rings;

        public RingService(IJewelleryDatabaseSettings settings)
        {
            //Koplingen til MongoDbAtlas
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );
            _rings = database.GetCollection<Ring>( settings.RingCollectionName );
        }

        public List<Ring> GetRings(){
            return _rings.Find(ring => true).ToList();
        }

        public Ring PostRing(Ring newRing)
        {
            //Kan  bruke  try/catch her
            _rings.InsertOne(newRing);
            return newRing;
        }

    }

}