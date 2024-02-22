// assign
export function objAssign() {
  let name = {
    name: "Alex",
  };
  let age = {
    age: 25,
  };
  let person = Object.assign(age, name);
  console.log(person);
  const jsobjAssign = document.getElementById("jsobjAssign");
  jsobjAssign.textContent = '{age: 25, name: "Alex"}';
}

// defineProperties
export function defineProperties() {
  const obj = {
    name: "John",
    age: 30,
  };

  Object.defineProperties(obj, {
    city: {
      value: "New York",
      writable: true,
      configurable: true,
      enumerable: true,
    },
  });

  console.log(obj);
  const defineProperties = document.getElementById("defineProperties");
  defineProperties.textContent = '{age: 30, name: "John", city:"New York"}';
}

// defineProperty
export function defineProperty() {
  const obj = {};

  Object.defineProperty(obj, "myProperty", {
    value: "Hello World",
    writable: true,
    enumerable: true,
    configurable: true,
  });

  console.log(obj.myProperty);
  const defineProperty = document.getElementById("defineProperty");
  defineProperty.textContent = '"Hello World"';
}

// entries
export function objEntries() {
  let person = {
    name: "Alex",
    age: 25,
  };
  let personTwo = Object.entries(person);
  console.log(personTwo);
  const jsoobjFromEntries = document.getElementById("jsoobjFromEntries");
  jsoobjFromEntries.innerHTML = `(2) [Array(2), Array(2)] <br /> 0: (2) ['name', 'Alex'] <br /> 1:  (2) ['age', 25]`;
}

// fromEntries
export function objFromEntries() {
  let person = [
    ["name", "Alex"],
    ["age", 25],
  ];
  let personTwo = Object.fromEntries(person);
  console.log(personTwo);
  const jsoobjFromEntriesTwo = document.getElementById("jsoobjFromEntriesTwo");
  jsoobjFromEntriesTwo.innerHTML = `{name: 'Alex', age: 25}`;
}

// getOwnPropertyDescriptors
export function objGOPDs() {
  const person = {
    firstName: "Alex",
    lastName: "Ivanov",
    age: 25,
  };
  console.log(Object.getOwnPropertyDescriptors(person));
  const jsobjGOPDs = document.getElementById("jsobjGOPDs");
  jsobjGOPDs.innerHTML = `{firstName: {…}, lastName: {…}, age: {…}}`;
}

// getOwnPropertyNames
export function objGOPN() {
  const person = {
    firstName: "Alex",
    lastName: "Ivanov",
    age: 25,
  };
  console.log(Object.getOwnPropertyNames(person));
  const jsobjGOPN = document.getElementById("jsobjGOPN");
  jsobjGOPN.innerHTML = `['firstName', 'lastName', 'age']`;
}

// getOwnPropertySymbols
export function objGOPS() {
  const obj = {};
  const a = Symbol("a");
  obj[a] = "localSymbol";
  const objectSymbols = Object.getOwnPropertySymbols(obj);
  console.log(objectSymbols);
  const jsobjGOPS = document.getElementById("jsobjGOPS");
  jsobjGOPS.innerHTML = `[Symbol(a)]`;
}

// hasOwn
export function objhasOwn() {
  const person = {
    firstName: "Alex",
    lastName: "Ivanov",
    age: 25,
  };
  console.log(Object.hasOwn(person, "firstName"));
  console.log(Object.hasOwn(person, "work"));
  const jsobhasOwn = document.getElementById("jsobhasOwn");
  jsobhasOwn.innerHTML = `true <br/> false`;
}

// hasOwnProperty
export function objhasOwnProperty() {
  const person = {
    firstName: "Alex",
    lastName: "Ivanov",
    age: 25,
  };
  console.log(person.hasOwnProperty("firstName"));
  console.log(person.hasOwnProperty("work"));
  const jsobjhasOwnProperty = document.getElementById("jsobjhasOwnProperty");
  jsobjhasOwnProperty.innerHTML = `true <br/> false`;
}

// is
export function objIs() {
  let numbOne = 5;
  let numbTwo = "5";
  let numbThree = 5;
  console.log(Object.is(numbOne, numbTwo));
  console.log(Object.is(numbOne, numbThree));
  const jsobjIs = document.getElementById("jsobjIs");
  jsobjIs.innerHTML = "false <br /> true";
}

