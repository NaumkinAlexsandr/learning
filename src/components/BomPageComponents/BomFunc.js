import React, { useRef } from "react";

export function bomAlert() {
  alert("Hello World!");
}

export function bomPrompt() {
  let person = prompt("What's you name?");
  alert("Hello, " + person);
}

export function bomConfirm() {
  let person = prompt("What's you name?");
  if (confirm("Your name is " + person + " ?")) {
    alert("Hello, " + person);
  } else alert("Sorry");
}

export const handlePrint = () => {
  window.print();
};

export const handleLog = () => {
  console.log("Hello World!");
};

export const handleError = () => {
  console.error("An error has occurred!");
};

export const handleWarn = () => {
  console.warn("This is a warning!");
};

export const handleInfo = () => {
  console.info("This is an informational message!");
};

export const handleTable = () => {
  const data = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 },
  ];

  console.table(data);
};

export const table = `
const data = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

console.table(data);
`;

export const handleClear = () => {
  console.clear();
};

export const handleAssert = () => {
  console.assert(2 + 2 === 5, "Error: 2 + 2 does not equal 5");
};

export const handleCount = () => {
  console.count("Calling a Method 1");
  console.count("Calling a Method 2");
  console.count("Calling a Method 3");
};

export const handleCountReset = () => {
  console.count("Method call 1");
  console.countReset("Method call");
  console.count("Method call 2");
};

export const handleDir = () => {
  const obj = { name: "John", age: 30 };
  console.dir(obj);
};

export const dir = `
const obj = { name: "John", age: 30 };
console.dir(obj);
`;

export const handleDirxml = () => {
  const xml = "<person><name>John</name><age>30</age></person>";
  console.dirxml(xml);
};

export const dirxml = `
const xml = "<person><name>John</name><age>30</age></person>";
console.dirxml(xml);
`;

export const handleGroup = () => {
  console.group("Message group");
  console.log("Message 1");
  console.log("Message 2");
  console.groupEnd();
};

export const handleGroupCollapsed = () => {
  console.group("Message group");
  console.log("Message 1");
  console.log("Message 2");
  console.groupEnd();
};

export const handleProfile = () => {
  console.profile("Profiling");
  console.profileEnd();
};

export const handleTime = () => {
  console.time("Time measurement");
  console.timeEnd("Time measurement");
};

export const handleStamp = () => {
  console.timeStamp("Time stamp");
};

export const handleTrace = () => {
  function foo() {
    console.trace();
  }

  function bar() {
    foo();
  }

  bar();
};

export const trace = `
function foo() {
  console.trace();
}

function bar() {
  foo();
}

bar();
`;
