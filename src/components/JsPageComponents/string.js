export function strMatch() {
  let text = "We will, we will rock you.";
  const regex = /[A-Z]/g;
  const regex2 = /[i]/g;
  console.log(text.match(regex));
  console.log(text.match(regex2));
  const jsstrMatch = document.getElementById("jsstrMatch");
  jsstrMatch.innerHTML = "['W'] <br/> ['i', 'i']";
}

export function strMatchAll() {
  let text = "We will, we will rock you.";
  const regex = /wi/g;
  const array = [...text.matchAll(regex)];
  console.log(array);
  const jsstrMatchAll = document.getElementById("jsstrMatchAll");
  jsstrMatchAll.innerHTML = `(2) [Array(1), Array(1) <br/>
  0  :   ['wi', index: 3, ...]<br/>
  1  :   ['wi', index: 12, ...]<br/>
  length: 2
`;
}
