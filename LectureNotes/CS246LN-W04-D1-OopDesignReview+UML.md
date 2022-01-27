# OOP Design with UML

**CS246N System Design**

[TOC]

## Introduction

In this session, we will review Object Oriented Programming concepts for designing software solutions. I'm assuming that most of this is review from your C# or C++ programming classes.

## Frameworks, Libraries, and Custom Solutions

- What is a library? Give examples.

- What is a framework? Give examples.

- When do you need to write code that doesn't directly fit into your framework?

## OOP Terminology

What is a class?

What is an object?

What is a method (aka function)?

What is a field of a class (aka instance variable or member variable)?

What is a static class?

## OOP Design

When we design a set of classes to model a solution to a problem, how do we identify those classes?
- What will nouns become?
- What will verbs become?
- Do we represent <u>all</u> the nouns and verbs in our model?

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

      &minus; private: can only be accessed inside the class

  - Methods

- Representing relationships

  - Association: arrow
  - Aggregation (equivalent to association): open diamond.
  - Composition: black diamond.
  - Inheritance: triangle.

- 
  Cardinality (multiplicity)
  
  (In UMLet, m1 indicates one end of the line and m2 indicates the other.)
  
  - one-to-one: put 1 at each end of the line.
  - one-to-many: put 1 at one end and n at the other.
  - many-to-many: put n at each end.
  - Ranges: indicate a range with two dots: 0..1
  
  

### Exercise

Draw a UML diagram to model the classes in the Tip of the Day solution using the cross-platform UML drawing program, [UMLet](https://www.umlet.com).



----



## Answers

### A Class

A class is a module that contains variables for storing data and methods for operating on that data. It is a template (or blueprint) for creating objects. 

### An Object

Executable code that is created from a class. Many objects can be created from the same class.

### Three primary OOP relationships

- Aggregation (aka association)
  The "has-a" relationship.
- Composition
  The "is-a-part-of" relationship.
- Inheritance
  The "is-a" relationship.



------

 [![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)System Design  Lecture Notes by [Brian Bird](https://profbird.dev), 2018 (Revised 2022), are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). 

------