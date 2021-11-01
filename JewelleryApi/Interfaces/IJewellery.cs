namespace JewelleryApi.Interfaces 
{
    public interface IJewellery
    {
        int ID { get; set; }
        string Name { get; set; }
        string Image { get; set; }
        string Brand { get; set; }
        double Price { get; set; }
    }
}