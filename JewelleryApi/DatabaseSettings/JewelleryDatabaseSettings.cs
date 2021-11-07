namespace JewelleryApi.DatabaseSettings
{
    public interface IJewelleryDatabaseSettings
    {
        string BraceletCollectionName { get; set; }
        string NecklaceCollectionName { get; set; }
        string RingCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class JewelleryDatabaseSettings : IJewelleryDatabaseSettings 
    {
        public string BraceletCollectionName { get; set; }
        public string NecklaceCollectionName { get; set; }
        public string RingCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}