export const funcComponent = `
import React from "react";

const TitleFunc: React.FC = () => {
    return (
        <>
            <h1>Hello World!!!</h1>
        </>
    )
    ;

export default TitleFunc;

`;

export const classComponent = `
import React, { Component } from "react";

type TitleProps = {
    title: string;
};

class TitleClass extends Component<TitleProps> {
    static defaultProps: TitleProps = {
        title: "Hello World!!!",
    };
  
    render() {
        return (
        <>
            <h1>{this.props.title}</h1>
        </>
      );
    }
  }

export default TitleClass
`;

export const typeObjectJs = `
let person = {
    name: 'John',
    age: 25
};

`;

export const typeObjectTs = `
let person: { name: string, age: number } = { 
    name: 'John', 
    age: 25 
};

`;

export const typeArrayJs = `
const numbArray = [1, 2, 3, 5, 8]; 
const numbArray2 = [1, 2, 3, 5, 8]; 
...................................... 
const strArray = ["Hello","World"]; 
const strArray2 = ["Hello", "World"]; 
...................................... 
const myBooleans = [true, false, true]; 
...................................... 
const myTuple = ["Hello", 42, true]; 
const person = ["Alex", 123456];

`;

export const typeArrayTs = `
number[] - це масив чисел.
const numbArray: number[] = [1, 2, 3, 5, 8];
const numbArray2: Array<number> = [1, 2, 3, 5, 8]; 
......................................
string[] - це масив рядків.     
const strArray: string[] = ["Hello", "World"];
const strArray2: Array<string> = ["Hello", "World"]; 
......................................
boolean[] - це масив логічних значень.
const myBooleans: boolean[] = [true, false, true];
......................................
tuple[] - це масив, який містить будь-які типи даних, 
вказані в параметрах. 
const myTuple: [string, number, boolean] = ["Hello", 42, true];
const person: [string, number] = ["Alex", 123456];

`;

export const typeArrayTsRU = `
number[] - это массив чисел.
const numbArray: number[] = [1, 2, 3, 5, 8];
const numbArray2: Array<number> = [1, 2, 3, 5, 8]; 
......................................
string[] - это массив строк.     
const strArray: string[] = ["Hello", "World"];
const strArray2: Array<string> = ["Hello", "World"]; 
......................................
boolean[] - это массив логических значений.
const myBooleans: boolean[] = [true, false, true];
......................................
tuple[] - это массив, содержащий любые типы данных,
указаны в параметрах. 
const myTuple: [string, number, boolean] = ["Hello", 42, true];
const person: [string, number] = ["Alex", 123456];

`;

export const typeAnyJs = `
let myAny = "Hello, world!";
myAny = 42;
myAny = true;
.......................
let myObject = { name: "John", age: 30 };
myObject.city = "New York";
.......................
let myArray = [1, "Hello", true];
myArray.push(42);
.......................
function myFunction(x) {
    return x * 2;
}

let result = myFunction("Hello, world!");

`;

export const typeAnyTs = `
Використання типу "any" для зберігання 
будь-яких типів даних:
let myAny: any = "Hello, world!";
myAny = 42;
myAny = true;
.......................
Використання типу "any" для визначення об'єкта:
let myObject: any = { name: "John", age: 30 };
myObject.city = "New York";
.......................
Використання типу "any" для визначення масиву:
let myArray: any[] = [1, "Hello", true];
myArray.push(42);
.......................
Використання типу "any" для виклику функції:
function myFunction(x: any) {
    return x * 2;
}

let result = myFunction("Hello, world!");

`;

export const typeAnyTsRU = `
Использование типа any для хранения
любых типов данных:
let myAny: any = "Hello, world!";
myAny = 42;
myAny = true;
.......................
Использование типа any для определения объекта:
let myObject: any = { name: "John", age: 30 };
myObject.city = "New York";
.......................
Использование типа any для определения массива:
let myArray: any[] = [1, "Hello", true];
myArray.push(42);
.......................
Использование типа any для вызова функции:
function myFunction(x: any) {
    return x * 2;
}

let result = myFunction("Hello, world!");

`;

export const typeUnknowJs = `
function myFunction(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log("Unknown value");
    }
}

`;

export const typeUnknowTs = `
function myFunction(value: unknown) {
    if (typeof value === "string") {
      console.log(value.toUpperCase());
    } else {
      console.log("Unknown value");
    }
}

`;

