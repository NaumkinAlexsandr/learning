// Symbol
export function symbol() {
  let symbolOne = Symbol("One");
  let symbolTwo = Symbol("One");
  console.log(symbolOne === symbolTwo);
  const jssymbol = document.getElementById("jssymbol");
  jssymbol.innerHTML = `false`;
}

// Symbol.for
export function symbolFor() {
  let symbolOne = Symbol.for("One");
  let symbolTwo = Symbol.for("One");
  console.log(symbolOne === symbolTwo);
  const jssymbolFor = document.getElementById("jssymbolFor");
  jssymbolFor.innerHTML = `true`;
}

// Symbol.keyFor
export function symbolKeyFor() {
  let symbolOne = Symbol.for("One");
  let symbolTwo = Symbol("One");
  console.log(Symbol.keyFor(symbolOne));
  console.log(Symbol.keyFor(symbolTwo));
  const jssymbolKeyFor = document.getElementById("jssymbolKeyFor");
  jssymbolKeyFor.innerHTML = `One <br /> undefined`;
}

// Symbol.hasInstance
export function symbolHasInstance() {
  class Stack {
    static [Symbol.hasInstance](obj) {
      return Array.isArray(obj);
    }
  }
  console.log([] instanceof Stack);
  const jssymbolHasInstance = document.getElementById("jssymbolHasInstance");
  jssymbolHasInstance.innerHTML = `true`;
}

//  Symbol.iterator
export function symbolIterator() {
  let numbers = [1, 2, 3];
  for (let num of numbers) {
    console.log(num);
  }
  let iterator = numbers[Symbol.iterator]();
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  const jssymbolIterator = document.getElementById("jssymbolIterator");
  jssymbolIterator.innerHTML = `1 <br /> 2 <br /> 3 <br /> 
  {value: 1, done: false} <br /> 
  {value: 2, done: false} <br />   
  {value: 3, done: false} <br /> 
  {value: undefined, done: true} `;
}

// Symbol.isConcatSpreadable
export function symboIsConcatSpreadable() {
  let list = {
    0: "JavaScript",
    1: "Symbol",
    length: 2,
    [Symbol.isConcatSpreadable]: true,
  };
  let message = ["Learning"].concat(list);
  console.log(message);
  const jssymboIsConcatSpreadable = document.getElementById(
    "jssymboIsConcatSpreadable"
  );
  jssymboIsConcatSpreadable.innerHTML = `["Learning", "JavaScript", "Symbol"]`;
  const jssymboIsConcatSpreadable2 = document.getElementById(
    "jssymboIsConcatSpreadable2"
  );
  jssymboIsConcatSpreadable2.innerHTML = `['Learning', {…}] <br />
  0: "Learning" <br />
  1:   {0: 'JavaScript', 1: 'Symbol', length: 2, Symbol(Symbol.isConcatSpreadable): false}  `;
}

// Symbol.toPrimitive
export function symboToPrimitive() {
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
  console.log(`${object}`);
  console.log(object + "");
  const jssymboToPrimitive = document.getElementById("jssymboToPrimitive");
  jssymboToPrimitive.innerHTML = `100 <br /> hello <br /> null`;
}

// Symbol.toStringTag
export function symboToStringTag() {
  class ValidatorClass {
    get [Symbol.toStringTag]() {
      return "Validator";
    }
  }
  console.log(Object.prototype.toString.call(new ValidatorClass()));
  const jssymboToStringTag = document.getElementById("jssymboToStringTag");
  jssymboToStringTag.innerHTML = `[object Validator]`;
}

// Symbol.asyncIterator
export function symbolAsyncIterator() {
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
  const jssymbolAsyncIterator = document.getElementById(
    "jssymbolAsyncIterator"
  );
  jssymbolAsyncIterator.innerHTML = `hello <br /> async <br /> iteration`;
}

