# Example Requirements Document for Titan Park

[TOC]

## First Interview

Titan Park Interview Transcript

**Mr. Smith (Interviewer):** "Good morning, Ms. Davis. Thank you for taking the time to meet with me today. I'm John Smith, a systems analyst, and I'm here to learn more about the Titan Park and explore how technology might be able to improve your operations."

**Ms. Davis (park manager):** "Good morning, Mr. Smith. It's a pleasure to meet you. Thank you for coming. Please, have a seat. I'm always happy to discuss ways to improve our work at Titan Park."

**Mr. Smith:** "To begin, could you tell me a little about Titan Park and its mission?"

**Ms. Davis:** "Certainly. We're a non-profit organization dedicated to protecting and enhancing the native ecosystems in the park and the surrounding area. Our mission is to conserve the area's botanical, fish, wildlife, and recreational values. We achieve this through a variety of means, including fundraising, mobilizing volunteers, and conducting restoration projects."

**Mr. Smith:** "Can you describe your current operations in more detail?"

**Ms. Davis:** "We rely heavily on the support of our community. We generate income through membership fees, donations, and business sponsorships. We also operate a Native Plant Nursery, which provides a valuable source of funding and contributes to the restoration efforts. A significant portion of our work is carried out by volunteers who contribute their time and skills to various projects."

**Mr. Smith:** "What are some of the biggest challenges you face in your current operations?"

**Ms. Davis:** "One of our biggest challenges is effectively managing and coordinating our volunteers. We currently rely on paper sign-up sheets and email communication, which can be inefficient and difficult to track. We also struggle to effectively communicate project needs and match volunteers with the projects that best suit their interests and skills."

**Mr. Smith:** "Can you describe your current volunteer recruitment and management process?"

**Ms. Davis:** "We have an application form that volunteers can fill out and submit by mail or in person. We then manually enter their information into a spreadsheet. We also maintain a calendar of upcoming projects and rely on email blasts to inform volunteers about opportunities. However, this process is time-consuming and prone to errors. It can be difficult to keep track of volunteer availability and ensure that the right people are assigned to the right projects."

**Mr. Smith:** "How do you currently communicate with your volunteers about upcoming projects and events?"

**Ms. Davis:** "We primarily use email newsletters and social media posts to communicate with our volunteers. However, these methods can be inconsistent and may not reach all of our volunteers."

**Mr. Smith:** "Have you considered using technology to improve your volunteer management?"

**Ms. Davis:** "We have discussed the possibility of using volunteer management software, but we haven't found a solution that meets all of our needs and fits within our budget. We are also concerned about the time and resources required to implement and maintain such a system."

**Mr. Smith:** "I understand. I believe technology can significantly improve your volunteer recruitment and management processes. I'll be sure to analyze the information you've provided and present you with some potential solutions."

**Ms. Davis:** "Thank you, Mr. Smith. I appreciate you taking the time to understand our challenges. I look forward to hearing your recommendations."

**Mr. Smith:** "Thank you again for your time. Have a wonderful day."

**Ms. Davis:** "You too."

## Second Interview

**Mr. Smith:** "Good morning, Ms. Davis. Thank you for taking the time to speak with me again. I'm John Smith, a systems analyst, and I'm here to gather further information about your volunteer management needs."

**Ms. Davis:** "Good morning, Mr. Smith. It's a pleasure to see you again. Please, come in. I'm ready to discuss this further."

**Interviewer:** "In our previous conversation, you mentioned challenges with volunteer recruitment. Could you elaborate on the specific difficulties you encounter?"

**Ms. Davis:** "Certainly. First, it's challenging to reach potential volunteers who might be interested in our work. We rely heavily on word-of-mouth and local community events, but we need a more consistent and targeted approach. Second, our current application process is cumbersome. Volunteers have to print out the form, fill it out by hand, and then mail it or bring it to our office. This can be a barrier for some people."

**Interviewer:** "What specific information do you need to collect from volunteers during the application process?"

