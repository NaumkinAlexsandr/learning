// Set
export function newSet() {
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
  function unique(fruits) {
    return Array.from(new Set(fruits));
  }
  console.log(unique(fruits));
  const jsSet = document.getElementById("jsSet");
  jsSet.textContent = `['banana', 'apple', 'orange', 'watermelon', 'grape']`;
}
