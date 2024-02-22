export const newSetConst: string = `
const fruits = [
    "banana",
    "apple",
    "orange",
    "watermelon",
    "apple",
    "orange",
    "grape",
    "apple",
];
function unique(fruits) {
    return Array.from(new Set(fruits));
}
console.log(unique(fruits));

`;