// Symbol.match
export function symbolMatch() {
  const reg = /foo/;
  reg[Symbol.match] = false;
  console.log("/foo/".startsWith(reg));
  console.log("/oo/".endsWith(reg));
  const jssymbolMatch = document.getElementById("jssymbolMatch");
  jssymbolMatch.innerHTML = `true <br /> false `;
}

// Symbol.match
export function symbolMatchAll() {
  const reg = /[0-9]+/g;
  const str = "2016-01-02|2019-03-07";
  const result = reg[Symbol.matchAll](str);
  console.log(Array.from(result, (x) => x[0]));
  const jssymbolMatchAll = document.getElementById("jssymbolMatchAll");
  jssymbolMatchAll.innerHTML = `["2016", "01", "02", "2019", "03", "07"]`;
}

// Symbol.replace
export function symbolReplace() {
  class CustomReplacer {
    constructor(value) {
      this.value = value;
    }
    [Symbol.replace](string) {
      return string.replace(this.value, "****");
    }
  }
  console.log("football".replace(new CustomReplacer("otba")));
  const jssymbolReplace = document.getElementById("jssymbolReplace");
  jssymbolReplace.innerHTML = `fo****ll`;
}

// Symbol.search
export function symbolSearch() {
  class CustomReplacer {
    constructor(value) {
      this.value = value;
    }
    [Symbol.search](string) {
      return string.indexOf(this.value);
    }
  }
  console.log("football".search(new CustomReplacer("tball")));
  const jssymbolSearch = document.getElementById("jssymbolSearch");
  jssymbolSearch.innerHTML = `3`;
}

// Symbol.species
export function symbolSpecies() {
  class MyArray extends Array {
    static get [Symbol.species]() {
      return Array;
    }
  }
  const str = new MyArray(1, 2, 3);
  const mapped = str.map((x) => x * x);
  console.log(mapped instanceof MyArray);
  console.log(mapped instanceof Array);
  const jssymbolSpecies = document.getElementById("jssymbolSpecies");
  jssymbolSpecies.innerHTML = ` false <br />  true`;
}

// Symbol.split
export function symbolSplit() {
  class Split {
    constructor(value) {
      this.value = value;
    }
    [Symbol.split](string) {
      const index = string.indexOf(this.value);
      return `${this.value}${string.substr(0, index)}/${string.substr(
        index + this.value.length
      )}`;
    }
  }
  console.log("football".split(new Split("foot")));
  const jssymbolSplit = document.getElementById("jssymbolSplit");
  jssymbolSplit.innerHTML = `foot/ball`;
}

// Symbol.unscopables
export function symbolUnscopables() {
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

  const jssymbolUnscopables = document.getElementById("jssymbolUnscopables");
  jssymbolUnscopables.innerHTML = `1 <br /> ReferenceError: y is not defined`;
}

// symbol.iterator
export function symbolIterator2() {
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
  const jssymbolIterator1 = document.getElementById("jssymbolIterator1");
  jssymbolIterator1.innerHTML = `1 <br /> 2 <br /> 3 <br /> 4 <br /> 5`;
}

// symbol.generator
export function symbolGenerator() {
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
  const jssymbolGenerator = document.getElementById("jssymbolGenerator");
  jssymbolGenerator.innerHTML = `start <br /> 
  {value: 1, done: false} <br />
  {value: 2, done: false} <br />
  {value: 3, done: false} <br />
  finish <br />
  {value: undefined, done: true}`;
}

// symbol.generatorTwo
export function symbolGeneratorTwo() {
  function* array() {
    yield 1;
    yield* [20, 30, 40];
  }
  let number = array();
  console.log(number.next());
  console.log(number.next());
  console.log(number.next());
  console.log(number.next());
  const jssymbolGeneratorTwo = document.getElementById("jssymbolGeneratorTwo");
  jssymbolGeneratorTwo.innerHTML = `{value: 1, done: false}<br />
  {value: 20, done: false}<br />
  {value: 30, done: false}<br />
  {value: 40, done: false}`;
}