export const typeVoidJs = `
function myFunction() {
    console.log("This function does not return a value");
}

`;

export const typeVoidTs = `
function myFunction(): void {
    console.log("This function does not return a value");
}

`;

export const typeNeverJs = `
function throwError(mes) {
    throw new Error(mes);
}
throwError("False");

function infinity() {
    while (true) { }
}

`;

export const typeNeverTs = `
function throwError(mes: string): never {
    throw new Error(mes);
  }
  throwError("False");

  function infinity(): never {
    while (true) {}
}

`;

export const typeFuncJs = `
function sayName(name) {
    console.log(name);
}
sayName("Alex");

`;

export const typeFuncTs = `
function sayName(name: string): void {
    console.log(name);
}
sayName("Alex");

`;

export const typeEnumJs = `
var Level;
(function (Level) {
    Level[Level["Beginner"] = 0] = "Beginner";
    Level[Level["Intermediate"] = 1] = "Intermediate";
    Level[Level["Advanced"] = 2] = "Advanced";
})(Level || (Level = {}));

let myLevel = Level.Intermediate;
let myLevel2 = Level[0];
console.log(myLevel); // 1
console.log(myLevel2); // Beginner

var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
    Color[Color["Black"] = 5] = "Black";
})(Color || (Color = {}));

let green = Color.Green;
let color = Color[0];
let blue = Color[4];
let black = Color[5];

console.log(green); // 2
console.log(color); // undefined 
console.log(blue); // Blue
console.log(black); // Black "Black" 

`;

export const typeEnumTs = `
enum Level {
    Beginner,
    Intermediate,
    Advanced,
}
              
let myLevel = Level.Intermediate;
let myLevel2 = Level[0];
              
console.log(myLevel); // 1
console.log(myLevel2); // Beginner

enum Color {
    Red = 1,
    Green = 2,
    Blue = 4,
    Black,
}

let green = Color.Green;
let color = Color[0];
let blue = Color[4];
let black = Color[5];

console.log(green); // 2
console.log(color); // undefined
console.log(blue); // Blue
console.log(black); // Black "Black" 

`;

export const typeAliasJs = `
const login = "admin";
const id1 = 123;
const id2 = "123";

`;

export const typeAliasTs = `
type Login = string;
const login: Login = "admin";

type ID = string | number;
const id1: ID = 123;
const id2: ID = "123";

type Status = 'active' | 'inactive' | 'pending';
const userStatus: Status = 'active';

`;

export const typeInterfaceJs = `
const user = {
    name: 'John',
    age: 30,
    sayHello() {
    console.log(\`Hello, my name is \${this.name}.\`);
    }
  };
  user.sayHello(); // "Hello, my name is John."

`;

export const typeInterfaceTs = `
interface User {
    name: string;
    age: number;
    sayHello(): void;
  }
  
  const user: User = {
    name: 'John',
    age: 30,
    sayHello() {
      console.log(\`Hello, my name is \${this.name}.\`);
    }
  };
  
  user.sayHello(); // "Hello, my name is John."

`;

export const typeUnionJs = `
let code;
code = 123; // OK
code = "ABC"; // OK
code = false; // Compiler Error

`;

export const typeUnionTs = `
let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
code = false; // Compiler Error

`;

export const classes = `
class User {
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string){
        this.name=name;
        this.age=age;
        this.nickName=nickName;
    }
}

const alex = new User('Alexsander', 31,'Alex')

`;

export const accessTs = `
class Person {
    public name: string;
    private age: number;
    protected gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
  
    public getName(): string {
        return this.name;
    }
  
    private getAge(): number {
        return this.age;
    }
  
    protected getGender(): string {
        return this.gender;
    }
}
  
const person = new Person("John", 30, "male");
console.log(person.getName()); // "John"
console.log(person.getAge()); // Error: 'getAge' is private
console.log(person.getGender()); // "male"

`;

export const staticTs = `
class Math {
    public static add(a: number, b: number): number {
      return a + b;
    }

    public static subtract(a: number, b: number): number {
      return a - b;
    }
}

console.log(Math.add(2, 3)); // 5
console.log(Math.subtract(5, 3)); // 2

`;

