export const newMapSetConst: string = `
const map = new Map();
map.set("firstName", "Alex");
map.set("age", "26");
console.log(map);
`;

export const newMapGetConst: string = `
const map = new Map();
map.set("firstName", "Alex");
map.set("age", "26");
console.log(map.get("firstName"));
console.log(map.get("age"));
`;

export const newMapHasConst: string = `
const map = new Map();
map.set("firstName", "Alex");
map.set("age", "26");
console.log(map.has("firstName"));
console.log(map.has("age"));
console.log(map.has("lastname"));
`;

export const newMapDeleteConst: string = `
const map = new Map();
map.set("firstName", "Alex");
map.set("age", "26");
map.delete("firstName");
console.log(map.has("firstName"));
console.log(map);
`;

export const newMapClearConst: string = `
const map = new Map();
map.set("firstName", "Alex");
map.set("age", "26");
map.clear();
console.log(map);
`;

export const newMapSizeConst: string = `
const map = new Map();
map.set("firstName", "Alex");
map.set("age", "26");
console.log(map.size);
`;

export const newMapKeyConst: string = `
const map = new Map([
    ["firstName", "Alex"],
    ["lastName", "Ivanov"],
    ["age", "26"],
]);
console.log(map.keys());
`;

export const newMapValuesConst: string = `
const map = new Map([
    ["firstName", "Alex"],
    ["lastName", "Ivanov"],
    ["age", "26"],
]);
console.log(map.values());
`;

export const newMapEntriesConst: string = `
const map = new Map([
    ["firstName", "Alex"],
    ["lastName", "Ivanov"],
    ["age", "26"],
]);
console.log(map.entries());
`;

export const newMapForEachConst: string = `
const map = new Map([
    ["firstName", "Alex"],
    ["lastName", "Ivanov"],
    ["age", "26"],
]);
map.forEach((value, key) => {
    console.log(\`\${key}: \${value}\`);
});
`;

export const newMapForOfConst: string = `
const map = new Map([
    ["firstName", "Alex"],
    ["lastName", "Ivanov"],
    ["age", "26"],
]);
for (const [value, key] of map) {
    console.log(\`\${key}: \${value}\`);
}
`;
