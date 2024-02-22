export const people = [
  { name: "Vasya", age: 22, budget: 4500 },
  { name: "Petya", age: 21, budget: 4200 },
  { name: "Katya", age: 18, budget: 4900 },
  { name: "Gosha", age: 21, budget: 4750 },
  { name: "Masha", age: 19, budget: 4200 },
  { name: "Pasha", age: 25, budget: 4950 },
];

// Filter
export function filter() {
  const age = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 20) {
      age.push(people[i]);
    }
  }
  console.log(age);
  const jsFilter = document.getElementById("jsFilter");
  jsFilter.innerHTML = ` 
  0: {name: 'Vasya', age: 22, budget: 4500} <br /> 
  1: {name: 'Petya', age: 21, budget: 4200} <br />
  2: {name: 'Gosha', age: 21, budget: 4750} <br />
  3: {name: 'Pasha', age: 25, budget: 4950} `;
}

// forEach
export function forEach() {
  people.forEach((person, index) => {
    console.log(person);
    console.log(index);
  });
  const jsForEach = document.getElementById("jsForEach");
  jsForEach.innerHTML = ` 
  {name: 'Vasya', age: 22, budget: 4500}<br />
  0<br />
  {name: 'Petya', age: 21, budget: 4200}<br />
  1<br />
  {name: 'Katya', age: 18, budget: 4900}<br />
  2<br />
  {name: 'Gosha', age: 21, budget: 4750}<br />
  3<br />
  {name: 'Masha', age: 19, budget: 4200}<br />
  4<br />
  {name: 'Pasha', age: 25, budget: 4950}<br />
  5 `;
}

// Find
export function find() {
  const vasya = people.find((person) => person.name === "Vasya");
  console.log(vasya);
  const jsFind = document.getElementById("jsFind");
  jsFind.textContent = `{name: 'Vasya', age: 22, budget: 4500} `;
}

// FindIndex
export function findIndex() {
  const gosha = people.findIndex((person) => person.name === "Gosha");
  console.log(gosha);
  const jsFindIndex = document.getElementById("jsFindIndex");
  jsFindIndex.textContent = `3`;
}

// Map
export function map() {
  const newPeople = people.map((person) => {
    return `${person.name} ${person.age}`;
  });
  console.log(newPeople);
  const jsMap = document.getElementById("jsMap");
  jsMap.textContent = `['Vasya 22', 'Petya 21', 'Katya 18', 'Gosha 21', 'Masha 19', 'Pasha 25']`;
}

// Map 2
export function mapTwo() {
  const array = [1, 2, 3, 4, 5];
  Array.prototype.multBy = function (n) {
    return this.map(function (i) {
      return i * n;
    });
  };
  console.log(array.multBy(2));
  const jsMapTwo = document.getElementById("jsMapTwo");
  jsMapTwo.textContent = `[2, 4, 6, 8, 10]`;
}

export function mapThree() {
  Array.prototype.multBy = function (n) {
    return this.map(function (i) {
      return i * n;
    });
  };
  const array2 = [11, 12, 13, 14, 15];
  console.log(array2.multBy(10));
  const jsMapThree = document.getElementById("jsMapThree");
  jsMapThree.textContent = `[110, 120, 130, 140, 150]`;
}

// Reduce
export function reduce() {
  let summ = 0;
  for (let i = 0; i < people.length; i++) {
    summ += people[i].budget;
  }
  console.log(summ);

  const jsReduce = document.getElementById("jsReduce");
  jsReduce.textContent = `27500`;
}

// reduceRight
export function reduceRight() {
  const summ2 = people.reduceRight((total, person) => {
    return total + person.budget;
  }, 0);
  console.log(summ2);
  const jsReduceRight = document.getElementById("jsReduceRight");
  jsReduceRight.textContent = `27500`;
}

// split
export function split() {
  const str = "Hello San Antonio Fire Department Recruiting";
  const newStr = str.replace(/[ea]/gi, "");
  const split = newStr.split(" ");
  for (let text of split) {
    console.log(text);
  }
  const jsSplit = document.getElementById("jsSplit");
  jsSplit.innerHTML = `Hllo <br /> Sn <br /> ntonio <br /> Fir <br /> Dprtmnt <br /> Rcruiting  `;
}

// push
export function push() {
  const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
  const methodPush = [];
  for (x = 0; x < firstArray.length; x++) {
    if (firstArray[x] > 10) {
      methodPush.push(firstArray[x]);
    }
  }
  console.log(methodPush);
  const jsPush = document.getElementById("jsPush");
  jsPush.textContent = `[50, 33, 22, 77]`;
}

