---
title: End of term wrap-up, prototyping
description: Discussion of Tip of the Day prototype.
keywords: Prototype, ASP.NET MVC 6.0, Scaffolding
---
# End of Term Wrap-Up, Prototyping

**CS246N System Design**

[TOC]

## The Tip of the Day Prototype

The goal of this prototype was to work out how to manage the **many-to-many relationship of Tips to Tags** in the domain model for this web site. 

Note that delting a tip or tag does not do a cascade delete, which is the way I want it.

This version of the prototype was built using the Visual Studio template for ASP.NET MVC 6.0 with the authorization option "Individual Accounts" so that a database is added to the project.

### Issues After Upgrading to .NET 6.0

#### Nullable reference types

If you add models that contain properties that are classes (reference types) to a .NET 6.0 ASP.NET MVC project, you will probably get warnings like this:

> Warning	CS8618	Non-nullable property 'SomeProperty' must contain a non-null value when exiting constructor. Consider declaring the property as nullable.

This is because C# 8 introduced what are called (confusingly) *nullable reference types*. Reference types are types that are classes, as opposed to *primitive types* like `int`. In previous versions of C#, reference types were nullable and couldn’t be made non-nullable. Now you can set a property in the project settings that makes all the reference types non-nullable by default—just like primitive types and now you can use the `?` operator to make them nullable. In asp.net 6 projects, nullable reference types are turned on. That’s why you get the warnings now but didn’t in previous projects.

 ##### Responding to the warnings

One way to make those warnings go away is to remove the line shown below from the .csproj file. This will turn off the C# 8 nullable reference type feature.

 ```xml
<Nullable>enable</Nullable>
 ```

The other way is to add a ? to any reference types for properties where it makes sense to have them be nullable. If it doesn’t make sense for them to be nullable, then initialize them.



## .NET and C# Versions

The default version of C# used by Visual Studio when building your project is determined by the target framework selected for the project.

LTS (Long Term Support) versions get three years of security and bug fix support.

| .NET Framework      | C# Version | Release Date | End Support   |
| ------------------- | ---------- | ------------ | ------------- |
| .NET 8.0 (LTS)      | 12         | Nov. 2023    | Nov. 20, 2026 |
| .NET 7.0            | 11         | Nov. 2022    | May 14, 2024  |
| .NET 6.0 (LTS)      | 10         | Nov. 2021    | Nov. 8, 2024  |
| .NET 5              | 9          | Nov. 2020    | May 8, 2022   |
| .NET Core 3.1 (LTS) | 8          | Nov. 2019    | Dec. 3, 2022  |
|                     |            |              |               |

### Breaking Changes from ASP.NET 6.0 to 8.0

There don't appear to be any breaking changes for source code in the demo apps that I wrote for any of my classes.

#### From 6.0 to 7.0

[Breaking Changes in .NET 7](https://learn.microsoft.com/en-us/dotnet/core/compatibility/8.0#aspnet-core)

#### From 7.0 to 8.0

[Breaking Changes in .NET 8](https://learn.microsoft.com/en-us/dotnet/core/compatibility/8.0#aspnet-core)



## Example

[ASP.NET 6.0 Tip of the Day](https://github.com/ProfBird/TipOfTheDay-AspNet6)&mdash;Source code for an ASP.NET Core 6.0 project with just domain models and scaffolding.

This is the same project as the [Tip of the Day prototype](https://github.com/ProfBird/TipOfTheDay-AspNetCore3/tree/PrototypeDemo) we looked at last week, but it was built from the Visual Studio template for ASP.NET 6.0 and can use either MySQL or SQL Server databases.

[ASP.NET 8.0 Tip of the Day](https://github.com/LCC-CIT/TipOfTheDay-AspNet8) All I did to migrate this project was change the target framework to .NET 8. The project builds and runs without errors.

## References

[C# Language Reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/)&mdash;[Language versioning](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/configure-language-version). Microsoft. 2022.

Wagner, Bill. [Learn techniques to resolve nullable warnings](https://docs.microsoft.com/en-us/dotnet/csharp/nullable-warnings). Microsoft. 2021.



------

 [![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)System Design  Lecture Notes by [Brian Bird](https://profbird.online), written in <time>2022</time>, updated in <time>2024</time> are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). 

------