export const funcDeclarationConst: string = `
function greet(name) {
    return 'Hello ' + name;
}
console.log(greet('Alex'));
// Hello Alex
`;

export const funcExpressionConst: string = `
const greet = function (name) {
    return 'Hello ' + name;
};
console.log(greet('Alex'));
// Hello Alex
`;

export const funcBackConst: string = `
const func = function (callback) {
    const name = "Alex";
    callback(name);
};
func(function (n) {
    console.log("Hello " + n);
});
`;

export const funcClosureConst: string = `
const func = function () {
    return function () {
        console.log("Hi");
    };
};
func()();
`;

export const funcCallbackConst: string = `
function some_function(arg1, arg2, callback) {
    let number = (arg1 - arg2 + arg2) * 2;
    callback(number);
}
some_function(5, 15, function (num) {
    console.log("callback result = " + num);
});
`;

export const getFactorialConst: string = `
let sum = 1;
function factorialRec(x) {
    if (x === 0) return;
    sum = sum * x;
    factorialRec(x - 1);
}
factorialRec(5);
console.log(sum);
`;

export const recNumberConst: string = `
let numb = "";
let x = 0;
function two() {
    x++;
    numb += x + " ";
    if (x >= 10) return;
    two();
}
two();
console.log(numb);
`;

export const recClearConst: string = `
const culcSum = (y, x) => x * (y / 100) + x; 
console.log(culcSum(20, 10));
`;

export const recNotClearConst: string = `
const y = 20;
function calculate(x) { 
    return x * (y / 100) + x;
}                    
console.log(calculate(10));
`;

export const functionBindConst: string = `
const person = {
    name: "Vlad",
    age: 22,
    logInfo: function () {
        console.log(\`Name is $\{this.name}\`);
        console.log("This age " + this.age);
    },
};
const masha = {
    name: "Masha",
    age: 23,
};
person.logInfo.bind(masha)();
`;

export const functionCallConst: string = `
const person = {
    name: "Vlad",
    age: 22,
    logInfo: function () {
        console.log(\`Name is $\{this.name}\`);
        console.log("This age " + this.age);
    },
};
const masha = {
    name: "Masha",
    age: 23,
};
person.logInfo.call(masha);
`;

export const functionApplyConst: string = `
const person = {
    name: "Vlad",
    age: 22,
    logInfo: function () {
        console.log(\`Name is $\{this.name}\`);
        console.log("This age " + this.age);
    },
};
const masha = {
    name: "Masha",
    age: 23,
};
person.logInfo.apply(masha);
`;

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

export const functionRegular: string = `const age = [];
for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 20) {
        age.push(people[i]);
    }
}
console.log(age);
`;

export const functionArrow: string = `const age = people.filter((person) => person.age >= 20);
console.log(age);

//
(4) [{…}, {…}, {…}, {…}]
0: {name: 'Vasya', age: 22, budget: 4500}
1: {name: 'Petya', age: 21, budget: 4200}
2: {name: 'Gosha', age: 21, budget: 4750}
3: {name: 'Pasha', age: 25, budget: 4950}
length: 4
`;

export const functionAdd: string = `const age = [];
const person = {
    name: 'Vlad',
    age: 22,
    logInfo: function (job, phone) { 
        console.group(\`$\{this.name} info:\`);
        console.log(\`Name is $\{this.name}\`);
        console.log(\`Age is $\{this.age}\`);
        console.log(\`Job is $\{job}\`); //без использования "this"
        console.log(\`Phone is $\{phone}\`); //без использования "this"
        console.groupEnd;
    },
};
const masha = {
    name: 'Masha',
    age: 23,
};
person.logInfo.bind(masha, 'programer', '3 - 8 - 121 - 212 - 12 - 12')();
person.logInfo.call(masha, 'programer', '3 - 8 - 121 - 212 - 12 - 12');
person.logInfo.apply(masha, ['programer', '3 - 8 - 121 - 212 - 12 - 12']);

// Masha info:
//   Name is Masha
//   Age is 23
//   Job is programer
//   Phone is 3 - 8 - 121 - 212 - 12 - 12
`;

export const functionAdd2: string = `const age = [];
const person = {
    name: 'Vlad',
    age: 22,
    logInfo: function () {
        console.group(\`$\{this.name} info:\`);
        console.log(\`Name is $\{this.name}\`);
        console.log(\`Age is $\{this.age}\`);
        console.log(\`Job is $\{this.job}\`); // "this" - обязательно
        console.log(\`Phone is $\{this.phone}\`); // "this" - обязательно
        console.groupEnd;
    },
};

const masha = {
    name: 'Masha',
    age: 23,
};

masha.job = 'programer'; 
masha.phone = '3 - 8 - 121 - 212 - 12 - 12';
person.logInfo.bind(masha)();
person.logInfo.call(masha);
person.logInfo.apply(masha);

// Masha info:
//   Name is Masha
//   Age is 23
//   Job is programer
//   Phone is 3 - 8 - 121 - 212 - 12 - 12
`;
