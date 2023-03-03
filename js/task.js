// Create a factory function called createAnimal.
// It should have the following properties:
// 2.1 name string, which is the name of the animal e.g. Jasper, Marley, Pookie etc. 2.2 type string, which is the animal type .e.g. dog, cat etc. 2.3 food string, which is the food the animal eats e.g. dog food, kibble, fish food etc.
// It should have the method eat. This method should use the name, type and food property to console.log what the name of the animal is eating e.g.

function createAnimal(name, type, food) {
  return {
    name: name,
    type: type,
    food: food,
    eat: function () {
      console.log(`${this.name} is a ${this.type} and eats ${this.food}.`);
    },
  };
}

// If we pass in 'Jasper' and 'dog food', we should console.log the following:
// Jasper is a dog and eats dog food.

// If we pass in 'Pookie' and 'cat food', we should console.log the following:
// Pookie is a cat and eats cat food.

// You should then be able to create an animal from this createAnimal factory function using the following line of code:

const myAnimal = createAnimal("Jasper", "dog", "dog food", "mammal");

const myAnimal2 = createAnimal("Cita", "dog", "french fries", "mammal");

myAnimal.eat();
myAnimal2.eat();
// Logs:
// Jasper is a dog and eats dog food

const uslessObject = {
  _type: "camera",
  _hasFilm: "yes",

  set type(newType) {
    this._type = newType;
  },

  get type() {
    return this._type;
  },

  set hasFilm(newFilm) {
    this._hasFilm = newFilm;
  },

  get hasFilm() {
    return this._hasFilm;
  },
};

const object = (uslessObject.type = "boat");
const filmOr = (uslessObject.hasFilm = "nope");

console.log(object);
console.log(filmOr);