export const readonlyTs = `
class Person {
    public readonly name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person('John', 30);
console.log(person.name); //  'John'
console.log(person.age); //  30

person.name = 'Jane'; // Error: Не можна присвоїти 
значення 'name' замість значення, яке вже було встановлено.
person.age = 31; // Встановлює значення 'age' на 31.

`;

export const readonlyTsRU = `
class Person {
    public readonly name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person('John', 30);
console.log(person.name); //  'John'
console.log(person.age); //  30

person.name = 'Jane'; // Error: Нельзя присвоить
значение 'name' вместо уже установленного значения.
person.age=31; // Устанавливает значение 'age' на 31.

`;

export const typeofTs = `
const myString = "Hello, world!";
const myNumber = 42;
const myFunction = function() { console.log("Hello, world!"); };

console.log(typeof myString); // "string"
console.log(typeof myNumber); // "number"
console.log(typeof myFunction); // "function"

`;

export const instanceofTs = `
class Person {
    name: string;
    age: number;
}

const person = new Person();

console.log(person instanceof Person); // true
console.log(person instanceof Object); // true
console.log(person instanceof String); // false

`;

export const keyofTs = `
interface Person {
    name: string;
    age: number;
  }
  
  type PersonKeys = keyof Person;
  
  const person: Person = { name: 'John', age: 30 };
  
  function printPersonKey(key: PersonKeys) {
    console.log(key);
  }
  
  printPersonKey('name'); // 'name'
  printPersonKey('age'); // 'age'
  printPersonKey('gender'); // Error: Argument of type 
  '"gender"' is not assignable to parameter of type 'PersonKeys'.

`;

export const decoratorTsOne = `
function debounce(delay: number) {
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      const originalMethod = descriptor.value;
      let timeout: ReturnType<typeof setTimeout>;
  
      descriptor.value = function (...args: any[]) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          originalMethod.apply(this, args);
        }, delay);
      };
    };
  }
  
  class MyClass {
    @debounce(1500)
    myMethod() {
      console.log("Delay method after 1.5 seconds");
    }
  }
  
  const myClass = new MyClass();
  
  console.log(myClass.myMethod()); 
  // Delay method after 1.5 seconds

`;

export const decoratorTsTwo = `
function Debounce(delay: number) {
    return function (originalMethod: any, 
        context: ClassMethodDecoratorContext) {
      if (context.kind !== "method") throw new Error("Method only");
      let timer: ReturnType<typeof setTimeout> | null = null;
  
      function replacementFunc(this: any, ...args: any[]) {
        if (timer !== null) {
          clearTimeout(timer);
        }
  
        timer = setTimeout(() => {
          originalMethod.apply(this, args);
        }, delay);
      }
  
      return replacementFunc;
    };
  }
  
  class MyClass {                      
    @Debounce(1500)
    delayMethod() {
      console.log("Delay method after 1.5 seconds");
    }
  }
  
  const myClass = new MyClass();                    
  console.log(myClass.delayMethod()); 
  // Delay method after 1.5 seconds

`;

export const decoratorPropertyOne = `
function uppercase(target: any, propertyName: string) {
    let value = target[propertyName];

    const getter = function() {
      return value;
    };

    const setter = function(newVal: string) {
      value = newVal.toUpperCase();
    };

    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }

  class Person {
    @uppercase
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  const person = new Person("John");
  console.log(person.name); //  "JOHN"

`;

export const decoratorMethodOne = `
const logMethod = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
      console.log(propertyKey);  
  };
  
  class User {
  
      constructor(public name: string, public age: number) {}
      
      @logMethod			
      public getPass(): string {
          return {this.name}{this.age};
      }                     
  }

  const user = new User("Alex", 30);
  console.log(user.getPass()); // Alex 30

`;

export const decoratorSetMethodOne = `
const logSet = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    console.log(propertyKey);
  };
  
  class User {
    constructor(public name: string, public age: number) {}
  
    @logSet
    set myAge(age: number) {
      this.age = age;
    }
  }
  
  const user = new User("Alex", 30);
  user.myAge = 35;
  
  console.log(user.age); // 35

`;

export const genericOne = `
function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
  }
  
  let myNumArr = getArray<number>([100, 200, 300]);
  let myStrArr = getArray<string>(["Hello", "World"]);
  
  myNumArr.push(400); // OK
  myStrArr.push("Hello TypeScript"); // OK
  
  console.log(myNumArr); // [100, 200, 300, 400]
  console.log(myStrArr); // ["Hello", "World", "Hello TypeScript"]

`;

