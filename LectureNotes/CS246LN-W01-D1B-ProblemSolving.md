# Problem Solving

**CS 246 System Design**

[TOC]

## Software is Written to Solve Problems

For software to be useful and to be adopted by users, it needs to satisfy some real need.  

Note that in this context "problem" means *need*. It doesn't mean something is broken.

### Types of solutions

The needs of a person, business, or organization can be fulfilled with different types of solutions:

- Provide new tools and new ways to do things: spreadsheets, Learning Management Systems, Project management (MS Project, Jira, Trello)
- Automate processes: automated manufacturing, self-serve banking

- Improve communication and relationships: e-mail, text messages, online meetings (Zoom), group communication (Discord, Teams), social media
- Provide entertainment: streaming movies, computer games, podcasts
- Write custom software to do things that "off the shelf" software doesn't do.
- And more.

### How to come up with solutions

#### Look at someone else's solution to a similar problem

Example problem: A new food delivery service is having trouble scheduling it's deliveries.

- Look at how Uber and Lyft schedule drivers.
- Look at how UPS or FedEx schedule deliveries.

#### Turn a manual solution into a computer based solution

Example problem: A farmer spends a lot of time going around his fields turning on and off sprinklers and other irrigation systems based on the growing season, weather and dryness of the soil.

- Use a computer based system to control irrigation valves according to a schedule.
  - Add a feature to measure soil moisture for added control.
  - Add a feature to adapt the schedule to the weather.

#### Come up with a novel solution

Use your imagination to dream up a solution you haven't seen before.

Example problem: people get too many e-mails in their in-boxes

- Write a program that uses machine learning to sort mail into categories

  - Users train the system by dragging mail into folders they define

    - Personal
    - News
    - Business

  - The software learns to recognize these types of e-mails and puts them in the right folder.

    

### How to identify problems (needs)

A problem may not be something that is currently seen as a problem or a need. It might just be something that can be improved. 
Example: before the smart phone became a thing, how many people thought that there was a problem with their mobile phone?

Here are things to look for:

- A process that takes a long time to complete
- A process that is prone to mistakes
- A situation where communication is lacking
- A situation where data is hard to access
- Something that isn't fun to do
- And more

#### Methods for assessing needs

- Interviews or surveys of:
  - Business owners, managers and employees.
  - Customers or end users.
- Observe the work process
- Job shadowing 

### How to document requirements

After identifying problems (needs), these can be described in a formal document called a *requirements document*. A requirements document doesn't describe the way to solve a problem (or problems), it just describes in detail what issues the solution will need to solve. 

We are going to assume the solution is some computer *system*. By *system*, we mean some combination of sofware and hardware. This could include servers, desktop/laptop computer and mobile devices as well as software running on each of these.

The requirements document should include these elements:

1. Purpose and Scope
  - Objective: Explains why the system is being developed and its primary goals.
  - Scope: Defines the boundaries of the system, including what is in and out of scope.
2. Stakeholders
  - List of Stakeholders: Identifies key individuals, groups, or organizations impacted by the system.
  - Stakeholder Roles and Responsibilities: Defines how stakeholders interact with and influence the system.
3. Functional Requirements
  - Detailed Features and Functions: Specifies what the system must do, e.g., “The system must accept  user payments made by credit or debit card.”
  - Use Cases or User Stories: Illustrates scenarios of how users interact with the system.
4. Non-Functional Requirements
  - Performance Requirements: Speed, responsiveness, or throughput.
  - Scalability: How the system should handle growth.
  - Security: Authentication, encryption, and data protection standards.
  - Usability: Ease of use and accessibility requirements.
  - Reliability: Expected uptime and failure recovery procedures.
5. Constraints
  - Technical Constraints: Technology stack, compatibility, or legacy system dependencies.
  - Regulatory and Legal Constraints: Compliance with standards or laws.
  - Budget and Timeline: Financial or scheduling limitations.
6. Assumptions and Dependencies
  - Assumptions: Conditions presumed to be true for the project, e.g., “Users will have a stable internet connection.”
  - Dependencies: External factors or systems the project relies on.
7. Data Requirements
  - Input and Output: Formats, sources, and destinations of data.
  - Storage: Database or file storage requirements.
  - Data Integrity: Standards for maintaining consistency and accuracy.
8. Interface Requirements
  - User Interfaces: Specifications for screens, dashboards, and navigation.
  - External Systems: APIs, third-party integrations, or hardware interfaces.
9. Risk Analysis
  - Potential Risks: Identifies technical, financial, or operational risks.
  - Mitigation Plans: Steps to reduce the likelihood or impact of risks.
10. Acceptance Criteria
    - Definition of Done: Criteria to determine when the system meets requirements.
    - Validation and Verification Plans: How the system will be tested and evaluated.



## Lab Assignment

You will look at a web site for a business or organization and try to infer some things about their mission from the web site. Then you will write a proposal for software that will help them better meet their needs.

------

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)
System Design Lecture Notes by [Brian Bird](https://profbird.dev), 2021, revised <time>2024</time>, are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

------

