/**
 * The Single Responsibility Principle (SRP) is one of the SOLID principles of object-oriented design, and it encourages the idea that a class should have only one reason to change. In the context of JavaScript, where object-oriented principles are often applied, SRP can be valuable for writing maintainable and modular code.
 */
// Not following SRP
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  saveToDatabase() {
    // Save user data to the database
  }

  sendEmail() {
    // Send a welcome email to the user
  }
}

// Following SRP
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  saveToDatabase(user) {
    // Save user data to the database
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    // Send a welcome email to the user
  }
}