// pop
export function arrPop() {
  const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
  firstArray.pop();
  console.log(firstArray);
  const jsarrPop = document.getElementById("jsarrPop");
  jsarrPop.textContent = `[1, 50, 2, 5, 7, 10, 33, 22]`;
}

// unshift
export function unshift() {
  const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
  const methodUnshift = [];
  for (x = 0; x < firstArray.length; x++) {
    if (firstArray[x] > 10) {
      methodUnshift.unshift(firstArray[x]);
    }
  }
  console.log(methodUnshift);
  const jsUnshift = document.getElementById("jsUnshift");
  jsUnshift.textContent = `[77, 22, 33, 50]`;
}

// shift
export function shift() {
  const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
  firstArray.shift();
  console.log(firstArray);
  const jsShift = document.getElementById("jsShift");
  jsShift.textContent = `[50, 2, 5, 7, 10, 33, 22, 77]`;
}

// includes
export function arrincludes() {
  const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
  console.log(firstArray.includes(55));
  console.log(firstArray.includes(77));
  const jsIncludes = document.getElementById("jsIncludes");
  jsIncludes.innerHTML = `false <br /> true`;
}

// includes
export function includes() {
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
  const jsIncludes = document.getElementById("jsIncludes");
  jsIncludes.textContent = `[50, 33, 22, 77]`;
}

// every
export function arrEvery() {
  let numbers = [1, 3, 5, 7, 9];
  let result = numbers.every(function (e) {
    return e < 10;
  });
  console.log(result);
  const jsarrEvery = document.getElementById("jsarrEvery");
  jsarrEvery.innerHTML = `true`;
}

// some
export function arrSome() {
  let numbers = [1, 3, 5, 7, 9];
  let result = numbers.some(function (e) {
    return e < 5;
  });
  console.log(result);
  const jsarrSome = document.getElementById("jsarrSome");
  jsarrSome.innerHTML = `true`;
}

// sort
export function arrSort() {
  const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
  firstArray.sort((a, b) => a - b);
  console.log(firstArray);
  const jsarrSort = document.getElementById("jsarrSort");
  jsarrSort.innerHTML = `[1, 2, 5, 7, 10, 22, 33, 50, 77]`;
}

// concat
export function arrConcat() {
  const firstArray = [1, 50, 2, 5, 7];
  const secondArray = [10, 33, 22, 77];
  const result = [].concat(firstArray, secondArray);
  console.log(result);
  const jsarrConcat = document.getElementById("jsarrConcat");
  jsarrConcat.innerHTML = `[1, 50, 2, 5, 7, 10, 33, 22, 77]`;
}

// lastIndexOf
export function arrLastIndexOf() {
  const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
  console.log(firstArray.lastIndexOf(22));
  console.log(firstArray.lastIndexOf(10));
  const jsarrLastIndexOf = document.getElementById("jsarrLastIndexOf");
  jsarrLastIndexOf.innerHTML = `7 <br /> 5`;
}

// indexOf
export function arrIndexOf() {
  const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
  console.log(firstArray.indexOf(50));
  console.log(firstArray.indexOf(7));
  const jsarrIndexOf = document.getElementById("jsarrIndexOf");
  jsarrIndexOf.innerHTML = `1 <br /> 4`;
}

// of
export function arrOf() {
  let numbers = Array.of(33);
  let text = Array.of("A", "B", "C");
  console.log(numbers.length);
  console.log(text.length);
  const jsarrOf = document.getElementById("jsarrOf");
  jsarrOf.innerHTML = `1 <br /> 3`;
}

// flat
export function arrFlat() {
  const numbers = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
  const resultOne = numbers.flat(1);
  const resultTwo = numbers.flat(2);
  const resultThree = numbers.flat(Infinity);
  console.log(resultOne);
  console.log(resultTwo);
  console.log(resultThree);
  const jsarrFlat = document.getElementById("jsarrFlat");
  jsarrFlat.innerHTML = `[1, 2, 3, 4, 5, Array(3)] `;
  const jsarrFlat2 = document.getElementById("jsarrFlat2");
  jsarrFlat2.innerHTML = `[1, 2, 3, 4, 5, 6, 7, Array(2)]`;
  const jsarrFlat3 = document.getElementById("jsarrFlat3");
  jsarrFlat3.innerHTML = `[1, 2, 3, 4, 5, 6, 7, 8, 9] `;
}

// flatMap
export function arrFlatMap() {
  let sentences = ["we", "will", "we will", "rock you"];
  let words = sentences.flatMap((s) => s.split(" "));
  console.log(words);
  const jsarrFlatMap = document.getElementById("jsarrFlatMap");
  jsarrFlatMap.innerHTML = `['we', 'will', 'we', 'will', 'rock', 'you']`;
}