// isExtensible
export function objIsExtensible() {
  const obj = {};
  console.log(Object.isExtensible(obj));
  Object.preventExtensions(obj);
  console.log(Object.isExtensible(obj));
  const jsobjIsExtensible = document.getElementById("jsobjIsExtensible");
  jsobjIsExtensible.innerHTML = "true <br /> false";
}

// isPrototypeOf
export function objIsPrototypeOf() {
  const myArray = [1, 2, 3];
  const myObject = { name: "John", age: 30 };
  console.log(Array.prototype.isPrototypeOf(myArray));
  console.log(Array.prototype.isPrototypeOf(myObject));
  const jsobjIsPrototypeOf = document.getElementById("jsobjIsPrototypeOf");
  jsobjIsPrototypeOf.innerHTML = "true <br /> false";
}

// keys
export function objKeys() {
  const myObj = {
    name: "John",
    age: 30,
    city: "New York",
  };

  const keys = Object.keys(myObj);
  console.log(keys);
  const jsobjKeys = document.getElementById("jsobjKeys");
  jsobjKeys.innerHTML = "['name', 'age', 'city']";
}

// values
export function objValues() {
  const person = {
    firstName: "Alex",
    lastName: "Ivanov",
    age: 25,
  };
  const profile = Object.values(person);
  console.log(profile);
  const jsobjValues = document.getElementById("jsobjValues");
  jsobjValues.innerHTML = `['Alex', 'Ivanov', 25]`;
}

// valueOf
export function objValuesOf() {
  const obj = {
    value: 42,
    valueOf: function () {
      return this.value * 2;
    },
  };

  console.log(obj);
  console.log(obj.valueOf());
  const jsobjValuesOf = document.getElementById("jsobjValuesOf");
  jsobjValuesOf.innerHTML = `{value: 42, valueOf: ƒ} <br/> 84`;
}

// preventExtensions
export function objPreventExtensions() {
  const obj = {
    name: "John",
    age: 30,
  };

  Object.preventExtensions(obj);
  // obj.city = "New York"; // This will throw an error
  console.log(obj);
  const jsobjPreventExtensions = document.getElementById(
    "jsobjPreventExtensions"
  );
  jsobjPreventExtensions.innerHTML = `{ name: 'John', age: 30 }`;
}

// propertyIsEnumerable
export function objPropertyIsEnumerable() {
  const obj = {
    name: "John",
    age: 30,
  };

  console.log(obj.propertyIsEnumerable("name")); // true
  console.log(obj.propertyIsEnumerable("age")); // true
  console.log(obj.propertyIsEnumerable("city")); // false
  const jsobjPropertyIsEnumerable = document.getElementById(
    "jsobjPropertyIsEnumerable"
  );
  jsobjPropertyIsEnumerable.innerHTML = `true <br/>true<br/>false `;
}

// toLocaleString
export function objTLS() {
  const number = 123456.789;
  console.log(number.toLocaleString("de"));
  console.log(number.toLocaleString("fr"));
  const jsobjTLS = document.getElementById("jsobjTLS");
  jsobjTLS.innerHTML = `123.456,789 <br/> 123 456,789`;
}

// freeze
export function objFreeze() {
  const obj = {
    name: "John",
    age: 30,
  };
  Object.freeze(obj);
  // obj.name = "Alex";  // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
  // obj.city = "New York"; // TypeError: Cannot add property city, object is not extensible
  console.log(obj.name);
  console.log(obj.city);
  const jsobjFreeze = document.getElementById("jsobjFreeze");
  jsobjFreeze.innerHTML = `John <br/> undefined`;
}

// isFrozen
export function objIsFrozen() {
  const obj = {
    name: "John",
    age: 30,
  };

  console.log(Object.isFrozen(obj));
  Object.freeze(obj);
  console.log(Object.isFrozen(obj));
  const jsobIsFrozen = document.getElementById("jsobIsFrozen");
  jsobIsFrozen.innerHTML = `false <br/> true`;
}

// isSealed
export function objIsSealed() {
  const obj = {
    name: "John",
    age: 30,
  };

  console.log(Object.isSealed(obj));
  Object.seal(obj);
  console.log(Object.isSealed(obj));
  const jsobIsSealed = document.getElementById("jsobIsSealed");
  jsobIsSealed.innerHTML = `false <br/> true`;
}
