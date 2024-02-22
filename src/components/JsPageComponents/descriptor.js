// value
export function objectCreateValue() {
  const people = Object.create(
    {},
    {
      name: {
        value: "Vasya",
      },
      age: {
        value: 30,
      },
    }
  );
  console.log(people);

  const jsObjectCreateValue = document.getElementById("jsObjectCreateValue");
  jsObjectCreateValue.innerHTML = `{name: 'Vasya', age: 30}`;
}

// enumerable
export function objectCreateEnumerable() {
  const people = Object.create(
    {},
    {
      name: {
        value: "Vasya",
        enumerable: true,
      },
      age: {
        value: 30,
        enumerable: true,
      },
    }
  );

  for (let key in people) {
    console.log("Key", key);
  }
  const jsObjectCreateEnumerable = document.getElementById(
    "jsObjectCreateEnumerable"
  );
  jsObjectCreateEnumerable.innerHTML = `Key name <br /> Key age`;
}

// writable
export function objectCreateWritable() {
  const people = Object.create(
    {},
    {
      name: {
        value: "Vasya",
        enumerable: true,
        writable: true,
      },
      age: {
        value: 30,
        enumerable: true,
        writable: true,
      },
    }
  );
  people.name = "Masha";
  console.log(people);
  const jsObjectCreateWritable = document.getElementById(
    "jsObjectCreateWritable"
  );
  jsObjectCreateWritable.innerHTML = `{name: 'Masha', age: 30}`;
}

// configurable
export function objectCreateConfigurable() {
  const people = Object.create(
    {},
    {
      name: {
        value: "Vasya",
        enumerable: true,
        writable: true,
        configurable: true,
      },
      age: {
        value: 30,
        enumerable: true,
        writable: true,
        configurable: true,
      },
    }
  );
  delete people.age;
  console.log(people);
  const jsObjectCreateConfigurable = document.getElementById(
    "jsObjectCreateConfigurable"
  );
  jsObjectCreateConfigurable.innerHTML = `{name: 'Vasya'}`;
}

// CreateGet
export function objectCreateGet() {
  const people = Object.create(
    {},
    {
      name: {
        value: "Vasya",
        enumerable: true,
        writable: true,
      },
      age: {
        value: 30,
        enumerable: true,
        writable: true,
      },
      born: {
        get() {
          return new Date().getFullYear() - this.age;
        },
      },
    }
  );

  console.log(people.born);
  const jsObjectCreateGet = document.getElementById("jsObjectCreateGet");
  jsObjectCreateGet.textContent = `1992`;
}

// CreateSet
export function objectCreateSet() {
  const people = Object.create(
    {},
    {
      name: {
        value: "Vasya",
        enumerable: true,
      },
      age: {
        value: 30,
        enumerable: true,
      },
      born: {
        get() {
          return new Date().getFullYear() - this.age;
        },
        set(value) {
          console.log("Born", value);
        },
      },
    }
  );
  people.born = 1990;
  console.log(people.born);
  const jsObjectCreateSet = document.getElementById("jsObjectCreateSet");
  jsObjectCreateSet.innerHTML = "Born 1990   <br />   1992";
}
