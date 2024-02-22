export const proxyGetConst: string = `
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
`;

export const proxySetConst: string = `
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
`;

export const proxyHasConst: string = `
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
`;

export const proxydeleteConst: string = `
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
`;

export const proxyApplyConst: string = `
const info = (text) => \`Name: \${text}\`;
const infoProxy = new Proxy(info, {
    apply(target, thisArg, argArray) {
        return target.apply(thisArg, argArray);
    },
});
console.log(infoProxy("Vasya"));
`;

export const proxyConstructConst: string = `
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
`;

export const proxyDefinePropertyConst: string = `
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
`;

export const proxyGetOwnConst: string = `
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
`;

export const proxyPrototypeOfConst: string = `
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
`;

export const proxyIsExtensibleConst: string = `
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
`;

export const proxyOwnKeysConst: string = `
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
`;

export const proxyPreventExtensionsConst: string = `
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
`;

export const proxySetPrototypeOfConst: string = `
const person = {
    name: "John",
    age: 30
};

const employee = {
    work: "programmer"
};  
Object.setPrototypeOf(employee, person);

console.log(employee.name); 
console.log(employee.age); 
console.log(employee.work); 
`;
