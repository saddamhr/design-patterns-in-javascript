/**
 * The Interface Segregation Principle (ISP) is one of the SOLID principles of object-oriented design,
 * and it suggests that a class should not be forced to implement interfaces it does not use. In simpler terms,
 * it advocates breaking down large interfaces into smaller, more specific ones that are relevant to the classes that implement them. In JavaScript,
 * this principle can be applied through the use of interfaces, even though JavaScript itself does not have explicit support for interfaces as in some other programming languages.
 */

// Interface for a general-purpose worker
class WorkerInterface {
  work() {
    throw new Error('Method not implemented');
  }

  eat() {
    throw new Error('Method not implemented');
  }
}

// Classes implementing the WorkerInterface
class Engineer extends WorkerInterface {
  work() {
    console.log('Engineer is working on a project.');
  }

  eat() {
    console.log('Engineer is eating lunch.');
  }
}

class Waiter extends WorkerInterface {
  work() {
    console.log('Waiter is serving customers.');
  }

  eat() {
    console.log('Waiter is taking a break to eat.');
  }
}

// Interface segregation applied
class EngineerInterface {
  work() {
    console.log('Engineer is working on a project.');
  }
}

class WaiterInterface {
  work() {
    console.log('Waiter is serving customers.');
  }

  eat() {
    console.log('Waiter is taking a break to eat.');
  }
}

/**
 * In this example, the original WorkerInterface has two methods (work and eat).
 * However, not all workers need both methods. By segregating the interfaces into EngineerInterface and WaiterInterface,
 * each class can implement only the methods that are relevant to its role. This adheres to the Interface Segregation Principle,
 * making the code more maintainable and avoiding unnecessary dependencies for classes that don't need certain methods.
 */
