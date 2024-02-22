// proxyGet
export function proxyGet() {
  const person = {
    name: "Vasya",
    age: 22,
    work: "programmer",
  };

  const personProxy = new Proxy(person, {
    get(target, property) {
      return target[property];
    },
  });
  console.log(personProxy);
  const jsproxyGet = document.getElementById("jsproxyGet");
  jsproxyGet.textContent = `Proxy {name: 'Vasya', age: 22, work: 'programmer'}`;
}

// proxySet
export function proxySet() {
  const person = {
    name: "Vasya",
    age: 22,
    work: "programmer",
  };
  const personProxy = new Proxy(person, {
    set(target, property, value) {
      target[property] = value;
      return true;
    },
  });
  personProxy.age = 30;
  personProxy.work = "freelancer";
  console.log(personProxy);
  const jsproxySet = document.getElementById("jsproxySet");
  jsproxySet.textContent = `Proxy {name: 'Vasya', age: 30, work: 'freelancer'}`;
}

// proxyHas
export function proxyHas() {
  const person = {
    name: "Vasya",
    age: 22,
    work: "programmer",
  };
  const personProxy = new Proxy(person, {
    set(target, property) {
      return ["name", "age", "work"].includes(property);
    },
  });
  console.log("name" in personProxy);
  console.log("job" in personProxy);
  const jsproxyHas = document.getElementById("jsproxyHas");
  jsproxyHas.innerHTML = `true <br /> false`;
}

// proxydeleteProperty
export function proxydelete() {
  const person = {
    name: "Vasya",
    age: 22,
    work: "programmer",
  };
  const personProxy = new Proxy(person, {
    deleteProperty(target, property) {
      delete target[property];
      return true;
    },
  });
  delete personProxy.work;
  console.log(personProxy);
  const jsproxydelete = document.getElementById("jsproxydelete");
  jsproxydelete.innerHTML = `Proxy {name: 'Vasya', age: 22'}`;
}

// proxyapply
export function proxyApply() {
  const info = (text) => `Name: ${text}`;
  const infoProxy = new Proxy(info, {
    apply(target, thisArg, argArray) {
      return target.apply(thisArg, argArray);
    },
  });
  console.log(infoProxy("Vasya"));
  const jsproxyapply = document.getElementById("jsproxyapply");
  jsproxyapply.innerHTML = `Name: Vasya`;
}

// proxyConstruct
export function proxyConstruct() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const PersonProxy = new Proxy(Person, {
    construct(target, argArray, newTarget) {
      return new target(...argArray);
    },
  });
  const person = new PersonProxy("Vasya", 33);
  console.log(person);
  const jsproxyConstruct = document.getElementById("jsproxyConstruct");
  jsproxyConstruct.innerHTML = `Person {name: 'Vasya', age: 33}`;
}

// proxyDefineProperty
export function proxyDefineProperty() {
  const person = {
    name: "Vasya",
    age: 22,
  };
  const personProxy = new Proxy(person, {
    defineProperty(target, property, descriptor) {
      return Reflect.defineProperty(target, property, descriptor);
    },
  });
  Object.defineProperty(personProxy, "work", {
    value: "programmer",
    type: "work",
  });
  console.log(personProxy);
  const jsproxyDefineProperty = document.getElementById(
    "jsproxyDefineProperty"
  );
  jsproxyDefineProperty.innerHTML = `Proxy {name: 'Vasya', age: 22, work: 'programmer'}`;
}

// proxyGetOwn
export function proxyGetOwn() {
  const person = {
    name: "Vasya",
    age: 22,
    work: "programmer",
  };
  const personProxy = new Proxy(person, {
    getOwnPropertyDescriptor(target, prop) {
      return {
        enumerable: true,
        configurable: true,
      };
    },
  });
  console.log(Object.keys(personProxy));
  const jsproxyGetOwn = document.getElementById("jsproxyGetOwn");
  jsproxyGetOwn.innerHTML = `['name', 'age', 'work']`;
}

// proxyPrototypeOf
export function proxyPrototypeOf() {
  const person = {
    name: "Vasya",
    age: 22,
    work: "programmer",
  };
  const personProxy = new Proxy(person, {
    getPrototypeOf(target) {
      return personProxy;
    },
  });
  console.log(Object.getPrototypeOf(personProxy));
  const jsproxyPrototypeOf = document.getElementById("jsproxyPrototypeOf");
  jsproxyPrototypeOf.innerHTML = `Proxy {name: 'Vasya', age: 22, work: 'programmer'}`;
}

// proxyIsExtensible
export function proxyIsExtensible() {
  const person = {
    name: "Vasya",
    age: 22,
    work: "programmer",
  };
  const personProxy = new Proxy(person, {
    isExtensible(target) {
      return Object.isExtensible(target);
    },
  });
  console.log(Object.isExtensible(personProxy));
  const jsproxyIsExtensible = document.getElementById("jsproxyIsExtensible");
  jsproxyIsExtensible.innerHTML = `true`;
}

// proxyOwnKeys
export function proxyOwnKeys() {
  const person = {
    name: "Vasya",
    age: 22,
    work: "programmer",
  };
  const personProxy = new Proxy(person, {
    ownKeys(target) {
      return Object.keys(target);
    },
  });
  for (const key of Object.keys(personProxy)) {
    console.log(key);
  }

  const jsproxyOwnKeys = document.getElementById("jsproxyOwnKeys");
  jsproxyOwnKeys.innerHTML = `name <br /> age <br /> work`;
}

// proxyPreventExtensions
export function proxyPreventExtensions() {
  const person = {
    name: "Vasya",
    age: 22,
  };
  const personProxy = new Proxy(person, {
    preventExtensions(target) {
      target.name = "Alex";
      target.age = 23;
      Object.preventExtensions(target);
      return true;
    },
  });
  Object.preventExtensions(personProxy);
  personProxy.work = "programmer";
  console.log(person);
  const jsproxyPreventExtensions = document.getElementById(
    "jsproxyPreventExtensions"
  );
  jsproxyPreventExtensions.innerHTML = `TypeError: Cannot define property work, object is not extensible`;
}

// proxySetPrototypeOf
export function proxySetPrototypeOf() {
  const person = {
    name: "John",
    age: 30,
  };

  const employee = {
    work: "programmer",
  };

  Object.setPrototypeOf(employee, person);

  console.log(employee.name);
  console.log(employee.age);
  console.log(employee.work);
  const jsproxySetPrototypeOf = document.getElementById(
    "jsproxySetPrototypeOf"
  );
  jsproxySetPrototypeOf.innerHTML = `John <br /> 30 <br /> programmer`;
}
