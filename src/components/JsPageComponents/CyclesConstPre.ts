export const forPlusCode: string = `
for (let i = 0; i < 5; i++) {
    console.log(i);
}

`;

export const forMinusCode: string = `
for (let i = 5; i > 0; i -= 1) {
    console.log(i);
}

`;

export const forEvenCode: string = `
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

`;

export const forOddCode: string = `
for (let i = 1; i < 10; i += 2) {
    console.log(i);
}

`;

export const forDoubleCode: string = `
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i * j);
    }
}

`;

export const forWhileCode: string = `
let i = 1;
while (i <= 4) {
    console.log(i);
    i++;
}

`;

export const forDoWhileCode: string = `
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 4);

`;

export const forContinueCode: string = `
for (let i = 1; i <= 5; i++) {
    if (i === 6) continue;
    console.log(i);
}

`;

export const forBreakCode: string = `
for (let i = 1; i <= 10; i++) {
    if (i === 6) break;
    console.log(i);
}

`;

export const forInCode: string = `
const people = { name: "Vasya", age: 22, budget: 4500 };

for (let person in people) {
    console.log(person);
}

`;

export const forOffCode: string = `
const people = [
    { name: "Vasya", age: 22, budget: 4500 },
    { name: "Petya", age: 21, budget: 4200 },
];
for (let person of people) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.budget);
}

`;
