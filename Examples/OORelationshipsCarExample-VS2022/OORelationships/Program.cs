namespace OORelationships;
class Program
{
    static void Main(string[] args)
    {
        HybridCar prius = new HybridCar();
        prius.Driver = new Person { Name = "Mario" };
        prius.Go();

        Console.WriteLine("Your car is being driven by {0} at {1} MPH",
            prius.Driver.Name, prius.Speed);
    }
}

class Car
{
    private Engine gasEngine = new Engine();
    public Person? Driver { get; set; }
    public List<Person>? Passengers { get; set; }
    public int Speed
    {
        get { return gasEngine.RPM / 100; }
    }

    public void Go()
    {
        gasEngine.RPM = 1000;
    }

    public void Stop()
    {
        gasEngine.RPM = 0;
    }
}

class HybridCar : Car
{
    private Engine electricMotor = new Engine();

    public void Go()
    {
        electricMotor.RPM = 1000;
        base.Go();
    }

    public void Stop()
    {
        electricMotor.RPM = 0;
    }
}

class Engine
{
    public int RPM { get; set; }
}

class Person
{
    public string Name { get; set; }
}

