---
title: Prototyping
description: Discussion of prototyping using ASP.NET MVC scaffolding.
keywords: Prototype
---
# Prototyping

**CS246N System Design**

[TOC]

## Prototypes

In class, we talked about using prototypes to test what the development team perceives to be the most difficult parts of the project. Prototypes are often used to get feedback from end users or stakeholders on the design of the software product&mdash;both functionality and usability. In the literature about software prototyping, four types of prototypes are often described (Wikipedia 2022):

- Throwaway&mdash;creation of a model that will eventually be discarded.
- Evolutionary&mdash;aka breadboard prototype, a robust prototype that can be continuously refined and become the core of the new product.
- Incremental&mdash;a set of separate prototypes that are eventually merged to form the new product.
- Extreme&mdash;used primarily for web development. There are three phases:
  - Static HTML pages.
  - Web pages are made functional using simulated services.
  - Services are implemented to complete the new product.

The type of prototype we are focusing on today is a throwaway prototype that is just used to assess and hopefully resolve technical challenges in the project.

**Examples**

- The Boeing "chicken test"&mdash;a "show stopper" for that engine type if it failed. If not done at the beginning of the design process, it could cause massive redesign later.
- The lights on the lunar lander&mdash;a must have feature that required new technology.

### What

A software prototype is a bare-bones, very simple, implementation of a single feature. It is "throw away" code that will just be used to test the feasibility of one aspect of the application.

In a web application, two things that are prime candidates for prototyping are:

- Complex domain model relationships. For example composite classes that have many-to-many relationships.
- Features that require techniques or technologies you haven't used before, such as online payment, push notification, or video streaming systems.

### Why

To test critical features of the project before we start building the application to see if we have the knowledge, resources and time to implement those features. If we don't, we need to revise our project plan accordingly.

### When

Prototypes are built as part of the design process. We need to do prototyping early enough in the design and planning process in order to change the design and/or project plan based on the results of testing the prototypes.



## Prototyping with ASP.NET MVC Scaffolding

The [lecture notes on scaffolding](http://lcc-cit.github.io/CS296N-CourseMaterials/LectureNotes/CS296N-LN-WK05-D2.1-Scaffolding.html) from CS296N cover the basics of creating scaffolding in an ASP.NET MVC project.

If you are making a prototype to test a complex domain model relationship, you will need to add code to the scaffolding to work with related data, since the scaffolding only creates CRUD operations for the "surface" properties (the primitive properties) of the model classes.



## Example

[UML class diagram](https://github.com/ProfBird/TipOfTheDay-AspNetCore3/blob/PrototypeDemo/Docs/TipOfTheDayDomainModel2022.pdf)&mdash;"Tip of the Day" web site domain model.

[Tip of the Day prototype](https://github.com/ProfBird/TipOfTheDay-AspNetCore3/tree/PrototypeDemo)&mdash;Source code for an ASP.NET Core 3.1 project, upgraded to .NET 6.0.

This project just has domain models and scaffolding for Tip and Tag. The Edit page for Tip has been modified to display tags and allow selection or deselection of tags.



## References

[Software Prototyping](https://en.wikipedia.org/wiki/Software_prototyping#:~:text=Software%20prototyping%20is%20the%20activity%20of%20creating%20prototypes,other%20fields%2C%20such%20as%20mechanical%20engineering%20or%20manufacturing.). Wikipedia. 2022.

Anderson, Rick, et al. [MVC Movie Tutorial: Scaffold Movies Pages](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/adding-model?view=aspnetcore-3.1&tabs=visual-studio#scaffold-movie-pages-2). A Microsoft Tutorial. 2022. 

Anderson, Rick. [Tutorial: Read related data - ASP.NET MVC with EF Core](https://docs.microsoft.com/en-us/aspnet/core/data/ef-mvc/read-related-data?view=aspnetcore-3.1). A Microsoft tutorial. 2022.

------

 [![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)System Design  Lecture Notes by [Brian Bird](https://profbird.online), written in <time>2022</time>, are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). 

------