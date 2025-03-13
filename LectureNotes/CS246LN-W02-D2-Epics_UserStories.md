<h1>Epics and User Stories</h1>

**CS246N System Design**

[TOC]

## Introduction

These epics and user stories are based on the example requirements document for the Titan Park volunteer management system described last week.

## Format for User Stories

*<u>Someone</u> (a role) can do <u>something</u> so that <u>something results</u>.*

## Examples

### Epic: Volunteer Administration

**User Stories**

- **Project creation**

  *Admins can create a project so that volunteers can be assigned to it.*

- **Message volunteers**

  *Admins can send messages to volunteers.*

### Epic: Volunteer Registration

**User Stories**

- **Volunteer creates a profile**

  *A volunteer can create a profile containing information that can be used by project administrators to manage volunteers.*

- **Volunteer edits their profile**

  *Volunteers can edit their profile in order to update their information.*

- **Volunteer deletes their profile**

  *A volunteer can delete their profile so that they are no longer listed as a volunteer.*

### Epic: Volunteer Scheduling

**User Stories**

- **Volunteers view project needs**

  *Volunteers can view the work needed and time-slots available for work on a project so that they can decide what to volunteer for.*

- **User Story: Volunteers sign up for a project**

  *Volunteers can scheduled themselves for time-slots on a project so that admins and other volunteers can see when they will be working.*


## FAQ

### How should user roles and permissions be described in an Agile SCRUM backlog?

There are different approaches. Here are a couple:

- **User story**  
  Write a user story for each role. For example: *As an admin, I want to manage user permissions so that I can control access to sensitive data.*
- **Non-functional requirement**  
  Describe roles and permissions in the non-functional requirements section of the requirements document. For example: *The system will define an admin role which provides permission to manage other user permissions.*

### Is there a way to group epics in a larger project?

Yes, *Initiatives* are used to group epics. An initiative is a collection of epics with a common goal. For example:

**Initiative: Customer Self-Service Portal**  
Goal: Enable customers to independently manage their accounts, services, and support requests, reducing operational overhead and improving user experience.  
**Epics:**

- Customer account management
- Subscription management
- Technical support Requests
- Billing and payment management
- Analytics Dashboard  
  (Each epic would have user stories, but these are not shown.)



## Reference

[User Stories with Examples and a Template](https://www.atlassian.com/agile/project-management/user-stories)&mdash;Max Rehkopf, Atlassian

[User Stories: An Agile Introduction](http://www.agilemodeling.com/artifacts/userStory.htm)&mdash;Scott Ambler, Agile Modeling

[Stories, Epics and Initiatives](https://www.atlassian.com/agile/project-management/epics-stories-themes)&mdash; Max Rehkopf, Atlassian



------

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)
System Design Lecture Notes by [Brian Bird](https://profbird.dev), 2021, revised <time>2025</time>, are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

------

