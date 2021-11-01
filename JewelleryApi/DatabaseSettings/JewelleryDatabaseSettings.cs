namespace JewelleryApi.Models
{
    public interface IJewelleryDatabaseSettings
    {
        string JewelleryCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class JewelleryDatabaseSettings : IJewelleryDatabaseSettings 
    {
        public string JewelleryCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}