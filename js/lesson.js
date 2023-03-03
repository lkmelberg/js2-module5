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
