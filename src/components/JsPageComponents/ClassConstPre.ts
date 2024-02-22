export const classOneConst: string = `
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
`;

export const classGetSetConst: string = `
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
`;

export const classExtendsConst: string = `
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(\`\${this.name} runs at \${this.speed} km/h.\`);
    }
    type(eats) {
        this.eats = eats;
        console.log(\`Type \${this.eats}.\`);
    }
}
class Lion extends Animal {
    family() {
        this.name = "felines";
        console.log(\`Family \${this.name}.\`);
    }
}
let lion = new Lion("Lion");
lion.run(80);
lion.type("carnivorous");
lion.family();
`;

export const classSuperConst: string = `
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(\`\${this.name} runs at \${this.speed} km/h.\`);
    }
    type(eats) {
        this.eats = eats;
        console.log(\`Type \${this.eats}.\`);
    }
    size() {
        console.log(\`Size \${this.name}.\`);
    }
}
class Lion extends Animal {
    family() {
        this.family = "felines";
        console.log(\`Family \${this.family}.\`);
    }
    size() {
        super.size();
        this.size = "1.2 meters";
        console.log(
        \`\${this.name} considered the largest, its size can reach \${this.size}.\`
        );
    }
}
let lion = new Lion("Lion");
lion.size();
`;

export const classStaticConst: string = `
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
`;

export const classStatic2Const: string = `
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
`;

export const classConst: string = `
class MyClass {
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    ...
}
`;
