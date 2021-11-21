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

        public List<Ring> Get(){
            return _rings.Find(ring => true).ToList();
        }


        public Ring Get(string id){
            return _rings.Find<Ring>(ring => ring.Id == id).FirstOrDefault();
        }


        public Ring Create(Ring ring)
        {
            _rings.InsertOne(ring);
            return ring;
        }

        public void Update(string id, Ring editedRing) =>
            _rings.ReplaceOne(ring => ring.Id == id, editedRing);
        

        public void Remove(Ring editedRing) =>
        _rings.DeleteOne(ring => ring.Id == editedRing.Id);

        public void Remove(string id) =>
            _rings.DeleteOne(ring => ring.Id == id);
        
        
        

    }

}