export const genericTwo = `
interface Person<T, U> {
    name: string;
    age: number;
    address: string;
  }
  
  const person: Person<string, number> = {
    name: "John",
    age: 30,
    address: "123 Main St",
  };
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.address); 

`;

export const genericThree = `
interface IUser<
T extends string,
U extends number,
V extends string,
W extends { street: string; city: string }
> {
    name: T;
    age: U;
    email: V;
    address: W;
}
                  
const user: IUser<string, number, string, { street: string; city: string }> = {
    name: "John",
    age: 30,
    email: "john@gmail.com",
    address: {
        street: "123 Collins St",
        city: "New York",
    },
};

`;

export const genericFour = `
function reverse<T>(items: T[]): T[] {
    return items.reverse();
}
  
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverse(numbers);
console.log(reversedNumbers); // [5, 4, 3, 2, 1]
  
const strings = ['apple', 'banana', 'cherry'];
const reversedStrings = reverse(strings);
console.log(reversedStrings); // ['cherry', 'banana', 'apple']

`;

export const genericFive = `
function mergeObjects<T extends object, R extends object>(a: T, b: R) {
    return Object.assign({}, a, b);
}
  
const merged = mergeObjects<{ model: string }, { year: number }>(
    { model: "Ford" },
    { year: 2010 }
);
console.log(merged);
console.log(merged.model);
console.log(merged.year);
`;

export const assertionOne = `
let code: any = 123; 
let employeeCode = <number> code;  
console.log(typeof employeeCode); // number

`;

export const assertionTwo = `
let code: any = 123; 
let employeeCode = code as number;
console.log(typeof employeeCode); // number

`;

export const assertionThree = `
type Person = {
    name: string;
    age: number;
};

const bill = {
    name: "Bill",
    age: 35,
};

function printPerson(person: Person) {
    console.log(\`Name: \${person.name}\`);
    console.log(\`Age: \${person.age}\`);
}

bill.name = "Belly";
printPerson(bill); // Name: Belly Age: 35

`;

export const assertionFour = `
type Person = {
    name: string;
    age: number;
};

const john = {
    name: "John",
    age: 30,
} as const;  

function printPerson(person: Person) {
    console.log(\`Name: \${person.name}\`);
    console.log(\`Age: \${person.age}\`);
}

john.name = "Johny";
printPerson(john); // Error

`;

export const typeGuards = `
function isStringOrNumber(value: string | number): value is string | number {
    return typeof value === "string" || typeof value === "number";
}

function myFunction(value: string | number) {
    if (isStringOrNumber(value)) {
        console.log("The value is a string or a number");
    } else {
        console.log("The value is not a string or a number");
    }
}

`;

export const typeGuardsTwo = `
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

function isPerson(value: unknown): value is Person {
    return value instanceof Person;
}

let obj: unknown = new Person("John");

if (isPerson(obj)) {
    console.log("obj is an instance of Person");
    console.log(obj.name); // John
}

`;

export const typeGuardsThree = `
interface Car {
    brand: string;
    model: string;
}

let vehicle: Car = { brand: "Toyota", model: "Camry" };

function isCar(value: unknown): value is Car {
    return (
        (value as Car).brand !== undefined && (value as Car).model !== undefined
    );
}

if (isCar(vehicle)) {
    console.log("vehicle is a Car");
    console.log(vehicle.brand, vehicle.model);
}

`;

export const typeGuardsFour = `
type Color = "red" | "blue" | "green";

function isColor(value: unknown): value is Color {
    return value === "red" || value === "blue" || value === "green";
}

function printColor(color: Color) {
    console.log(\`The color is \${color}\`);
}

let color: unknown = "red";

if (isColor(color)) {
  printColor(color); // "The color is red"
} else {
    console.log("Invalid color");
}

`;

export const mappedArray = `
type MyArray<T> = {
    [key: string]: T;
}

const myArray: MyArray<number> = {
    a: 1,
    b: 2,
    c: 3
};

`;

export const mappedObject = `
type MyObject<T> = {
    [key: string]: T;
}

const myObject: MyObject<string> = {
    name: 'John',
    age: '30',
    city: 'New York'
};

`;

