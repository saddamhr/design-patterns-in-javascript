/**
 * The Liskov Substitution Principle (LSP) is one of the SOLID principles of object-oriented design,
 * and it emphasizes that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
 * In JavaScript, which is a prototype-based language rather than a class-based one, the Liskov Substitution Principle can be applied in a similar manner.
 */

// Base class
class Bird {
  fly() {
    console.log('The bird is flying.');
  }
}

// Subclass
class Penguin extends Bird {
  // Penguins can't fly, so we override the fly method
  fly() {
    console.log("Sorry, I can't fly.");
  }

  swim() {
    console.log('The penguin is swimming.');
  }
}

// Function using Bird as a parameter
function makeBirdFly(bird) {
  bird.fly();
}

// Using Liskov Substitution Principle
const genericBird = new Bird();
const penguin = new Penguin();

makeBirdFly(genericBird); // Output: The bird is flying.
makeBirdFly(penguin); // Output: Sorry, I can't fly.
