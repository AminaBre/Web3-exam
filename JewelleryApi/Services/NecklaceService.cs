using MongoDB.Driver;
using JewelleryApi.Models;
using System.Collections.Generic;
using System.Linq;
using JewelleryApi.DatabaseSettings;

namespace JewelleryApi.Services
{
    public class NecklaceService
    {
        private readonly IMongoCollection<Necklace> _necklaces;

        public NecklaceService(IJewelleryDatabaseSettings settings)
        {
            //Koplingen til MongoDbAtlas
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );
            _necklaces = database.GetCollection<Necklace>( settings.NecklaceCollectionName );
        }

        public List<Necklace> GetNecklaces(){
            return _necklaces.Find(necklace => true).ToList();
        }

        public Necklace PostNecklace(Necklace newNecklace)
        {
            //Kan  bruke  try/catch her
            _necklaces.InsertOne(newNecklace);
            return newNecklace;
        }

    }

}