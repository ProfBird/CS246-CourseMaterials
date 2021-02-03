# OO Design: Coding Examples

**CS246N System Design**

[TOC]

## Announcements

- Capstone projects
  - Capstone teams, please post in the discussion forum:
    - Team name
    - Team members
    - One sentence project description
  - If you don't have a team yet, e-mail me and I'll match you up with a team.
  - If your team doesn't have a project yet, drop in to my office hours so we can discuss possibilities.
  - Work on a proposal starts next week. Your proposal to is due Feb. 11
    - For Programming teams, this is a proposal to a client (and me).
    - For Game Dev teams, this is a proposal to each other (and me).
- HackOR
- CS235IM

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

```c#
public class Admin : User
{ }
```

### Aggregation

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



### Composition

```c#
public class Comment
{
    public String CommentText { get; set; }
    public User Author { get; private set; }  

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

 [![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)System Design Lecture Notes by [Brian Bird](https://profbird.online), 2018 (Revised 2021), are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). 

------