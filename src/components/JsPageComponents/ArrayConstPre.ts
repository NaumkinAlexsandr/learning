export const peopleCode: string = `
const people = [
    { name: "Vasya", age: 22, budget: 4500 },
    { name: "Petya", age: 21, budget: 4200 },
    { name: "Katya", age: 18, budget: 4900 },
    { name: "Gosha", age: 21, budget: 4750 },
    { name: "Masha", age: 19, budget: 4200 },
    { name: "Pasha", age: 25, budget: 4950 },
];
`;

export const filterCode: string = `
№1
const age = [];
for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 20) {
        age.push(people[i]);
    }
}
console.log(age);

№2
const age1 = people.filter((person) => {
    if (person.age >= 20) {
        return true;
    }
});
console.log(age1);

№3
const age2 = people.filter((person) => person.age >= 20);
console.log(age2);
`;

export const forEachCode: string = `
people.forEach((person, index) => {
    console.log(person);
    console.log(index);
});
`;

export const findCode: string = `
const vasya = people.find((person) => person.name === "Vasya");
console.log(vasya);
`;

export const findIndexCode: string = `
const gosha = people.findIndex((person) => person.name === "Gosha");
console.log(gosha);
`;

export const mapCode: string = `
const newPeople = people.map((person) => {
    return \`$\{person.name} $\{person.age}\`;
});
console.log(newPeople);
`;

export const mapTwoCode: string = `
const array = [1, 2, 3, 4, 5];
Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n;
    });
};
console.log(array.multBy(2));
`;

export const mapThreeCode: string = `
Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n;
    });
};
const array2 = [11, 12, 13, 14, 15];
console.log(array2.multBy(10));
`;

export const reduceCode: string = `
№1
let summ = 0;
for (let i = 0; i < people.length; i++) {
    summ += people[i].budget;
}
console.log(summ);

№2
const summ2 = people.reduce((total, person) => {
    return total + person.budget;
}, 0);
console.log(summ2);

Вариант №3
const summ3 = people.reduce((total, person) => total + person.budget, 0);
console.log(summ3);
`;

export const reduceRightCode: string = `
№1
let summ = 0;
for (let i = 0; i < people.length; i++) {
    summ += people[i].budget;
}
console.log(summ);

№2
const summ2 = people.reduceRight((total, person) => {
    return total + person.budget;
}, 0);
console.log(summ2);

№3
const summ3 = people.reduceRight((total, person) => total + person.budget, 0);
console.log(summ3);


`;

export const splitCode: string = `
const str = "Hello San Antonio Fire Department Recruiting";
const newStr = str.replace(/[ea]/gi, "");
const split = newStr.split(" ");
for (let text of split) {
    console.log(text);
}
`;

export const pushCode: string = `
const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
const methodPush = [];
for (x = 0; x < firstArray.length; x++) {
    if (firstArray[x] > 10) {
        methodPush.push(firstArray[x]);
    }
}
console.log(methodPush);
`;

export const arrPopCode: string = `
const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
firstArray.pop();
console.log(firstArray);
`;

export const unshiftCode: string = `
const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
const methodUnshift = [];
for (x = 0; x < firstArray.length; x++) {
    if (firstArray[x] > 10) {
        methodUnshift.unshift(firstArray[x]);
    }
}
console.log(methodUnshift);
`;

export const shiftCode: string = `
const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
firstArray.shift();
console.log(firstArray);
`;

export const arrincludesCode: string = `
const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
console.log(firstArray.includes(55));
console.log(firstArray.includes(77));
`;

export const includesCode: string = `
const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
function number(firstArray) {
    let resultNumber = [];
    for (let numb of firstArray) {
        if (numb > 10)
            if (!resultNumber.includes(numb)) {
                resultNumber.push(numb);
            }
    }
    return resultNumber;
}
console.log(number(firstArray));
`;

export const arrEveryCode: string = `
let numbers = [1, 3, 5, 7, 9];
let result = numbers.every(function (e) {
    return e < 10;
});
console.log(result);
`;

export const arrSomeCode: string = `
let numbers = [1, 3, 5, 7, 9];
let result = numbers.some(function (e) {
    return e < 5;
});
console.log(result);
`;

export const arrSortCode: string = `
const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
firstArray.sort((a, b) => a - b);
console.log(firstArray);
`;

export const arrConcatCode: string = `
const firstArray = [1, 50, 2, 5, 7];
const secondArray = [10, 33, 22, 77];
const result = [].concat(firstArray, secondArray);
console.log(result);
`;

export const arrLastIndexOfCode: string = `
const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
console.log(firstArray.lastIndexOf(22));
console.log(firstArray.lastIndexOf(10));
`;

export const arrIndexOfCode: string = `
const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
console.log(firstArray.indexOf(50));
console.log(firstArray.indexOf(7));
`;

export const arrOfCode: string = `
let numbers = Array.of(33);
let text = Array.of("A", "B", "C");
console.log(numbers.length);
console.log(text.length);
`;

export const arrFlatCode: string = `
const numbers = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
const resultOne = numbers.flat(1);
const resultTwo = numbers.flat(2);
const resultThree = numbers.flat(Infinity);
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
`;

export const arrFlatMapCode: string = `
let sentences = ["we", "will", "we will", "rock you"];
let words = sentences.flatMap((s) => s.split(" "));
console.log(words);
`;

export const arrAtCode: string = `
const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
console.log(firstArray.at(-1));
console.log(firstArray.at(-2));
`;

export const arrFromCode: string = `
function array() {
    return Array.from(arguments);
}
console.log(array(33, "A", "B", "C"));
`;

export const fromCode: string = `
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
function uniqueTwo(fruits) {
    return Array.from(new Set(fruits));
}

console.log(uniqueTwo(fruits));
`;

export const arrSpliceCode: string = `
const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
firstArray.splice(0, 5);
console.log(firstArray);
`;

export const arrSpliceTwoCode: string = `
const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
firstArray.splice(0, 5, 1, 2, 3);
console.log(firstArray);
`;

export const arrSliceCode: string = `
const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
const secondArray = firstArray.slice(0, 4);
console.log(secondArray);
`;

export const arrSliceTwoCode: string = `
const chunk = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};
console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 3));
console.log(chunk([1, 2, 3, 4, 5, 6], 3));
console.log(chunk([1, 2, 3, 4, 5, 6], 1));
`;

export const arrJoinCode: string = `
let sentences = ["we", "will", "we", "will", "rock you"];
const text = sentences.join(" ");
const textTwo = sentences.join("_");
console.log(text);
console.log(textTwo);
`;

export const arrcopyWithinCode: string = `
const firstArray = [1, 2, 3, 4, 5, 6];
console.log(firstArray.copyWithin(2));
console.log(firstArray.copyWithin(0, 2));
console.log(firstArray.copyWithin(0, 2, 3));
`;

export const arrEntriesCode: string = `
const array = ["a", "b", "c"];
const iterator = array.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
`;

export const arrFillCode: string = `
const firstArray = [1, 2, 3, 4, 5, 6];
console.log(firstArray.fill(2));
console.log(firstArray.fill(5, 1));
console.log(firstArray.fill(0, 2, 4));
`;

export const arrTLSCode: string = `
const firstArray = [new Date()];
const date = firstArray.toLocaleString();
console.log(date);
`;

export const arrToStringCode: string = `
const firstArray = [1, 2, 3, 4, 5, 6];
console.log(firstArray.toString());
`;

export const arrValuesCode: string = `
const firstArray = [1, 2, 3, 4];
const iterator = firstArray.values();
for (const value of iterator) {
    console.log(value);
}
`;
