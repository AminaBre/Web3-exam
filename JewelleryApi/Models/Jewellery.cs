using JewelleryApi.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace JewelleryApi.Models
{
    public class Jewellery : IJewellery 
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Brand { get; set; }
        public double Price { get; set; }
    }
}