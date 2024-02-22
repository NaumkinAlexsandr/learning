export const objectCreateValueCode: string = `
const people = Object.create(
    {},
    {
        name: {
            value: "Vasya",
        },
        age: {
            value: 30,
        },
    }
);
console.log(people);
`;

export const objectCreateEnumerableCode: string = `
const people = Object.create(
    {},
    {
        name: {
            value: "Vasya",
            enumerable: true,
        },
        age: {
            value: 30,
            enumerable: true,
        },
    }
);

for (let key in people) {
    console.log("Key", key);
}
`;

export const objectCreateWritableCode: string = `
const people = Object.create(
    {},
    {
        name: {
            value: "Vasya",
            enumerable: true,
            writable: true,
        },
        age: {
            value: 30,
            enumerable: true,
            writable: false,
        },
    }
);
people.name = "Masha";
people.age = "25";
console.log(people);
`;

export const objectCreateConfigurableCode: string = `
const people = Object.create(
    {},
    {
        name: {
            value: "Vasya",
            enumerable: true,
            writable: true,
            configurable: false,
        },
        age: {
            value: 30,
            enumerable: true,
            writable: true,
            configurable: true,
        },
    }
);
delete people.name;
delete people.age;
console.log(people);
`;

export const objectCreateGetCode: string = `
const people = Object.create(
    {},
    {
        name: {
            value: "Vasya",
            enumerable: true,
            writable: true,
        },
        age: {
            value: 30,
            enumerable: true,
            writable: true,
        },
        born: {
            get() {
                return new Date().getFullYear() - this.age;
            },
        },
    }
);
console.log(people.born);
`;

export const objectCreateSetCode: string = `
const people = Object.create(
    {},
    {
        name: {
            value: "Vasya",
            enumerable: true,
        },
        age: {
            value: 30,
            enumerable: true,
        },
        born: {
            get() {
                return new Date().getFullYear() - this.age;
            },
            set(value) {
                console.log("Born", value);
            },
        },
    }
);
people.born = 1990;
console.log(people.born);
`;

export const objectCreateValueCode2: string = `
for (let key in people) {
    console.log('Key', key);
} 
`;
