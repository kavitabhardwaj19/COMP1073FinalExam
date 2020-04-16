// JavaScript Document

//This is an example of class syntax (also known as class inheritance), which is a way for one class to extend another class. In this syntax, the properties are defined inside the constructor (like name, age, gender, interests are defined inside the constructor of the class Person).
//'this.name' was there, but '= name' so I corrected it for my own sake.
class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

//As told by you defining a method with/without prototype would work for class syntax. Here, these 2 methods are defined without prototype.
//This greeting method is used to greet the user with their name.
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

//This bye method is used to tell that user (with their name) left the building.
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}

//Here are 2 instances created of people with reference to the class Person as defined above.
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//This is a subclass created for Teacher that inherits from Person. Teacher have access to Person methods. The syntax to extend another class is called class Child extends Parent. Also, there are 2new properties of Teacher (subject and grade) that are specific to Teacher only.
class Teacher extends Person {
  constructor(name, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

//Here is the instance created of a teacher with reference to the Teacher as defined above with all the properties.
let jessica = new Teacher('Jessica', 34, 'female', ['Cats', 'Coffee', 'JavaScript'], 'JavaScript', 100);