export const mappedClass = `
class MyClass {
    name: string;
    age: number;
    city: string;
}

type MyClassWithOptionalCity = {
    [key in keyof MyClass]?: MyClass[key];
}

const myClass: MyClassWithOptionalCity = {
    name: 'John',
    age: 30
};

`;

export const mappedVariables = `
type MyType<T> = {
    [key: string]: T;
}

const myValue = 'hello';

const myObjectWithVariable: MyType<typeof myValue> = {
    a: myValue,
    b: myValue,
    c: myValue
};

`;

export const mappedElement = `
type MyType<T> = {
    [key: string]: T;
}

type MyOtherType<T> = MyType<T> | {
    extra: T;
}

const myValue = 'hello';

const myObjectWithConditionalType: MyOtherType<typeof myValue> = {
    a: myValue,
    b: myValue,
    c: myValue,
    extra: myValue
};

`;

export const mappedCapitalize = `
type User = {
    name: string;
    age: number;
};

type ToCapitalize<T extends string> = \`\${Capitalize<T>}\`;
type GetCapitalize<T> = {
    [K in keyof T & string as ToCapitalize<K>]: T[K];
};
type Cap = GetCapitalize<User>;

const john: Cap = {
    Name: "John",
    Age: 30,
};
console.log(john); // { Name: 'John', Age: 30 }

`;

export const mappedUppercase = `
type User = {
    name: string;
    age: number;
};
type ToUppercase<T extends string> = \`\${Uppercase<T>}\`;
type GetUppercase<T> = {
    [K in keyof T & string as ToUppercase<K>]: T[K];
};
type Uper = GetUppercase<User>;

const bill: Uper = {
  NAME: "Bill",
  AGE: 30,
};
console.log(bill); // { NAME: 'Bill', AGE: 30 }

`;

export const mappedUnion = `
type Users = "one" | "two" | "three";

type GetUsers = {
    [K in Users]: string;
};

const users: GetUsers = { one: "John", two: "BiLL", three: "Jane" };

console.log(users); // { one: 'John', two: 'BiLL', three: 'Jane' }

`;

export const mappedEnum = `
enum Department {
    Supervisor,
    Deputy,
}

type JobTitle = keyof typeof Department;

type GetDepartment = {
    [K in JobTitle]: string;
};

const admins: GetDepartment = {
    Supervisor: "Alex",
    Deputy: "Leo",
};

console.log(admins); // { Supervisor: 'Alex', Deputy: 'Leo' }

`;

export const utilityRecord = `
interface ICatInfo {
    name: string;
    age: number;
}

type CatBreed = "Sphinx" | "Siamese" | "Bombay";

const cats: Record<CatBreed, ICatInfo> = {
    Sphinx: { name: "Molly", age: 1 },
    Siamese: { name: "Boris", age: 2 },
    Bombay: { name: "Leo", age: 1 },
};

`;

export const utilityReadonly = `
type Person = {
    name: string;
    age: number;
    address: string;
}

type PersonReadonly = Readonly<Person>;

const person: PersonReadonly = {
    name: 'John',
    age: 30,
    address: '123 Main St'
};

person.name = 'Jane'; // Error: Cannot assign to 'name' 
because it is a read-only property.

`;

export const utilityPartial = `
type Person = {
    name: string;
    age: number;
    address: string;
}

type PersonPartial = Partial<Person>;

const person: PersonPartial = {
    name: 'John',
    address: '123 Main St'
};

`;

export const utilityRequired = `
type Person = {
    name: string;
    age: number;
    address: string;
}

type PersonRequired = Required<Person>;

const person: PersonRequired = {
    name: 'John',
    age: 30,
    address: '123 Main St'
};

`;

export const utilityPick = `
type Person = {
    name: string;
    age: number;
    address: string;
}

type PersonPick = Pick<Person, 'name' | 'age'>;

const person: PersonPick = {
    name: 'John',
    age: 30
};

`;

export const utilityOmit = `
type Person = {
    name: string;
    age: number;
    address: string;
}

type PersonOmit = Omit<Person, 'address'>;

const person: PersonOmit = {
    name: 'John',
    age: 30
};

`;

