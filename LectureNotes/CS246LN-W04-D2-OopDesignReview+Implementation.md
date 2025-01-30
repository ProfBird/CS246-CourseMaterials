---
title: Coding Examples: Class diagram to C#
description: Explanation and examples of how a UML class diagram would be implemented in C# code.
---

# OO Design: Coding Examples

**CS246N System Design**

[TOC]

## Introduction

Last time, we covered OO design concepts and learned to model an OO Design using a UML class diagram.

In this session, we will look at how the UML model would be implemented in C# code. This isn't a part of the design process, but we are looking at this so that you will understand in a more concrete way what the class diagram means.

## Review

1. OO Design
   - When using a prose description of a software problem as a basis for design:
     - What will nouns become?
     - What will verbs become?

2. OO class relationships
   - There are three. What are they?
   - Identify them on the [UML diagram](DomainModel.pdf).



## Implementation Examples

### Inheritance

This is the "is-a" relationship. An `Admin` is a `User` .

```c#
public class Admin : User
{ }
```

### Composition

This is the whole-part relationship. The objects of classes that are parts "live and die" with the whole.

```c#
 public class Tip
 {
     private List<Comment> comments = new List<Comment>(); 
     public List<Comment> Comments { get { return comments; } }

     public void AddComment(Comment c)
     {
         comments.Add(c);    // Aggregation
     }
 }
```



### Aggregation

This is the "has a" relationship. The object that is "had" has a life-cycle that is separate from the object "having" int.

This is an example of one way to implement composition in a model class. There are other more common ways:

- Validation on the model; making the Author required.
  - How is this handled when a Comment object gets deleted? We'll look at that in CS296N when we cover *related data*.

```c#
public class Comment
{
    public String CommentText { get; set; }
    public User Author { get; private set; }
  
		// Constructor enforces creation of a Comment object only with an Author as part of the Comment.
    public Comment(User u)
    {
        Author = u;  // Composition
    }
}
```





----

## Answers

### OO Design

Nouns become either:

- Classes
      or
- Fields (aka instance variables)

Verbs become:

- Methods

### Three primary OOP relationships

- Aggregation (aka association)
  - The "has-a" relationship.
  - Represented by an open diamond.
- Composition
  - The "is-a-part-of" relationship.
  - Represented by a black diamond.
- Inheritance
  - The "is-a" relationship.
  - Represented by a triangle.



------

 [![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)System Design Lecture Notes by [Brian Bird](https://profbird.dev), 2018 (Revised <time>2025</time>), are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). 

------