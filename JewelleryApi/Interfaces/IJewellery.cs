namespace JewelleryApi.Interfaces 
{//Kontrakten for hvordan klassen skal se ut
    public interface IJewellery
    {
        string Id { get; set; }
        string Name { get; set; }
        string Image { get; set; }
    }
}