export const utilityExclude = `
type Person = {
    name: string;
    age: number;
    address: string;
}

type Employee = {
    name: string;
    age: number;
    salary: number;
}

type PersonExclude = Exclude<Person | Employee, { address: string }>;

const person: PersonExclude = {
    name: 'John',
    age: 30,
    salary: 50000
};

`;

export const utilityExtract = `
type Person = {
    name: string;
    age: number;
    address: string;
}

type Employee = {
    name: string;
    age: number;
    salary: number;
}

type PersonExtract = Extract<Person, { name: string; age: number }>;

const person: PersonExtract = {
    name: 'John',
    age: 30
};

`;

export const utilityNonNullable = `
type Person = {
    name: string;
    age: number;
    address?: string;
}

type PersonNonNullable = NonNullable<Person['address']>;

const person: PersonNonNullable = '123 Main St';

`;

export const utilityParameters = `
type ParametersFunction<T extends (...args: any[]) => any> = T extends (...args: infer U) => any? U : never;

type Add = (x: number, y: number) => number;

type ParametersAdd = ParametersFunction<Add>;

const add: Add = (x, y) => x + y;

const result: ParametersAdd = [1, 2];

`;

export const utilityReturnType = `
type ReturnTypeFunction<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer U? U : never;

type Add = (x: number, y: number) => number;

type ReturnTypeAdd = ReturnTypeFunction<Add>;

const add: Add = (x, y) => x + y;

const result: ReturnTypeAdd = 3;

`;

export const solidS = `
enum StatusBook {
    IsAvailable,
    NotAvailable,
}

interface IBook {
    title: string;
    author: string;
    status: StatusBook;
}

interface ILibrary {
    books: Book[];
}

interface IUser {
    name: string;
    phone: number;
}

class Book implements IBook {
    constructor(
        public title: string,
        public author: string,
        public status: StatusBook
    ) {}

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }
}

class Library implements ILibrary {
    constructor(public books: Book[]) {}

    addNewBook(title: string, author: string, status: StatusBook): void {
        const book = new Book(title, author, status);
        this.books.push(book);
        console.log(\`The book "\${book.getTitle}" has been added to the library.\`);
    }

    removeOldBook(title: string): void {
        const bookIndex = this.books.findIndex((book) => book.title === title);
        if (bookIndex !== -1) {
            const removedBook = this.books.splice(bookIndex, 1)[0];
            console.log(\`
            The book "\${removedBook.getTitle()}" has been removed from the library.\`
            );
        } else {
            console.log(\`The book with the title "\${title}" was not found in the library.\`);
        }
    }

    borrowBook(title: string): void {
        const book = this.books.find((book) => book.title === title);

        if (book) {
            if (book.status === StatusBook.IsAvailable) {
                book.status = StatusBook.NotAvailable;
                console.log(
                \`Book "\${book.getTitle()}" was taken from library \${user.name}.\`
                );
            } else {
                console.log(
                \`Book "\${book.getTitle()}" is already taken. It is located in \${user.name}\`
            );
            }
        } else {
            console.log(\`The book with the title "\${title}" was not found in the library.\`);
        }
    }

    returnBook(title: string): void {
        const book = this.books.find((book) => book.title === title);
        if (book) {
            if (book.status === StatusBook.NotAvailable) {
                book.status = StatusBook.IsAvailable;
                console.log(\`The book "\${book.getTitle()}" has been returned to the library.\`);
            } else {
                console.log(\`The book "\${book.getTitle()}" is already available.\`);
            }
        } else {
        console.log(\`The book with the title "\${title}" was not found in the library.\`);
        }
    }
}

class User implements IUser {
    constructor(
        public name: string,
        public phone: number,
        public book: Library
    ) {}

    borrowBook(title: string) {
        this.book.borrowBook(title);
        console.log(\`User \${this.name} checked out the book \${title} from the library\`);
    }
    returnBook(title: string) {
        this.book.returnBook(title);
        console.log(\`User \${this.name} returned the book \${title} to the library\`);
    }
}

const book1 = new Book("Kobzar", "Taras Shevchenko", 0);
const book2 = new Book("Forest Song", "Lesya Ukrainka", 0);
const library = new Library([book1, book2]);
const user = new User("Mykola", 1234567890, library);
library.addNewBook("Secrets of the Ancient Forest", "Lesya Ukrainka", 0);
library.addNewBook("Zakhar Berkut", "Ivan Franko", 0);
library.addNewBook("Zakhar Berkut 2", "Ivan Franko", 0);

  // console.log(library); 
  // console.log(library.books[2]);  
  // console.log(library.removeOldBook("Zakhar Berkut 2"));  
  // console.log(library.borrowBook("Kobzar")); 
  // console.log(library.borrowBook("Zakhar Berkut")); 
  // console.log(library);
  // console.log(library.returnBook("Kobzar")); 
  // console.log(library);

console.log(user.borrowBook("Kobzar")); 
console.log(library.borrowBook("Kobzar")); 
console.log(user.returnBook("Kobzar")); 
console.log(library);

`;

