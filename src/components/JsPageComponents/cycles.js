// --------------------------cycles--------------------------
// for i++
export function forPlus() {
  for (let i = 0; i < 5; i += 1) {
    console.log(i);
  }
  const jsForPlus = document.getElementById("jsForPlus");
  jsForPlus.innerHTML = "0 <br /> 1 <br /> 2 <br /> 3 <br /> 4  ";
}

// for i--
export function forMinus() {
  for (let i = 5; i > 0; i -= 1) {
    console.log(i);
  }
  const jsForMinus = document.getElementById("jsForMinus");
  jsForMinus.innerHTML = " 5 <br /> 4 <br /> 3 <br /> 2 <br /> 1";
}

// for четные числа
export function forEven() {
  for (let i = 0; i < 10; i += 2) {
    console.log(i);
  }
  const jsForEven = document.getElementById("jsForEven");
  jsForEven.innerHTML = `0 <br /> 2 <br /> 4 <br /> 6 <br /> 8 `;
}

// for нечетные числа
export function forOdd() {
  for (let i = 1; i < 10; i += 2) {
    console.log(i);
  }
  const jsForOdd = document.getElementById("jsForOdd");
  jsForOdd.innerHTML = `1 <br /> 3 <br /> 5 <br /> 7 <br /> 9`;
}

// for вложенные циклы
export function forDouble() {
  for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
      console.log(i * j);
    }
  }
  const jsForDouble = document.getElementById("jsForDouble");
  jsForDouble.innerHTML = `1 <br /> 2 <br /> 2 <br /> 4 `;
}

// while
export function forWhile() {
  let i = 1;
  while (i <= 4) {
    console.log(i);
    i++;
  }
  const jsWhile = document.getElementById("jsWhile");
  jsWhile.innerHTML = `1 <br /> 2 <br /> 3 <br /> 4 `;
}

// do while
export function forDoWhile() {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 4);
  const jsDoWhile = document.getElementById("jsDoWhile");
  jsDoWhile.innerHTML = `1 <br /> 2 <br /> 3 <br /> 4`;
}

// continue
export function forContinue() {
  for (let i = 1; i <= 5; i++) {
    if (i === 6) continue;
    console.log(i);
  }
  const jsContinue = document.getElementById("jsContinue");
  jsContinue.innerHTML = `1  <br /> 2  <br /> 3 <br /> 4  <br /> 5 `;
}

// break
export function forBreak() {
  for (let i = 1; i <= 10; i++) {
    if (i === 6) break;
    console.log(i);
  }
  const jsBreak = document.getElementById("jsBreak");
  jsBreak.innerHTML = `1 <br /> 2 <br /> 3 <br /> 4 <br /> 5`;
}

// for in
export function forIn() {
  const people = { name: "Vasya", age: 22, budget: 4500 };

  for (let person in people) {
    console.log(person);
  }
  const jsIn = document.getElementById("jsIn");
  jsIn.innerHTML = `name <br /> age <br /> budget`;
}

// for of
export function forOff() {
  const people = [
    { name: "Vasya", age: 22, budget: 4500 },
    { name: "Petya", age: 21, budget: 4200 },
  ];
  for (let person of people) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.budget);
  }

  const jsOf = document.getElementById("jsOf");
  jsOf.innerHTML = `Vasya <br /> 22 <br /> 4500 <br />
       Petya <br /> 21 <br /> 4200`;
}
