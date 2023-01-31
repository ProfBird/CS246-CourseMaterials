---
title: OO Analysis and Design with UML
description: A review  Object Oriented Programming (OOP) concepts for designing software solutions.
---

# OO Analysis and Design with UML

**CS246N System Design**

[TOC]

## Q and A

- Which teams have a client? 
  - Which teams are still looking?
  - I have a lead on another client.
- If anyone wants to change teams, who hasn't already contacted me, then send me an e-mail.

## Introduction

In this session, we will review Object Oriented concepts for designing software solutions. I'm assuming that most of this is review from your C# or C++ programming classes.

## Frameworks, Libraries, and Custom Solutions

First we're going to talk about frameworks and libraries because when we use those we get pre-fabricated OO designs. We don't have to do any design to use them.

- What is a library? Give examples.

- What is a framework? Give examples.

- When do you need to write code that doesn't directly fit into your framework&mdash;code that requires you to do OO design?

## OOP Terminology

What is a *class*?

What is an *object*?

What is a *method* (aka *function*)?

What is a *field* of a class (aka i*nstance variable* or *member variable*)?

What is a *static class*?

## OO Design

When we design a set of classes to model a solution to a problem, how do we identify those classes? One approach is to start with a prose description.
- What will nouns become?
- What will verbs become?
- Do we represent <u>all</u> the nouns and verbs in our model?
- How do we determine which instance variables (aka fields) and methods go on which classes?

### Exercise

Find the classes, fields, and methods you would use to create an OOP model based on this [Tip of the Day web site description](TipOfTheDayDescription.html).

### The three primary OOP relationships

- What are the names and meanings of these relationships?
- What are examples in C#?



## Unified Modeling Language

A way to visually represent software design models that is independent of any particular computer language. There are [fourteen types of UML diagrams](https://creately.com/blog/diagrams/uml-diagram-types-examples/). We will just be using [UML class diagrams](https://en.wikipedia.org/wiki/Class_diagram).

- Representing classes

  - Name

  - Fields

    - Access modifiers

      &plus; public: can be accessed from outside the class

      &num; protected: can be accessed inside the class and in inherited classes

      &minus; private: can only be accessed inside the class

  - Methods

- Representing relationships

  - Association: arrow
  - Aggregation (equivalent to association): open diamond.
  - Composition: black diamond.
  - Inheritance: triangle.

- 
  Cardinality (multiplicity)
  
  (In UMLet, m1 indicates the end of the line with the diamond or arrow and m2 indicates the other end.)
  
  - Ranges: indicate a range with two dots. For example: 0..n
  - Cardinality relationships
    - One-to-one: put 1 at the end with the diamond.
    - One-to-many: put 1..n at the end with the diamond&mdash;meaning the class with the diamond can have 1 to many instances of the other object.
    - Many-to-many: put diamonds on both ends of the line and put 1..n on both ends. It is good to avoid this relationship since it adds extra complexity.
  
  
  

### Exercise

Draw a UML diagram to model the classes in the Tip of the Day solution using the cross-platform UML drawing program, [UMLet](https://www.umlet.com).



## Example

[Tip of the Day class diagram](Images/TipOfTheDayDomainModel2022.pdf)



## References

Bell, Donald. [The UML 2 class diagram](https://developer.ibm.com/articles/the-class-diagram/) IBM, 2004. Tutorial article.


Crawley, Gregory. [UML class diagram arrow types: explanations and examples](https://www.gleek.io/blog/class-diagram-arrows.html) Gleek, 2021. Tutorial article with video

----



## Answers

### OOP Terminology

- Class


  A class is a module that contains variables for storing data and methods for operating on that data. It is a template (or blueprint) for creating objects. 

  Unless a class is static or has static methods, it's methods are not executable.

- Object

  Executable code that is created from a class. Multiple objects can be created from the same class.

### OO Design

- Nouns become classes or instance variables (fields of a class).
- Verbs become methods.
- Instance variables and methods should be on the class to which they apply. Each class should be responsible for managing it's own stuff. 

### Three primary OOP relationships

- Aggregation (aka association[^1])
  The "has-a" relationship.
- Composition
  The "is-a-part-of" relationship.
- Inheritance
  The "is-a" relationship.



------

 [![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)System Design  Lecture Notes by [Brian Bird](https://profbird.dev), 2018 (Revised <time>2023</time), are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). 



[^1]: Martin Fowler on [Aggregation and Composition](https://martinfowler.com/bliki/AggregationAndComposition.html)

