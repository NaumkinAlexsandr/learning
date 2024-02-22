export const objAssignCode: string = `
let name = {
    name: "Alex",
};
let age = {
    age: 25,
};
let person = Object.assign(age, name);
`;

export const definePropertiesCode: string = `
const obj = {
    name: 'John',
    age: 30
};

Object.defineProperties(obj, {   
    city: {
        value: 'New York',
        writable: true,
        configurable: true,
        enumerable: true
    }
});

console.log(obj);
`;

export const definePropertyCode: string = `
const obj = {};

Object.defineProperty(obj, 'myProperty', {
  value: 'Hello World',
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(obj.myProperty);
`;

export const objEntriesCode: string = `
let person = {
    name: "Alex",
    age: 25,
};
let personTwo = Object.entries(person);
console.log(personTwo);
`;

export const objFromEntriesCode: string = `
let person = {
    name: "Alex",
    age: 25,
};
let personTwo = Object.entries(person);
console.log(personTwo);
`;

export const objGOPDsCode: string = `
const person = {
    firstName: "Alex",
    lastName: "Ivanov",
    age: 25,
};
console.log(Object.getOwnPropertyDescriptors(person));
const jsobjGOPDs = document.getElementById("jsobjGOPDs");
jsobjGOPDs.innerHTML = \`{firstName: {…}, lastName: {…}, age: {…}}\`;
`;

export const objGOPNCode: string = `
const person = {
    firstName: "Alex",
    lastName: "Ivanov",
    age: 25,
};
console.log(Object.getOwnPropertyNames(person));
const jsobjGOPN = document.getElementById("jsobjGOPN");
jsobjGOPN.innerHTML = \`['firstName', 'lastName', 'age']\`;
`;

export const objGOPSCode: string = `
const obj = {};
const a = Symbol("a");
obj[a] = "localSymbol";
const objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);
`;

export const objhasOwnCode: string = `
const person = {
    firstName: "Alex",
    lastName: "Ivanov",
    age: 25,
};
console.log(Object.hasOwn(person, "firstName"));
console.log(Object.hasOwn(person, "work"));
`;

export const objhasOwnPropertyCode: string = `
const person = {
    firstName: "Alex",
    lastName: "Ivanov",
    age: 25,
};
console.log(person.hasOwnProperty("firstName"));
console.log(person.hasOwnProperty("work"));
`;

export const objIsCode: string = `
let numbOne = 5;
let numbTwo = "5";
let numbThree = 5;
console.log(Object.is(numbOne, numbTwo));
console.log(Object.is(numbOne, numbThree));
`;

export const objIsExtensibleCode: string = `
const obj = {};
console.log(Object.isExtensible(obj));
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));
`;

export const objIsPrototypeOfCode: string = `
const myArray = [1, 2, 3];
const myObject = { name: 'John', age: 30 };
console.log(Array.prototype.isPrototypeOf(myArray)); 
console.log(Array.prototype.isPrototypeOf(myObject)); 
`;

export const objKeysCode: string = `
const myObj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const keys = Object.keys(myObj);
console.log(keys); 
`;

export const objValuesCode: string = `
const person = {
    firstName: "Alex",
    lastName: "Ivanov",
    age: 25,
};
const profile = Object.values(person);
console.log(profile);
`;

export const objValuesOfCode: string = `
const person = {
    firstName: "Alex",
    lastName: "Ivanov",
    age: 25,
};
const profile = Object.values(person);
console.log(profile);
`;

export const objPreventExtensionsCode: string = `
const obj = {
    name: "John",
    age: 30,
};

Object.preventExtensions(obj);
// obj.city = "New York"; // This will throw an error
console.log(obj);
`;

export const objPropertyIsEnumerableCode: string = `
const obj = {
    name: "John",
    age: 30,
  };

  console.log(Object.propertyIsEnumerable(obj, "name")); // true
  console.log(Object.propertyIsEnumerable(obj, "age")); // true
  console.log(Object.propertyIsEnumerable(obj, "city")); // false
`;

export const objTLSCode: string = `
const number = 123456.789;
console.log(number.toLocaleString("de"));
console.log(number.toLocaleString("fr"));
`;

export const objFreezeCode: string = `
const obj = {
    name: "John",
    age: 30,
};
Object.freeze(obj);
  // obj.name = "Alex";  
  // TypeError: Cannot assign to read only property 'name' of object 
  // obj.city = "New York"; 
  // TypeError: Cannot add property city, object is not extensible
console.log(obj.name);
console.log(obj.city);
`;

export const objIsFrozenCode: string = `
const obj = {
    name: "John",
    age: 30,
};

console.log(Object.isFrozen(obj));
Object.freeze(obj);
console.log(Object.isFrozen(obj));
`;

export const objIsSealedCode: string = `
const obj = {
    name: "John",
    age: 30,
};

console.log(Object.isSealed(obj));
Object.seal(obj);
console.log(Object.isSealed(obj));
`;
