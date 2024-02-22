// Class
export function classOne() {
  class User {
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      console.log("Hello " + this.name);
    }
  }
  let user = new User("Alex");
  user.sayHi();
  const jsClassOne = document.getElementById("jsClassOne");
  jsClassOne.textContent = `Hello Alex!`;
}

// Get & Set
export function classGetSet() {
  class User {
    constructor(name) {
      this.name = name;
    }
    get name() {
      return this._name;
    }
    set name(value) {
      if (value.length < 4) {
        alert("The name is too short.");
        return;
      }
      this._name = value;
    }
  }
  let user = new User(prompt("Enter your name"));
  console.log(user.name);
  const jsClassGetSet = document.getElementById("jsClassGetSet");
  jsClassGetSet.textContent = user.name;
}

// extends
export function classExtends() {
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs at ${this.speed} km/h.`);
    }
    type(eats) {
      this.eats = eats;
      console.log(`Type ${this.eats}.`);
    }
  }
  class Lion extends Animal {
    family() {
      this.name = "felines";
      console.log(`Family ${this.name}.`);
    }
  }
  let lion = new Lion("Lion");
  lion.run(80);
  lion.type("carnivorous");
  lion.family();
  const jsClassExtends = document.getElementById("jsClassExtends");
  jsClassExtends.innerHTML = `The lion runs at a speed of 80 km/h. <br /> Type carnivorous. <br />Feline family.`;
}

// super
export function classSuper() {
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs at ${this.speed} km/h.`);
    }
    type(eats) {
      this.eats = eats;
      console.log(`Type ${this.eats}.`);
    }
    size() {
      console.log(`Size ${this.name}.`);
    }
  }
  class Lion extends Animal {
    family() {
      this.family = "felines";
      console.log(`Family ${this.family}.`);
    }
    size() {
      super.size();
      this.size = "1.2 meters";
      console.log(
        `${this.name} considered the largest, its size can reach ${this.size}.`
      );
    }
  }
  let lion = new Lion("Lion");
  lion.size();
  const jsClassSuper = document.getElementById("jsClassSuper");
  jsClassSuper.innerHTML = `Leo size. <br /> The lion is considered the largest, its size can reach 1.2 meters.`;
}

export function classStatic() {
  class Person {
    constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
    static gender(sex) {
      let name = sex == "male" ? "John Doe" : "Jane Doe";
      return new Person(name);
    }
  }
  let anonymous = Person.gender("male");
  let person = new Person("James Doe");
  console.log(anonymous);
  console.log(person);
  const jsclassStatic = document.getElementById("jsclassStatic");
  jsclassStatic.innerHTML = `Person {name: 'John Doe'} <br /> Person {name: 'James Doe'}`;
}

export function classStatic2() {
  class Item {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
      this.constructor.count++;
    }
    static count = 0;
    static getCount() {
      return Item.count;
    }
  }

  let pen = new Item("Pen", 5);
  let notebook = new Item("notebook", 8);
  let book = new Item("book", 12);
  console.log(Item.getCount());
  const jsclassStatic2 = document.getElementById("jsclassStatic2");
  jsclassStatic2.innerHTML = `3`;
}
