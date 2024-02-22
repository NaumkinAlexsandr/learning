// __proto__
export function objectProto() {
  const people = {
    eats: "vegetarian",
  };
  const masha = {
    sport: "tennis",
    __proto__: people,
  };
  console.log(masha.sport);
  console.log(masha.eats);
  const jsProto = document.getElementById("jsProto");
  jsProto.innerHTML = `tennis <br />  vegetarian`;
}

// Object.create
export function objectCreate() {
  const people = {
    eats: "vegetarian",
  };
  const masha = Object.create(people);
  console.log(Object.getPrototypeOf(masha) === people);
  console.log(masha);
  console.log(masha.eats);
  const jsObjectCreate = document.getElementById("jsObjectCreate");
  jsObjectCreate.innerHTML = `true <br />  {} <br />  vegetarian`;
}

// objectSet
export function objectSet() {
  const people = {
    eats: "vegetarian",
  };
  const masha = Object.create(people);
  Object.setPrototypeOf(masha, { sport: "tennis", __proto__: people });
  console.log(masha.sport);
  console.log(masha.eats);
  const jsObjectSet = document.getElementById("jsObjectSet");
  jsObjectSet.innerHTML = `tennis <br />  vegetarian`;
}

// objectGet
export function objectGet() {
  const people = {
    eats: "vegetarian",
  };
  const masha = Object.create(people);
  Object.setPrototypeOf(masha, { sport: "tennis", __proto__: people });
  console.log(Object.getPrototypeOf(masha));
  console.log(masha.sport);
  console.log(masha.eats);
  const jsObjectGet = document.getElementById("jsObjectGet");
  jsObjectGet.innerHTML = `{sport: 'tennis'} <br /> tennis <br />  vegetarian`;
}
