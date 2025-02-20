<h1>Common Epic and User Story Mistakes</h1>

**CS246N System Design**

<h2>Contents</h2>

[TOC]

## Introduction

This list of common mistakes was compiled from mistakes in assignments done by students in previous years.

## Focusing on implementation in user stories or epics

Including terms like "implement" or "develop" in epics (e.g., "Implement user login") instead of framing them as user-centric features (e.g., user authentication). Epics and user stories should describe *what* the user needs, not *how* to build it.

Examples:

- Negative: Story *"Implement user login functionality."*
- Positive: Story *"As a user, I want to log in and be authenticated so that any information I enter will be private."*

## Treating non-actionable requirements as epics or user stories
Including broad concepts like "Site Wide Branding" or "Positive User Experience" as epics. These are not user-driven actions or deliverables and cannot be completed in a single sprint.  

- Negative: *"Provide a positive user experience"* (vague, not action-driven).
- Positive: *"As a user, I want a unified menu design across all pages so that I can navigate the site intuitively."*

## Insufficient breakdown of epics into user stories
Creating epics with only one user story. Epics should represent larger features that can be split into smaller, actionable stories.  

- Negative: Epic *"Managers view an Inventory list"* with only one story: *"As a manager I want to see an inventory list so I can check inventory levels"*
- Positive:  Epic *"Manage Inventory list"* with multiple user stories: *"...view inventory list..., ...set minimum inventory levels..., ...see alterts for low inventory..."*

## Omitting the "so that" clause in user stories
Writing incomplete user stories without specifying the benefit or value (e.g., "As a user, I want to filter products" instead of "As a user, I want to filter products *so that I can quickly find relevant items*").  

- Negative: *"As a user, I want to filter products."*.
- Positive: *"As a user, I want to filter products **so that I can quickly find items matching my budget.**"*

## Describing infrastructure implementation in user stories
There is some infrastructure that will need to be set up for a project that doesn't correspond to any user story (e.g. create a database, write a domain model, set up a cloud-based web server).  These should be listed as *tasks* not user stories.

- Negative: User Story *"As a user I want my data stored in a database so I can retrieve it later"*
- Positive: Task *"Set up a database server and define a schema to be used by the application"*

Note: Assigning user roles and permissions could go in <u>either</u> a task or user story.

- Positive: User Story *"As an admin I would like to have a role with special priveleges so I can access restricted site administration pages"*
- Also Positive: Task "Set up roles and permissions for: admin, member and guest".

## User stories that are actually epics
Writing stories that are actually epics. Epics should be broader in scope and serve as an "umbrella" for a group of related user stories.

- Negative: User story: *"As a user, I want a complete dashboard **so that I can manage my entire business."****
- *Positive: Epic: *"Dashboard functionality"*
  - Stories under this epic might be: *"...view monthly sales metrics...,"* *"...customize dashboard widgets...,"* *"...export dashboard data to PDF...", etc*

## Epics that are actually user stories

- Negative: Epic: *"Add a search bar to the homepage"* (Too narrow; this is a single feature, not a large initiative).
  Positive: Epic: *"User product discovery"*
  - Possible user stories under this epic: *"...search for products...", "...filter product list...", "..browse products...", etc.*

## Using incomplete sentences
User stories should be complete sentences.

- Negative: *"User logout button"*
  Positive: *"As a user, I need to be able to logout of my account so that someone else can't access it"*

## Putting Non-functional requirements into user stories
User stories should not be written for non-functional requirements (e.g., "Improve server response time"). These should just be listed in the requirements document and if there are implementation tasks required they should be listed as tasks in the Scrum backlog.



[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)
System Design Lecture Notes by [Brian Bird](https://profbird.dev), <time>2025</time>, are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
