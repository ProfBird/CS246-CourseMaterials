# Software Design Patterns

**CS246N System Design**

[TOC]

## What are software design patterns?

They are code patterns that provide solutions to common problems. They were inspired by architectural design patterns.

### Examples:

**The adapter pattern**: This pattern solves the problem of needing to use data from a source that is incompatible with your system, either becasue of the format or the interface. For example, gettting JSON data from a web service and converting the JavaScript Objects to C# objects.

**The observer pattern:** This pattern solves the problem of how one object can get a notification when something changes on another object. For example, getting notified when a user types input in a User Interface.

## Why are they important?

- Design patterns help us avoid "reinventing the wheel".
- They give us a way to communicate our ideas with other developers.
- They help us understand legacy code.

## What are the "Gang of Four" Patterns?

The classic book on design patterns is [*Design Patterns: Elements of Reusable Object-Oriented Software*](https://en.wikipedia.org/wiki/Design_Patterns) by Gamma, Helm, Johnson and Vlissides, 1994. The book had four authors, hence the nickname, "Gang of four" which is often abbreviated GoF, as in "the GoF patterns"

The book lists the design patterns shown below.

(Text copied from [Wikipedia](https://en.wikipedia.org/wiki/Design_Patterns) and adapted, links from [dofactory, ".NET Design Patterns"](https://www.dofactory.com/net/design-patterns))

### Creational

[Creational patterns](https://en.wikipedia.org/wiki/Creational_pattern) are are used to create objects, rather than having to instantiate objects directly. This gives the program more flexibility in deciding which objects need to be created for a given case.

| Creational Patterns                                          |                                                       |
| ------------------------------------------------------------ | ----------------------------------------------------- |
| [Abstract Factory](https://www.dofactory.com/net/abstract-factory-design-pattern) | Creates an instance of several families of classes    |
| [Builder](https://www.dofactory.com/net/builder-design-pattern) | Separates object construction from its representation |
| [Factory Method](https://www.dofactory.com/net/factory-method-design-pattern) | Creates an instance of several derived classes        |
| [Prototype](https://www.dofactory.com/net/prototype-design-pattern) | A fully initialized instance to be copied or cloned   |
| [Singleton](https://www.dofactory.com/net/singleton-design-pattern) | A class of which only a single instance can exist     |

### Structural

These are concerned with class and object composition. They use inheritance to compose interfaces and define ways to compose objects to obtain new functionality.

| Structural Patterns                                          |                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------- |
| [Adapter](https://www.dofactory.com/net/adapter-design-pattern) | Match interfaces of different classes                   |
| [Bridge](https://www.dofactory.com/net/bridge-design-pattern) | Separates an object’s interface from its implementation |
| [Composite](https://www.dofactory.com/net/composite-design-pattern) | A tree structure of simple and composite objects        |
| [Decorator](https://www.dofactory.com/net/decorator-design-pattern) | Add responsibilities to objects dynamically             |
| [Facade](https://www.dofactory.com/net/facade-design-pattern) | A single class that represents an entire subsystem      |
| [Flyweight](https://www.dofactory.com/net/flyweight-design-pattern) | A fine-grained instance used for efficient sharing      |
| [Proxy](https://www.dofactory.com/net/proxy-design-pattern)  | An object representing another object                   |

### Behavioral

Most of these design patterns are specifically concerned with communication between objects.

| Behavioral Patterns                                          |                                                       |
| ------------------------------------------------------------ | ----------------------------------------------------- |
| [Chain of Resp.](https://www.dofactory.com/net/chain-of-responsibility-design-pattern) | A way of passing a request between a chain of objects |
| [Command](https://www.dofactory.com/net/command-design-pattern) | Encapsulate a command request as an object            |
| [Interpreter](https://www.dofactory.com/net/interpreter-design-pattern) | A way to include language elements in a program       |
| [Iterator](https://www.dofactory.com/net/iterator-design-pattern) | Sequentially access the elements of a collection      |
| [Mediator](https://www.dofactory.com/net/mediator-design-pattern) | Defines simplified communication between classes      |
| [Memento](https://www.dofactory.com/net/memento-design-pattern) | Capture and restore an object's internal state        |
| [Observer](https://www.dofactory.com/net/observer-design-pattern) | A way of notifying change to a number of classes      |
| [State](https://www.dofactory.com/net/state-design-pattern)  | Alter an object's behavior when its state changes     |
| [Strategy](https://www.dofactory.com/net/strategy-design-pattern) | Encapsulates an algorithm inside a class              |
| [Template Method](https://www.dofactory.com/net/template-method-design-pattern) | Defer the exact steps of an algorithm to a subclass   |
| [Visitor](https://www.dofactory.com/net/visitor-design-pattern) | Defines a new operation to a class without change     |



## ASP.NET Design Patterns

### Formal vs. Informal Patterns

- Formal patterns are the ones that have been cataloged an published--like the "Gang of Four" patterns.
- Informal patterns are those that we use commonly, but aren't formally cataloged, like useing switch or if-then, else-if decision trees for making decisions based on input.

### Formal Patterns Used in Our Web Apps

- MVC is "baked in"

- Iterator is a part of the .NET collection classes

- What other formal patterns have we used?

  <div hidden>Repository, EF is an example of a provider</div>

- If you write or consume a web service, which pattern are you using?

  <div hidden>Service Agent</div>

- Class Exercise: If I wanted to add a messaging service to my BookInfo app that notified writers of book reviews when someone had commented on a book, which pattern might be a key part of the implementation?



## References

[Guide to Software Design Patterns](https://airbrake.io/blog/category/dotnet). Airbrake. 2017. Descriptions of design patterns with examples in C#.

[Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns). Wikipedia article.



------

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)
System Design Lecture Notes by [Brian Bird](https://birdsbits.blog), 2018 (Revised 2020), is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

------

