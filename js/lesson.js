// factory function

function createPerson(firstName, lastName, country, city) {
  return {
    firstName: firstName,
    lastName: lastName,
    address: {
      country: country,
      city: city,
    },
    greet: function () {
      console.log(`Hello, I am ${this.firstName} ${this.lastName}.`);
    },
  };
}

const ola = createPerson("Ola", "Nordmann", "Norway", "Oslo");
ola.greet();

// object literal

const myObjectLiteral = {
  // A number type stored as the value
  myValue: 99,
  // method stored under 'myFunction' key
  myMethod: function () {
    // Accessing 'myValue' with the 'this' keyword
    console.log(this.myValue);
  },
};

const shoppingCart = {
  // Stores the cart items
  cart: [],
  // Adds a single item to the 'cart' array
  addToCart: function (item) {
    this.cart.push(item);
  },
  // Displays the contents of the cart
  getCartItems: function () {
    console.log("Cart:", this.cart);
  },
};

// Add an item to the cart
shoppingCart.addToCart({ name: "Milk", price: 9.99 });
// Display the cart contents
shoppingCart.getCartItems();

// const user = {
//   firstName: "John",
//   lastName: "Nordmann",
//   setFirstName: function (newFirstName) {
//     //
//     this.firstName = newFirstName;
//   },
// };
// user.setFirstName("Ola");
// // Logs 'Ola'
// console.log(user.firstName);

const user = {
  _firstName: "John",

  // The 'setter'
  set firstName(newFirstName) {
    this._firstName = newFirstName;
  },

  // The 'getter'
  get firstName() {
    return this._firstName;
  },
};

// Use the 'firstName' setter
user.firstName = "Mike";
// Use the 'firstName' getter
console.log(user.firstName);

// IIFE

// IIFEs (Immediately-Invoked Function Expressions), pronounced “Iffys”, are functions that are immediately executed without you having to explicitly call them

// Module pattern

(function () {
  console.log("This function is called as soon as the function is defined");
})();

// There is an anonymous function that prevents variables inside the IIFE from polluting the global scope.
// After the function is the invoked function expression () which causes the function to be called.
// used for module patterns

const modulePatternExample = (function () {
  /* Private variables and methods */

  // Private variable
  const _privateVariable = "Private";

  const _privateMethod = function () {
    console.log("Private method");
  };

  /* Public variables and methods */
  // These variables and methods added to the 'return'  so they can be accessed

  // Public variable
  const publicVariable = "Public";

  // Public method
  const publicMethod = function () {
    console.log("Public method");
  };

  // Return the public variables and functions so they can be accessed
  return {
    publicVariable,
    publicMethod,
  };
})();

modulePatternExample.publicMethod();
console.log(modulePatternExample.publicVariable);

const shoppingCart1 = (function () {
  const _cart = [];

  function addToCart(item) {
    _cart.push(item);
  }

  function getCartItems() {
    // Return a new array
    return [..._cart];
  }

  return {
    addToCart,
    getCartItems,
  };
})();

shoppingCart1.addToCart({ name: "Milk", price: 19.99 });
console.log(shoppingCart1.getCartItems());
// Returns:
// [{name: 'Milk', price: 19.99}]

// singleton pattern

const Singleton = (function () {
  // This is our main instance data
  let instance;

  // This creates a new instance
  function createInstance() {
    const object = { message: "Hello world" };
    return object;
  }

  return {
    // We return our instance, but we first check if it
    // doesn't exist. If it doesn't exist, we create a new
    // one before we return
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1);
// Logs: {message: 'Hello world'}
console.log(instance2);
// Logs: {message: 'Hello world'}
console.log("Is the same object:", instance1 === instance2);
// Logs: Is the same object: true

// observer pattern

function Subject() {
  // This will contain our objects that are subscribed to
  // our subject
  this.observers = [];
}

Subject.prototype = {
  // This "subscribe" function adds objects to our
  // observer
  subscribe: function (functionToAdd) {
    this.observers.push(functionToAdd);
  },
  // This "unsubscribe" function removes objects to our
  // observer
  unsubscribe: function (functionToRemove) {
    this.observers = this.observers((currentFunction) => {
      if (currentFunction != functionToRemove) {
        return currentFunction;
      }
    });
  },
  // This "fire" function calls for all of our subscribed
  // objects to act
  fire: function () {
    this.observers.forEach((currentFunction) => {
      currentFunction.call();
    });
  },
};

// This example function will get added to the
// Subject
function ExampleFunction1() {
  console.log("Example function 1");
}

// This example function will also get added to the
// Subject
function ExampleFunction2() {
  console.log("Example function 2");
}

// Creating a new subject which we will add our
// example functions to
const subject = new Subject();

// Adding both of our example functions to our subject
subject.subscribe(ExampleFunction1);
subject.subscribe(ExampleFunction2);

// Firing our subject with a single function which
// will then cause both of our subscribed functions to
// react
subject.fire();
// Logs:
// Example function 1
// Example function 2

// example as a class

class Subject1 {
  constructor() {
    // This will contain our objects that are subscribed to
    // our subject
    this.observers = [];
  }
  // This "subscribe" function adds objects to our
  // observer
  subscribe(functionToAdd) {
    this.observers.push(functionToAdd);
  }
  // This "unsubscribe" function removes objects to our
  // observer
  unsubscribe(functionToRemove) {
    this.observers = this.observers((currentFunction) => {
      if (currentFunction != functionToRemove) {
        return currentFunction;
      }
    });
  }
  // This "fire" function calls for all of our subscribed
  // objects to act
  fire() {
    this.observers.forEach((currentFunction) => {
      currentFunction.call();
    });
  }
}

function ExampleFunction22() {
  console.log("Example function 2");
}

const subject1 = new Subject1();

subject1.subscribe(ExampleFunction22);

subject1.fire();
