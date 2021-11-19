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

        public List<Necklace> Get(){
            return _necklaces.Find(necklace => true).ToList();
        }


        public Necklace Get(string id){
            return _necklaces.Find<Necklace>(necklace => necklace.Id == id).FirstOrDefault();
        }


        public Necklace Create(Necklace necklace)
        {
            //Kan  bruke  try/catch her
            _necklaces.InsertOne(necklace);
            return necklace;
        }

        public void Update(string id, Necklace editedNecklace) =>
            _necklaces.ReplaceOne(necklace => necklace.Id == id, editedNecklace);
        

        public void Remove(Necklace editedNecklace) =>
        _necklaces.DeleteOne(necklace => necklace.Id == editedNecklace.Id);

        public void Remove(string id) =>
            _necklaces.DeleteOne(necklace => necklace.Id == id);
        
        
        //

    }

}