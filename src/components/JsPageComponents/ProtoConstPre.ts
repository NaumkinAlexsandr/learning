export const objectProtoConst: string = `
const people = {
    eats: "vegetarian",
};
const masha = {
    sport: "tennis",
    __proto__: people,
};
console.log(masha.sport);
console.log(masha.eats);
`;

export const objectCreateConst: string = `
const people = {
    eats: "vegetarian",
};
const masha = Object.create(people);
console.log(Object.getPrototypeOf(masha) === people);
console.log(masha);
console.log(masha.eats);
`;

export const objectSetConst: string = `
const people = {
    eats: "vegetarian",
};
const masha = Object.create(people);
Object.setPrototypeOf(masha, { sport: "tennis", __proto__: people });
console.log(masha.sport);
console.log(masha.eats);
`;

export const objectGetConst: string = `
const people = {
    eats: "vegetarian",
};
const masha = Object.create(people);
Object.setPrototypeOf(masha, { sport: "tennis", __proto__: people });
console.log(Object.getPrototypeOf(masha));
console.log(masha.sport);
console.log(masha.eats);
`;
