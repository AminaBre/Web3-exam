using MongoDB.Driver;
using JewelleryApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace JewelleryApi.Services
{
    public class JewelleryService
    {
        private readonly IMongoCollection<Jewellery> _jewellerys;

        public JewelleryService(IJewelleryDatabaseSettings settings)
        {
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );
            _jewellerys = database.GetCollection<Jewellery>( settings.JewelleryCollectionName );
        }

        public List<Jewellery> GetJewellery(){
            return _jewellerys.Find(jewellery => true).ToList();
        }

        public Jewellery PostJewellery(Jewellery newJewellery)
        {
            _jewellerys.InsertOne(newJewellery);
            return newJewellery;
        }

    }

}