// at
export function arrAt() {
  const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
  console.log(firstArray.at(-1));
  console.log(firstArray.at(-2));
  const jsarrAt = document.getElementById("jsarrAt");
  jsarrAt.innerHTML = `77 <br /> 22`;
}

// from
export function arrFrom() {
  function array() {
    return Array.from(arguments);
  }
  console.log(array(33, "A", "B", "C"));
  const jsarrFrom = document.getElementById("jsarrFrom");
  jsarrFrom.innerHTML = `[33, 'A', 'B', 'C']`;
}

// from
export function from() {
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
  const jsFrom = document.getElementById("jsFrom");
  jsFrom.textContent = `['banana', 'apple', 'orange', 'watermelon', 'grape']`;
}

// splice
export function arrSplice() {
  const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
  firstArray.splice(0, 5);
  console.log(firstArray);
  const jsarrSplice = document.getElementById("jsarrSplice");
  jsarrSplice.textContent = `[10, 33, 22, 77]`;
}

// splice 2
export function arrSpliceTwo() {
  const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
  firstArray.splice(0, 5, 1, 2, 3);
  console.log(firstArray);
  const jsarrSpliceTwo = document.getElementById("jsarrSpliceTwo");
  jsarrSpliceTwo.textContent = `[1, 2, 3, 10, 33, 22, 77]`;
}

// slice
export function arrSlice() {
  const firstArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
  const secondArray = firstArray.slice(0, 4);
  console.log(secondArray);
  const jsarrSlice = document.getElementById("jsarrSlice");
  jsarrSlice.textContent = `[1, 50, 2, 5]`;
}

// slice Two
export function arrSliceTwo() {
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
  const jsarrSliceTwo = document.getElementById("jsarrSliceTwo");
  jsarrSliceTwo.innerHTML = `[[1,2],[3,4]]<br />
  [[1,2,3],[4,5]]<br />
  [[1,2,3],[4,5,6]]<br />
  [[1],[2],[3],[4],[5],[6]]  `;
}

// join
export function arrJoin() {
  let sentences = ["we", "will", "we", "will", "rock you"];
  const text = sentences.join(" ");
  const textTwo = sentences.join("_");
  console.log(text);
  console.log(textTwo);
  const jsarrJoin = document.getElementById("jsarrJoin");
  jsarrJoin.innerHTML = `we will we will rock you  <br /> we_will_we_will_rock you`;
}

// copyWithin
export function arrcopyWithin() {
  const firstArray = [1, 2, 3, 4, 5, 6];
  console.log(firstArray.copyWithin(2));
  console.log(firstArray.copyWithin(0, 2));
  console.log(firstArray.copyWithin(0, 2, 3));
  const jsarrcopyWithin = document.getElementById("jsarrcopyWithin");
  jsarrcopyWithin.innerHTML = `[1, 2, 1, 2, 3, 4] <br /> [1, 2, 3, 4, 3, 4]<br /> [3, 2, 3, 4, 3, 4]`;
}

//Entries
export function arrEntries() {
  const array = ["a", "b", "c"];
  const iterator = array.entries();
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  const jsarrEntries = document.getElementById("jsarrEntries");
  jsarrEntries.innerHTML = `[0, 'a']<br /> [1, 'b'] <br />[2, 'c']`;
}

// Fill
export function arrFill() {
  const firstArray = [1, 2, 3, 4, 5, 6];
  console.log(firstArray.fill(2));
  console.log(firstArray.fill(5, 1));
  console.log(firstArray.fill(0, 2, 4));
  const jsarrFill = document.getElementById("jsarrFill");
  jsarrFill.innerHTML = `[2, 2, 2, 2, 2, 2]<br /> [2, 5, 5, 5, 5, 5] <br />[2, 5, 0, 0, 5, 5]`;
}

// toLocaleString
export function arrTLS() {
  const firstArray = [new Date()];
  const date = firstArray.toLocaleString();
  console.log(date);
  const jsarrTLS = document.getElementById("jsarrTLS");
  jsarrTLS.innerHTML = date;
}

// toString
export function arrToString() {
  const firstArray = [1, 2, 3, 4, 5, 6];
  console.log(firstArray.toString());
  const jsarrToString = document.getElementById("jsarrToString");
  jsarrToString.innerHTML = "1,2,3,4,5,6";
}

// values
export function arrValues() {
  const firstArray = [1, 2, 3, 4];
  const iterator = firstArray.values();
  for (const value of iterator) {
    console.log(value);
  }
  const jsarrValues = document.getElementById("jsarrValues");
  jsarrValues.innerHTML = "1 <br /> 2 <br />3 <br /> 4";
}
