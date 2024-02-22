// map set
export function newMapSet() {
  const map = new Map();
  map.set("firstName", "Alex");
  map.set("age", "26");
  console.log(map);
  const jsMapSet = document.getElementById("jsMapSet");
  jsMapSet.textContent = `Map(2) {'firstName' => 'Alex', 'age' => '26'}`;
}

// map get
export function newMapGet() {
  const map = new Map();
  map.set("firstName", "Alex");
  map.set("age", "26");
  console.log(map.get("firstName"));
  console.log(map.get("age"));
  const jsMapGet = document.getElementById("jsMapGet");
  jsMapGet.innerHTML = `Alex <br /> 26`;
}

// map has
export function newMapHas() {
  const map = new Map();
  map.set("firstName", "Alex");
  map.set("age", "26");
  console.log(map.has("firstName"));
  console.log(map.has("age"));
  console.log(map.has("lastname"));
  const jsMapHas = document.getElementById("jsMapHas");
  jsMapHas.innerHTML = `true <br /> true <br /> false`;
}

// map delete
export function newMapDelete() {
  const map = new Map();
  map.set("firstName", "Alex");
  map.set("age", "26");
  map.delete("firstName");
  console.log(map.has("firstName"));
  console.log(map);
  const jsMapDelete = document.getElementById("jsMapDelete");
  jsMapDelete.innerHTML = `false <br /> Map(1) {'age' => '26'}`;
}

// map clear
export function newMapClear() {
  const map = new Map();
  map.set("firstName", "Alex");
  map.set("age", "26");
  map.clear();
  console.log(map);
  const jsMapClear = document.getElementById("jsMapClear");
  jsMapClear.textContent = `Map(0) {size: 0}`;
}

// map size
export function newMapSize() {
  const map = new Map();
  map.set("firstName", "Alex");
  map.set("age", "26");
  console.log(map.size);
  const jsMapSize = document.getElementById("jsMapSize");
  jsMapSize.textContent = `2`;
}

//  map keys
export function newMapKey() {
  const map = new Map([
    ["firstName", "Alex"],
    ["lastName", "Ivanov"],
    ["age", "26"],
  ]);
  console.log(map.keys());
  const jsMapKey = document.getElementById("jsMapKey");
  jsMapKey.textContent = `MapIterator {'firstName', 'lastName', 'age'}`;
}

// map values
export function newMapValues() {
  const map = new Map([
    ["firstName", "Alex"],
    ["lastName", "Ivanov"],
    ["age", "26"],
  ]);
  console.log(map.values());
  const jsMapValues = document.getElementById("jsMapValues");
  jsMapValues.textContent = `MapIterator {'Alex', 'Ivanov', '26'}`;
}

// map entries
export function newMapEntries() {
  const map = new Map([
    ["firstName", "Alex"],
    ["lastName", "Ivanov"],
    ["age", "26"],
  ]);
  console.log(map.entries());
  const jsMapEntries = document.getElementById("jsMapEntries");
  jsMapEntries.textContent = `MapIterator {'firstName' => 'Alex', 'lastName' => 'Ivanov', 'age' => '26'}`;
}

// map forEach
export function newMapForEach() {
  const map = new Map([
    ["firstName", "Alex"],
    ["lastName", "Ivanov"],
    ["age", "26"],
  ]);
  map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  const jsMapForEach = document.getElementById("jsMapForEach");
  jsMapForEach.innerHTML = `firstName: Alex <br />
   lastName: Ivanov<br />
   age: 26`;
}

// map forOf
export function newMapForOf() {
  const map = new Map([
    ["firstName", "Alex"],
    ["lastName", "Ivanov"],
    ["age", "26"],
  ]);
  for (const [value, key] of map) {
    console.log(`${key}: ${value}`);
  }
  const jsMapForOf = document.getElementById("jsMapForOf");
  jsMapForOf.innerHTML = `Alex: firstName <br />
   Ivanov: lastName <br />
   26: age`;
}
