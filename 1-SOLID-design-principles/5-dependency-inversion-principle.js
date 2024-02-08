/**
 * The Dependency Inversion Principle (DIP) is one of the SOLID principles of object-oriented design.
 * It states that high-level modules should not depend on low-level modules. Both should depend on abstractions.
 * Additionally, abstractions should not depend on details; rather, details should depend on abstractions.
 * In JavaScript, the Dependency Inversion Principle can be applied to create loosely coupled and easily maintainable code.
 */

// Break DIP
// Low-level module
class MySQLDatabase {
  save(data) {
    console.log('Saving data to MySQL database:', data);
  }
}

// High-level module (violating DIP)
class UserService {
  constructor() {
    this.database = new MySQLDatabase(); // Direct dependency on MySQLDatabase
  }

  saveUser(user) {
    this.database.save(user);
  }
}

// Usage
const userService = new UserService();
userService.saveUser({ name: 'John', age: 30 });

// Here's a revised example following the Dependency Inversion Principle:
// Abstraction (interface)
class Database {
  save(data) {
    throw new Error('save method must be implemented');
  }
}

// Low-level module implementing the abstraction
class MySQLDatabase extends Database {
  save(data) {
    console.log('Saving data to MySQL database:', data);
  }
}

// High-level module depending on the abstraction
class UserService {
  constructor(database) {
    this.database = database;
  }

  saveUser(user) {
    this.database.save(user);
  }
}

// Usage
const mySQLDatabase = new MySQLDatabase();
const userService = new UserService(mySQLDatabase);
userService.saveUser({ name: 'John', age: 30 });
