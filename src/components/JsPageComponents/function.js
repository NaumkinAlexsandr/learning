// возвращение функции
export function funcBack() {
  const func = function (callback) {
    const name = "Alex";
    callback(name);
  };
  func(function (n) {
    console.log("Hello " + n);
  });
  const jsFuncBack = document.getElementById("jsFuncBack");
  jsFuncBack.textContent = `Hello Alex`;
}

// замыкание функции
export function funcClosure() {
  const func = function () {
    return function () {
      console.log("Hi");
    };
  };
  func()();
  const jsFuncClosure = document.getElementById("jsFuncClosure");
  jsFuncClosure.textContent = `Hi`;
}

// Колбэк функции
export function funcCallback() {
  function some_function(arg1, arg2, callback) {
    let number = (arg1 - arg2 + arg2) * 2;
    callback(number);
  }
  some_function(5, 15, function (num) {
    console.log("callback result = " + num);
  });
  const jsCallback = document.getElementById("jsCallback");
  jsCallback.textContent = `callback result = 10`;
}

// Рекурсия
export function getFactorial(n) {
  let sum = 1;
  function factorialRec(x) {
    if (x === 0) return;
    sum = sum * x;
    factorialRec(x - 1);
  }
  factorialRec(5);
  console.log(sum);
  const jsFactorial = document.getElementById("jsFactorial");
  jsFactorial.textContent = `120`;
}

// Рекурсия 2
export function recNumber() {
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
  const jsRecNumber = document.getElementById("jsRecNumber");
  jsRecNumber.textContent = `1 2 3 4 5 6 7 8 9 10`;
}

// bind
export function functionBind() {
  const person = {
    name: "Vlad",
    age: 22,
    logInfo: function () {
      console.log(`Name is ${this.name}`);
      console.log("This age " + this.age);
    },
  };
  const masha = {
    name: "Masha",
    age: 23,
  };
  person.logInfo.bind(masha)();
  const jsFunctionBind = document.getElementById("jsFunctionBind");
  jsFunctionBind.innerHTML = `Name is Masha <br />
  This age 23`;
}

// call
export function functionCall() {
  const person = {
    name: "Vlad",
    age: 22,
    logInfo: function () {
      console.log(`Name is ${this.name}`);
      console.log("This age " + this.age);
    },
  };
  const masha = {
    name: "Masha",
    age: 23,
  };
  person.logInfo.call(masha);
  const jsFunctionCall = document.getElementById("jsFunctionCall");
  jsFunctionCall.innerHTML = `Name is Masha <br />
  This age 23`;
}

// apply
export function functionApply() {
  const person = {
    name: "Vlad",
    age: 22,
    logInfo: function () {
      console.log(`Name is ${this.name}`);
      console.log("This age " + this.age);
    },
  };
  const masha = {
    name: "Masha",
    age: 23,
  };
  person.logInfo.apply(masha);
  const jsFunctionApply = document.getElementById("jsFunctionApply");
  jsFunctionApply.innerHTML = `Name is Masha <br />
  This age 23`;
}
