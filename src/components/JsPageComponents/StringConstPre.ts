export const strMatchCode: string = `
let text = "We will, we will rock you.";
const regex = /[A-Z]/g;
const regex2 = /[i]/g;
console.log(text.match(regex));
console.log(text.match(regex2));
`;

export const strMatchAllCode: string = `
let text = "We will, we will rock you.";
const regex = /wi/g; 
const array = [...text.matchAll(regex)]; 
console.log(array);
`;

export const strRaw: string = `
let text = String.raw \`we will rock you.\`;
console.log(\`We will, \${text}\`)
Выводит: We will, we will rock you.
`;
