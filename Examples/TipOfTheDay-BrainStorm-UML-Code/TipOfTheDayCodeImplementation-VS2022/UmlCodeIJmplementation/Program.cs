using System;
using System.Collections.Generic;

namespace UmlCodeIJmplementation
{
    public class User
    {
        public String Name { get; set; }
        public String Email { get; set; }
        public String Password { get; set; }

        public void EncryptPassword(string pword)
        {
            // TODO: Actually encrypt the password
            Password = pword;
        }

    }

    public class Admin : User   // Inheritance
    { }


    public class Tip
    {
        private List<Comment> comments = new List<Comment>();  // An empty list
        public List<Comment> Comments { get { return comments; } }
        public String Topic { get; set; }
        public int Rating { get; private set; }
        public string Explanation { get; set; }
        public User Author { get; private set; }  // Composition

 
        // No parameterless constructor since Tips must have an Author

        public Tip(User user)
        {
            Author = user;
        }

        public void AddComment(Comment c)
        {
            comments.Add(c);    // Aggregation
        }

        public void CalcRating(int r)
        {
            // TODO: Actually calculate the rating
            Rating = r;
        }
    }

    public class Comment
    {
       public String CommentText { get; set; }
        public User Author { get; private set; }  

        public Comment(User u)
        {
            Author = u;  // Composition
        }

    }

    class Program
    {
        static void Main(string[] args)
        {
            // Create a user and create a tip by that user
            User brian = new User() { Name = "Brian" };
            Tip tip = new Tip(brian);
            tip.Explanation = "Always write DRY code. DRY means \"Don't Repeat Yourself\"--write a method instead of copying and pasting blocks of code.";
            
            // Create another user, create a comment by that user and add it to the tip
            User jane = new User() { Name = "Jane" };
            Comment comment = new Comment(jane);
            comment.CommentText = "This is a really important part of 'best practice'";
            tip.AddComment(comment);

            // Add another comment
            User jordan = new User() { Name = "Jordan" };
            comment = new Comment(jordan);
            comment.CommentText = "Yeah, this one is really important";
            tip.AddComment(comment);

            // Display the tip and comments
            System.Console.WriteLine("Tip by " + tip.Author.Name);
            System.Console.WriteLine(tip.Explanation);
            foreach (Comment c in tip.Comments)
            {
                System.Console.WriteLine("Comment by " + c.Author.Name);
                System.Console.WriteLine(c.CommentText);
            }
        }
    }
}
