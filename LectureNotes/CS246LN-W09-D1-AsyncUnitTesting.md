# Testing Your Domain Model Design

**CS246N System Design**

[TOC]

## What to test

We are following the strategy of testing the design for the user stories that we think will be the most difficult to implement. We are seeking to answer the questions:

- Do I have the right classes in my domain model?
- Do I have the right relationships between those classes?

## How to test

The steps below show how you will test the high risk parts of the domain model. Note that you mgiht discover that you can't write a controller method that will satisfy one of these user stories. That means you will need to refactor the domain model!

1. Create scaffolding for the primary models or the models that you have questions about. You don't need scaffolding for every model.

2. Create an interface, real and fake repository or repositories for the models you want to test. 

   - Your repositories can just implement basic CRUD operations that mirror the controller methods in the scaffolding. Don't put searches or other business logic in the repository.
   - Refactor the scaffolding to use your repository instead of the DbContext. 
   - Your repositories can just have stub methods that throw a "Not implemented" exception.

   Note: if you are using scaffolded controllers, you will need to make all your repository methods async.

3. Create an unit test project and identify the tests you want to do. You can start out by just adding comments describing the tests. 

4. Red-light, Green-light TDD (Test Driven Development)

   - Write the first test. It should fail since you haven't written the code in the repository or the controller to satisfy the test conditions.

   - Write the code needed in the fake repository and controller. All business logic should be in the controller.
   - Test again and continue refactoring the repository and controller code until you get the test to pass.

   Note: It might be a good idea to write unit tests for just the fake repository first, then test the controller methods second. Do this if you aren't confident that your fake repository methods are correct.

5. Optional: Refactor the doamin model. If you can't write controller code that makes the test pass, it probably means you need to refactor the domain model. 

## Writing async unit tests

Since async methods should be called from other async methods, we will want our unit tests to be async. This will not only make our code more elegant, but make our unit tests run faster. This is how you do that:

- xUnit supports async test methods. Write your test methods as usual, but add the async keyowrd and return a Task, like this:

  ```C#
  [Fact]
  public async Task CreateTipTestAsync() {
      // Arrange--Done in the constructor
      // Act
      await controller.Create(tip);
     // Assert
     Assert.Contains<Tip>(tip, repo.Tips);
  }
  ```

  

- To test controller methods where you need to assert something about a ViewResult, you need to get the result in three steps:

  1. Get the ActionResult object out of the Task object by using *await*.
  2. Cast the ActionResult object to a ViewResult (which is what it really is).
  3. Extract the model object from the ViewResult.

  ```C#
  // Act
  var actionResult =  await controller.Index();
  var viewResult = (ViewResult)actionResult;
  var tips = (List<Tip>)viewResult.Model;   
  // Assert
  Assert.Equal(3, tips.Count);
  ```



- To return a Task object from a non-async operation in your fake repository, use the static *Task.FromResult<>(*) method.

  ```C#
  public Task<int> AddTipAsync(Tip tip)  {
    int success = 0;
    if (tip != null)  {
      tips.Add(tip);
      success = 1;
    }
    return Task.FromResult<int>(success);
  }
  ```

  

------

 [![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)System Design  Lecture Notes by [Brian Bird](https://profbird.online), 2018 (Revised 2020), are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). 

------