**Ms. Davis:** "We require basic contact information, such as name, phone number, and email address. We also ask about their availability and any relevant skills or experience they may have, such as gardening, trail maintenance, or wildlife observation. It's important for us to understand their interests so we can match them with appropriate projects."

**Interviewer:** "How do you currently communicate volunteer schedules and project updates to volunteers?"

**Ms. Davis:** "As I mentioned earlier, we primarily use email newsletters and social media. However, this method can be unreliable. Emails can get lost in inboxes, and not all volunteers are active on social media. We also use a physical bulletin board at our office to post upcoming projects, but this is not accessible to all volunteers."

**Interviewer:** "What are your preferred methods for communicating with volunteers?"

**Ms. Davis:** "We would prefer a system that allows for direct communication with individual volunteers or groups of volunteers. This could include email notifications, text messages, or even a messaging system within the volunteer management platform. We also need a way to easily share important information, such as project updates, safety guidelines, and emergency contact information."

**Interviewer:** "How important is it to track volunteer hours and recognize their contributions?"

**Ms. Davis:** "Tracking volunteer hours is important for several reasons. First, it allows us to demonstrate the significant impact of volunteer contributions to our organization. Second, it helps us to recognize and appreciate the efforts of our volunteers. We often award certificates or other tokens of appreciation to volunteers who have contributed a significant number of hours."

**Interviewer:** "What features would be most beneficial in a volunteer management system?"

**Ms. Davis:** "An online application form would be a huge improvement. We also need a system for scheduling volunteers for specific projects, tracking their hours, and communicating with them effectively. The ability to generate reports on volunteer activity would also be very valuable for our organization."

**Interviewer:** "Thank you for providing these valuable insights. This information will be extremely helpful in identifying the best software solution for your volunteer management needs."

**Ms. Davis:** "Thank you, Mr. Smith. I appreciate you taking the time to gather more detailed information. I look forward to hearing your recommendations."

**Interviewer:** "Thank you again for your time. Have a wonderful day."

**Ms. Davis:** "You too."

## Requirements Document

### 1. Purpose and Scope

- Objective:
  - To develop a user-friendly and efficient volunteer management system for Titan Park.
  - To streamline volunteer recruitment, scheduling, communication, and tracking.
  - To improve volunteer engagement and increase the impact of volunteer contributions.
- Scope:
  - In Scope:
    - Online volunteer application form.
    - Volunteer scheduling and assignment system.
    - Communication platform for volunteers and project managers.
    - Volunteer hour tracking and reporting.
    - User accounts and access control.
    - Basic reporting features (e.g., volunteer hours by project, volunteer activity summaries).
  - Out of Scope:
    - Financial management (e.g., payroll, fundraising).
    - Advanced analytics and data mining.
    - Integration with third-party fundraising platforms.
    - Mobile application development.
    - Complex GIS mapping and spatial data analysis.

### 2. Stakeholders

- List of Stakeholders:
  - Internal Stakeholders:
    - Executive Director
    - Program Managers
    - Volunteer Coordinators
    - Staff
  - External Stakeholders:
    - Volunteers
    - Donors
    - Community Partners
    - Land Managers (e.g., US Forest Service)
- Stakeholder Roles and Responsibilities:
  - **Executive Director:** Approve budget, define project scope, provide strategic direction.
  - **Program Managers:** Define project needs, review volunteer applications, assign volunteers to projects.
  - **Volunteer Coordinators:** Manage day-to-day volunteer operations, communicate with volunteers, track volunteer hours.
  - **Volunteers:** Submit applications, view project schedules, update availability, receive communications.
  - **Donors:** Benefit indirectly through increased volunteer impact and community engagement.
  - **Community Partners:** Collaborate on projects and may contribute volunteers.

### 3. Functional Requirements

