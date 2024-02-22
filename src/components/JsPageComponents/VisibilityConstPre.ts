export const globalScopeCode: string = `
var a = 5;
let b = 8;
const c = 9;
function sum() {
    return a + b + c;
}
console.log(sum());

`;

export const localScopeCode: string = `
function sum() {
    var a = 5;
    let b = 8;
    const c = 9;
    return a + b + c;
}
console.log(sum());

`;

export const functionScopeCode: string = `
function sum() {
    if (true) {
        var a = 5;
        let b = 8;
        const c = 9;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    console.log(a);
}
sum();

`;

export const blockScopeCode: string = `
function example() {
    var x = 10;

    if (true) {
        var y = 20;
        let z = 30;
        console.log(x, y, z);
    }

    console.log(x, y);
}

example();

`;

export const lexicalScopeCode: string = `
function example() {
    var a = 5;
    let b = 8;
    const c = 9;
    function example2() {
        console.log(a);
        console.log(b);
        console.log(c);
    }
    example2();
}
example();

`;

export const dynamicScopeCode: string = `
function outer() {
    const x = 10;

    function inner() {
        console.log(x); 
    }

    return inner;
}

const innerFunc = outer();
innerFunc() 

`;
