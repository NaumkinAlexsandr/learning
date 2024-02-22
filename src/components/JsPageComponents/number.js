export function randomFunc() {
  let random = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const result = random(1, 10);
  console.log(result);
  const jsRandom = document.getElementById("jsRandom");
  jsRandom.textContent = `Random number: ${result}`;
}

export function randomFunc2() {
  const secondArray = [1, 50, 2, 5, 7, 10, 33, 22, 77];
  const random = Math.floor(Math.random() * secondArray.length);
  const randomNumb = secondArray[random];
  console.log(randomNumb);
  const jsRandom2 = document.getElementById("jsRandom2");
  jsRandom2.textContent = `Random number: ${randomNumb}`;
}
