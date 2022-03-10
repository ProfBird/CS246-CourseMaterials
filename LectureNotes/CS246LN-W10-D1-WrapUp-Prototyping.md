---
title: End of term wrap-up, prototyping
description: Discussion of Tip of the Day prototype.
keywords: Prototype, ASP.NET MVC 6.0, Scaffolding
---
# End of Term Wrap-Up, Prototyping

**CS246N System Design**

[TOC]

## The Tip of the Day Prototype

The goal of this prototype was to work out how to manage the many-to-many relationship of Tips to Tags in the domain model for this web site. This version of the prototype was built using the Visual Studio template for ASP.NET MVC 6.0 with the authorization option "Individual Accounts" so that a database is added to the project.

### Issues

#### Nullable reference types

If you add models that contain properties that are classes (reference types) to a .NET 6.0 ASP.NET MVC project, you will probably get warnings like this:

> Warning	CS8618	Non-nullable property 'SomeProperty' must contain a non-null value when exiting constructor. Consider declaring the property as nullable.

This is because C# 8 introduced what are called (confusingly) “nullable reference types”. Reference types are the types that are classes, as opposed to primitive types like int. In previous versions of C#, reference types were nullable and couldn’t be made non-nullable. Now you can set a property in the project settings that makes all the reference types non-nullable by default—just like primitive types and now you can use the ? operator to make them nullable. In asp.net 6 projects nullable reference types are turned on. That’s why you get the warnings now but didn’t in previous projects.

 ##### Responding to the warnings

One way to make those warnings go away is to remove the line shown below from the .csproj file. This will turn off the C# 8 nullable reference type feature.

 ```xml
<Nullable>enable</Nullable>
 ```

The other way is to add a ? to any reference types for properties where it makes sense to have them be nullable. If it doesn’t make sense for them to be nullable, then initialize them.



## .NET and C# Versions

The default version of C# used by Visual Studio when building your project is determined by the target framework selected for the project.

| .NET Framework            | C# Version            | Release Date |
| ------------------------- | --------------------- | ------------ |
| .NET 7.0 (Now in preview) | 11.0 (Now in preview) | Nov. 2022    |
| .NET 6.0 (LTS)            | 10.0                  | Nov. 2021    |
| .NET 5.x                  | 9.0                   | Nov. 2020    |
| .NET Core 3.1 (LTS)       | 8.0                   | Nov. 2019    |
|                           |                       |              |

## Example

[ASP.NET 6.0 Tip of the Day Prototype](https://github.com/ProfBird/TipOfTheDay-AspNetCore3/tree/PrototypeDemo)&mdash;Source code for an ASP.NET Core 6.0 project with just domain models and scaffolding.

This is the same project as the [Tip of the Day prototype](https://github.com/ProfBird/TipOfTheDay-AspNetCore3/tree/PrototypeDemo) we looked at last week, but it was built from the Visual Studio template for ASP.NET 6.0.



## References

[C# Language Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/)&mdash;[Language versioning](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/configure-language-version). Microsoft. 2022.

Wagner, Bill. [Learn techniques to resolve nullable warnings](https://docs.microsoft.com/en-us/dotnet/csharp/nullable-warnings). Microsoft. 2021.



------

 [![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)System Design  Lecture Notes by [Brian Bird](https://profbird.online), written in <time>2022</time>, are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). 

------