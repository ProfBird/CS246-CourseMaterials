<h1>Common Epic and User Story Mistakes</h1>

**CS246N System Design**

<h2>Contents</h2>

[TOC]

## Writing tasks instead of feature descriptions in epics
Including terms like "implement" or "develop" in epics (e.g., "Implement user login") instead of framing them as user-centric features (e.g., "User authentication"). Epics should describe *what* the user needs, not *how* to build it.

Examples:

- Negative: *"Implement user login functionality"* (focuses on a task).
- Positive: *"As a user, I want to log in and be authenticated so that any information I enter will be private."*

## Treating non-actionable requirements as epics or user stories
Including broad concepts like "Site Wide Branding" or "Positive User Experience" as epics. These are not user-driven actions or deliverables and cannot be completed in a single sprint.  

- Negative: *"Provide a positive user experience"* (vague, not user-driven).
- Positive: *"As a user, I want a unified menu design across all pages so that I can navigate the site intuitively."*

## Insufficient breakdown of epics into user stories
Creating epics with only one user story. Epics should represent larger features that can be split into smaller, actionable stories.  

- Negative: Epic *"Managers view an Inventory list"* with only one story: *"As a manager I want to view an inventory list so I can check inventory levels"*
- Positive:  Epic *"Manage Inventory list"* with multiple user stories: *"...view inventory list..., ...set minimum inventory levels..., ...see alterts for low inventory..."*
- **Omitting the "so that" clause in user stories**  
  Writing incomplete user stories without specifying the benefit or value (e.g., "As a user, I want to filter products" instead of "As a user, I want to filter products *so that I can quickly find relevant items*").  
- **Confusing user roles with user stories**  
  Listing user roles (e.g., "As an admin") as standalone stories. User roles should contextualize stories, while actions (e.g., "create roles") belong in tasks or acceptance criteria.  
- **Mixing epics and user story hierarchy**  
  Writing stories that are actually epics (e.g., "C-15, 22, and 30 are more like epics"). Epics require decomposition into smaller stories, while user stories should be granular and sprint-ready.  
- **Using incomplete sentences**  
  Failing to structure user stories as complete statements (e.g., "User login button" instead of "As a user, I want a login button so that I can access my account").  
- **Overlooking the user’s perspective**  
  Writing stories from a technical or system-focused viewpoint (e.g., "Improve server response time") instead of centering the user’s needs (e.g., "As a user, I want fast page loads so that I don’t get frustrated").



[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)
System Design Lecture Notes by [Brian Bird](https://profbird.dev), <time>2025</time>, are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
