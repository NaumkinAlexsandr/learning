export const randomCode: string = `
let random = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
const result = random(1, 10);
console.log(result);
`;

export const randomCode2: string = `
const secondArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
const random = Math.floor(Math.random() * secondArray.length);
const randomNumb = secondArray[random];
console.log(randomNumb);
`;