- **Detailed Features and Functions:**
  - Volunteer Application:
    - Online form for volunteers to submit contact information, availability, skills, and preferred projects.
      - Form has lists of skills and projects from which applicants can choose.
    - Ability to attach resumes or cover letters.
  - Volunteer Scheduling:
    - Calendar view of upcoming projects with available slots for volunteers.
    - Ability for volunteers to sign up for projects and view their assigned projects.
    - Automated email notifications for project assignments and reminders.
  - Communication:
    - Messaging system for communication between volunteers and project managers.
      - A general message board for group communication.
      - Ability to send and recive private messages.
    - Email and SMS notifications for urgent announcements and updates.
  - Volunteer Hour Tracking:
    - System for volunteers to log their hours worked on each project.
    - Ability for project managers to approve or adjust logged hours.
  - Reporting:
    - Generate reports on volunteer hours by project, volunteer activity summaries, and overall volunteer engagement.
      - Volunteer activity summaries would show work on a project done by a particular volunteer.
      - Overall volunteer engagement would show statistics on volunteer work hours and communication.
  - User Accounts and Access Control:
    - Create user accounts for staff and volunteers with appropriate access levels. Access levels (authorization levels):
      - Manager
      - Employee
      - Volunteer
    - Secure login and password management.

### 4. Non-Functional Requirements

- Performance Requirements:
  - System should load quickly and respond to user actions within 2 seconds.
- Scalability:
  - System should be able to accommodate a growing number of volunteers and projects.
- Security:
  - Secure data storage and transmission using encryption.
  - Strong password policies and two-factor authentication.
  - Regular security audits and vulnerability assessments.
- Usability:
  - Intuitive and user-friendly interface with clear navigation.
  - Accessible to users with disabilities (e.g., screen reader compatibility).
- Reliability:
  - High availability with minimal downtime.
  - Regular backups and disaster recovery procedures.

### 5. Constraints

- Technical Constraints:
  - Compatibility with existing website and software.
  - Integration with existing email and messaging systems.
- Budget and Timeline:
  - Project budget of [Amount].
  - Project deadline of [Date].

### 6. Assumptions and Dependencies

- Assumptions:
  - Users will have access to the internet and a web browser.
  - Volunteers will have basic computer literacy skills.
  - Staff will receive adequate training on the use of the system.
- Dependencies:
  - Reliable internet connectivity.
  - Access to email and messaging services.

### 7. Data Requirements

- Input:
  - Volunteer application data (name, contact information, skills, availability).
  - Project details (name, description, dates, location, volunteer needs).
  - Volunteer hours worked.
- Output:
  - Volunteer reports.
  - Project summaries.
  - Communication logs.
- Storage:
  - Database to store structured data.
  - Cloud storage for backups and large files.
- Data Integrity:
  - Data validation rules to ensure data accuracy and consistency.
  - Regular data backups and recovery procedures.

### 8. Interface Requirements

- User Interfaces:
  - Clean and intuitive web-based interface with a user-friendly design.
  - Mobile-responsive for access on smartphones and tablets.
- External Systems:
  - Potential integration with email marketing platforms (e.g., Mailchimp).

### 9. Risk Analysis and Mitigation

- Potential Risks:
  - Budget overruns.
  - Project delays.
  - Data breaches and security vulnerabilities.
  - User resistance to change.
  - Lack of user training and support.
- Mitigation Plans:
  - Develop a detailed project plan with realistic timelines and budgets.
  - Conduct regular risk assessments and adjust plans as needed.
  - Implement robust security measures and conduct regular security audits.
  - Provide comprehensive user training and ongoing support.
  - Obtain user feedback and address concerns promptly.

### 10. Acceptance Criteria

- Definition of Done:
  - All functional and non-functional requirements are met.
  - System is thoroughly tested and free of major bugs.
  - User documentation and training materials are complete.
  - System is successfully deployed and handed over to the client.
- Validation and Verification Plans:
  - Unit testing of individual components.
  - Integration testing of the entire system.
  - User acceptance testing (UAT) by key stakeholders.
  - Performance and load testing.
  - Security audits and penetration testing.



Note: The first draft of this document was generated by Gemini 1.5 Flash.



------

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)
System Design Course Materials by [Brian Bird](https://profbird.dev), <time>2025</time>, are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

------

