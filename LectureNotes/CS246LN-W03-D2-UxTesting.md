# User eXperience Testing

**CS246, System Design**

[TOC]

## Overview of UX Testing

Getting user feedback early and often is at the heart of any Agile development process!

-  Usability testing is different from functional testing.
  How easy and pleasurable is the experience of using the software vs. does the software work correctly.
- Types of usability testing:
  - Individual testers
  - Focus groups
- Means of getting feedback
  - Surveys
  - Interviews
  - Recordings of testers- audio and/or video
  - Instrumenting the code (for alpha and beta testing)  
    Add logging features to the code to record user's actions
- What to test
  - Sketches (even on a napkin!)

  - Wire-frames

  - Mock-ups
  - Prototypes
  - Real code


​        

## My experience at Intel with focus groups

These are some of the things my development group (Intel Architecture Labs) and I did:

- Built mock-ups and prototypes  
     - Mock-ups look like working software, but don't have any functionality.

     - Prototypes have some limited functionality.

- Wrote a step-by-step test script for testers to follow
         (Prototypes had "canned" responses, so following a test script was essential).

- Observed focus group sessions

  - Three or four people were in each focus group. 
        They were selected and paid by a professional agency.
  - Participants were in a room with a computer and a moderator. 
    - Observers were in another room watching through a one-way mirror. 
    - We had video cameras recording the participants (with their permission).

  - A professional moderator operated the computer according to the test script. 
    - This helps avoid the problem of participants not wanting to hurt the developers' feelings and of the developer grimacing and looking hurt in front of the participants.

    - The participants didn't touch the computer; they just watched and answered questions.


  - We developers all watched the videos afterward and discussed the participants' responses.
              

## Rocket Surgery made easy approach

Based on the Book: *Rocket Surgery Made Easy, The Do-It-Yourself Guide to Finding and Fixing Usability Problems*, by Steve Krug, 2010. Web site: http://www.sensible.com/rsme.html

- Do UX testing at the end of every sprint; this is a minimum, for Agile.
- Start earlier than you think makes sense.
  - Show participants (testers) anything from sketches to working code.
  - The earlier you start, the less you'll have to change.
- Recruit from a wide pool.
  - Getting people who are like your "target audience" is a nice goal, but don't be too strict about it.
  - Don't use the same group of testers twice; unless all they saw were sketches&mdash;if you can.
              
- Make it a spectator sport (about the observers, the devs)
  - The eureka moment: the users aren't all like me!
  - Watching live is more impactful than watching a recording.
  - Get the whole development team to watch&mdash;even the project funders.
           (but having them in another room is less intimidating to the participants).
  - Give devs instructions (what to watch for).
  - Be ready for criticism, take it as constructive and helpful.
  - Provide food (snacks).
- Hold a debriefing and produce:
  - A list of the most serious problems
  - A list (smaller) of what you will fix before the next test
    - Focus ruthlessly on a small number of the most important problems.
  - More food (lunch)
- When fixing problems, always do the least you can do
  - "What's the smallest, simplest change we can make that's likely to keep people from having the problem we observed?"
  - "The perfect is the enemy of the good"
           (Opposite of the "good is the enemy of the best")
  - Taking something away is sometimes better than adding something.
  - Avoid redesign unless it's really necessary
  - Only re-test major changes, not tweaks




------

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)
System Design Lecture Notes by [Brian Bird](https://profbird.dev), 2021, revised 2024, are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

------