export const solidO = `
interface IGeometricFigure {
    x: number;
    y: number;
    draw(): void;
}

interface ICircle extends IGeometricFigure {
    radius: number;
}

interface IRectangle extends IGeometricFigure {
    height: number;
    width: number;
}

interface ITriangle extends IGeometricFigure {
    height: number;
    width: number;
}

interface IEllipse extends IGeometricFigure {
    radius: number;
}

abstract class Shape implements IGeometricFigure {
    constructor(public x: number, public y: number) {}

    draw(): void {}
}

class Circle extends Shape implements ICircle {
    constructor(x: number, y: number, public radius: number) {
        super(x, y);
    }

    draw(): void {
        console.log(
        \`Drawing circle with radius \${this.radius} at (\${this.x}, \${this.y})\`
        );
    }
}

class Rectangle extends Shape implements IRectangle {
    constructor(
        x: number,
        y: number,
        public width: number,
        public height: number
    ) {
        super(x, y);
    }

    draw(): void {
        console.log(
        \`Drawing rectangle with width \${this.width} and with height 
        \${this.height} at (\${this.x}, \${this.y})\`
        );
    }
}

class Triangle extends Shape implements ITriangle {
    constructor(
        x: number,
        y: number,
        public width: number,
        public height: number
    ) {
        super(x, y);
    }

    draw(): void {
        console.log(
        \`Drawing triangle with width \${this.width} and with height 
        \${this.height} at (\${this.x}, \${this.y})\`
        );
    }
}

class Ellipse extends Shape implements IEllipse {
    constructor(x: number, y: number, public radius: number) {
        super(x, y);
    }
    draw(): void {
        console.log(
        \`Drawing ellipse with radius \${this.radius} at (\${this.x}, \${this.y})\`
        );
    }
}

const circle = new Circle(250, 250, 50);
console.log(circle.draw());

const rectangle = new Rectangle(250, 250, 50, 50);
console.log(rectangle.draw());

const triangle = new Triangle(250, 250, 50, 50);
console.log(triangle.draw());

const ellipse = new Ellipse(250, 250, 50);
console.log(ellipse.draw());

`;

export const solidL = `
interface IGeometricFigure {
    color: string;
    name: string;
    getArea(): number;
}

interface ICircle extends IGeometricFigure {
    radius: number;
}

interface IRectangle extends IGeometricFigure {
    height: number;
    width: number;
}

interface ITriangle extends IGeometricFigure {
    height: number;
    width: number;
}

abstract class Shape implements IGeometricFigure {
    constructor(public color: string, public name: string) {}
    abstract getArea(): number;
}

class Circle extends Shape implements ICircle {
    constructor(
        public name: string,
        public color: string,
        public radius: number
    ) {
        super(color, name);
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape implements IRectangle {
    constructor(
        public name: string,
        public color: string,
        public height: number,
        public width: number
    ) {
        super(color, name);
    }

    getArea(): number {
      return this.height * this.width;
    }
}

class Triangle extends Shape implements ITriangle {
    constructor(
        public name: string,
        public color: string,
        public height: number,
        public width: number
    ) {
        super(color, name);
    }

    getArea(): number {
      return (this.width * this.height) / 2;
    }
}

function printArea(figure: IGeometricFigure): void {
    console.log(\`\${figure.name} area: \${figure.getArea()}\`);
}

const circle = new Circle("Circle", "blue", 50);
const rectangle = new Rectangle("Rectangle", "red", 50, 50);
const triangle = new Triangle("Triangle", "black", 50, 50);

printArea(circle);
printArea(rectangle);
printArea(triangle);

`;

