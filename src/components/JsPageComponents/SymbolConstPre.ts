export const symbolConst: string = `
let symbolOne = Symbol("One");
let symbolTwo = Symbol("One");
console.log(symbolOne === symbolTwo);
`;

export const symbolForConst: string = `
let symbolOne = Symbol.for("One");
let symbolTwo = Symbol.for("One");
console.log(symbolOne === symbolTwo);
`;

export const symbolKeyForConst: string = `
let symbolOne = Symbol.for("One");
let symbolTwo = Symbol("One");
console.log(Symbol.keyFor(symbolOne));
console.log(Symbol.keyFor(symbolTwo));
`;

export const symbolHasInstanceConst: string = `
class Stack {
    static [Symbol.hasInstance](obj) {
        return Array.isArray(obj);
    }
}
console.log([] instanceof Stack);
`;

export const symbolIteratorConst: string = `
let numbers = [1, 2, 3];
for (let num of numbers) {
    console.log(num);
}
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
`;

export const symboIsConcatSpreadableConst: string = `
let list = {
    0: "JavaScript",
    1: "Symbol",
    length: 2,
    [Symbol.isConcatSpreadable]: true,
};
let message = ["Learning"].concat(list);
console.log(message);
`;

export const symboToPrimitiveConst: string = `
const object = {
    [Symbol.toPrimitive](hint) {
        if (hint === "number") {
            return 100;
        }
        if (hint == "string") {
            return "hello";
        }
        return null;
    },
};
console.log(+object);
console.log(\`$\{object}\`);
console.log(object + "");
`;

export const symboToStringTagConst: string = `
class ValidatorClass {
    get [Symbol.toStringTag]() {
        return "Validator";
    }
}
console.log(Object.prototype.toString.call(new ValidatorClass()));
`;

export const symbolAsyncIteratorConst: string = `
const myAsyncIterable = {
    async *[Symbol.asyncIterator]() {
        yield "hello";
        yield "async";
        yield "iteration!";
    },
};

(async () => {
    for await (const x of myAsyncIterable) {
        console.log(x);
    }
})();
`;

export const symbolMatchConst: string = `
const reg = /foo/;
reg[Symbol.match] = false;
console.log("/foo/".startsWith(reg));
console.log("/oo/".endsWith(reg));
`;

export const symbolMatchAllConst: string = `
const reg = /[0-9]+/g;
const str = "2016-01-02|2019-03-07";
const result = reg[Symbol.matchAll](str);
console.log(Array.from(result, (x) => x[0]));
`;

export const symbolReplaceConst: string = `
class CustomReplacer {
    constructor(value) {
        this.value = value;
    }
    [Symbol.replace](string) {
        return string.replace(this.value, "****");
    }
}
console.log("football".replace(new CustomReplacer("otba")));
`;

export const symbolSearchConst: string = `
class CustomReplacer {
    constructor(value) {
        this.value = value;
    }
    [Symbol.search](string) {
        return string.indexOf(this.value);
    }
}
console.log("football".search(new CustomReplacer("tball")));
`;

export const symbolSpeciesConst: string = `
class MyArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}
const str = new MyArray(1, 2, 3);
const mapped = str.map((x) => x * x);
console.log(mapped instanceof MyArray);
console.log(mapped instanceof Array);
`;

export const symbolSplitConst: string = `
class Split {
    constructor(value) {
        this.value = value;
    }
    [Symbol.split](string) {
        const index = string.indexOf(this.value);
        return \`$\{this.value}$\{string.substr(0, index)}/$\{string.substr(
            index + this.value.length
        )}\`;
    }
}
console.log("football".split(new Split("foot")));
`;

export const symbolUnscopablesConst: string = `
const obj = {
    x: 1,
    y: 2,
};

Object.defineProperty(obj, Symbol.unscopables, {
    value: {
        x: false,
        y: true,
    },
    writable: false,
    configurable: false,
    enumerable: false,
});

const { x } = obj;
console.log(x);
const { y } = obj;
// console.log(y);
`;

export const symbolIterator2Const: string = `
let range = {
    from: 1,
    to: 5,
};
range[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;
    return {
        next() {
            if (current <= last) {
                return { done: false, value: current++ };
            } else {
                return { done: true };
            }
        },
    };
};
for (let num of range) {
    console.log(num);
}
`;

export const symbolGeneratorConst: string = `
function* Boo() {
    console.log("start");
    yield 1;
    yield 2;
    yield 3;
    console.log("finish");
}
let generator = Boo();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
`;

export const symbolGeneratorTwoConst: string = `
function* array() {
    yield 1;
    yield* [20, 30, 40];
}
let number = array();
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
`;

export const symbolGeneratorThreeConst: string = `
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}
`;
