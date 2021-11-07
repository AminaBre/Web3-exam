using JewelleryApi.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace JewelleryApi.Models
{
    public class Necklace : IJewellery 
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Brand { get; set; }
        public string Image { get; set; }
        public string Material { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }

    }
}