export const solidI = `
enum UserPosition {
    DEVELOPER = "DEVELOPER",
    MANAGER = "MANAGER",
}

enum TaskStatus {
    TODO = "TODO",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
}

interface IUser {
    id: number;
    name: string;
    position: UserPosition;
}

interface ITask {
    id: number;
    title: string;
    status: TaskStatus;
    executor: IUser;
}

interface ICreateTask {
    createTask(title: string, executor: IUser): ITask;
}

interface IAssignTask {
    assignTask(task: ITask, executor: IUser): void;
}

interface ICompleteTask {
    completeTask(task: ITask): void;
}

class Developer implements IUser, ICompleteTask {
    constructor(
        public id: number,
        public name: string,
        public position: UserPosition.DEVELOPER
    ) {}

    completeTask(task: ITask): void {
        task.status = TaskStatus.COMPLETED;
    }
}

class Manager implements IUser, IAssignTask, ICompleteTask {
    constructor(
        public id: number,
        public name: string,
        public position: UserPosition.MANAGER
    ) {}

    assignTask(task: ITask, executor: IUser): void {
        task.executor = executor;
        task.status = TaskStatus.IN_PROGRESS;
    }

    completeTask(task: ITask): void {
        task.status = TaskStatus.COMPLETED;
    }
}

class TaskService implements ICreateTask, IAssignTask, ICompleteTask {
    tasks: ITask[] = [];
    counter = 1;
    createTask(title: string, executor: IUser): ITask {
        const task: ITask = {
            id: this.counter++,
            title,
            status: TaskStatus.TODO,
            executor,
        };
        this.tasks.push(task);
        return task;
    }
    assignTask(task: ITask, executor: IUser): void {
        if (executor.position === UserPosition.DEVELOPER) {
            task.executor = executor;
            task.status = TaskStatus.IN_PROGRESS;
        }
    }
    completeTask(task: ITask): void {
        task.status = TaskStatus.COMPLETED;
    }
}

const developer = new Developer(1, "John", UserPosition.DEVELOPER);
const manager = new Manager(1, "Alex", UserPosition.MANAGER);

const taskService = new TaskService();

const task1 = taskService.createTask("First task", developer);
const task2 = taskService.createTask("Second Task", developer);
const task3 = taskService.createTask("Third Task", manager);

taskService.assignTask(task1, developer);
manager.assignTask(task2, developer);
manager.assignTask(task3, manager);
developer.completeTask(task2);

console.log(task1);
console.log(task2);
console.log(task3);

`;

export const solidD = `
enum Service {
    EMAIL = "email",
    SMS = "sms",
}

interface IMessage {
    sender: string;
    receiver: Service;
    content: string;
}

interface IMessageHandler {
    handleMessage(message: IMessage): void;
}

class Messenger {
    private messageHandlers: { [key: string]: IMessageHandler[] } = {};

    registerHandler(messageType: string, handler: IMessageHandler): void {
        if (!this.messageHandlers[messageType]) {
            this.messageHandlers[messageType] = [];
        }

        this.messageHandlers[messageType].push(handler);
    }

    sendMessage(message: IMessage): void {
        const { receiver } = message;

        if (this.messageHandlers[receiver]) {
            this.messageHandlers[receiver].forEach((handler) => {
            handler.handleMessage(message);
            });
        } else {
            console.log(\`No handlers registered for receiver \${receiver}\`);
        }
    }
}

class EmailService implements IMessageHandler {
    handleMessage(message: IMessage): void {
        console.log(\`Sending email to \${message.receiver}: \${message.content}\`);
    }
}

class SMSService implements IMessageHandler {
    handleMessage(message: IMessage): void {
        console.log(\`Sending SMS to \${message.receiver}: \${message.content}\`);
    }
}

const messenger = new Messenger();

const emailService = new EmailService();
messenger.registerHandler("email", emailService);

const smsService = new SMSService();
messenger.registerHandler("sms", smsService);

const message1: IMessage = {
    sender: "user1",
    receiver: Service.SMS,
    content: "Hello, Alex!",
};
messenger.sendMessage(message1);

const message2: IMessage = {
    sender: "user2",
    receiver: Service.SMS,
    content: "Hello, John!",
};
messenger.sendMessage(message2);

const message3: IMessage = {
    sender: "user3",
    receiver: Service.EMAIL,
    content: "Hello World",
};
messenger.sendMessage(message3);


`;
