export const matches = `
const element = document.querySelectorAll('.first__div');
for (let el of element) { 
    if(el.matches('[class$="first__div_red"]')) { 
        console.log('Red'); 
    } else if(el.matches('[class$="first__div_blue"]')) { 
        console.log('Blue'); 
    } 
}

`;

export const changeStyle = `
function changeStyle() {
    const element = document.getElementById("style-text");
    element.style.color = "lightblue";
    element.style.fontSize = "26px";
    element.innerHTML = "Конечный текст.";
}
`;

export function changeStyleFn(): void {
  const element: HTMLElement | null = document.getElementById("style-text");
  if (element) {
    element.style.color = "lightblue";
    element.style.fontSize = "26px";
    element.innerHTML = "Конечный текст.";
  }
}

export const getComputedStyle = `
function getStyle() {
  const element1 = document.querySelector('.getStyle');
  const element2 = document.querySelector('.getStyle1');
  const el1 = getComputedStyle(element1);
  element2.innerHTML =
    \`font-size: \` +  el1.fontSize +  " " +
    \`color: \` +  el1.color +  " " +
    \`margin: \` +  el1.margin;}

`;

export const changeAttribute = `
function changeAttribute() {
  const element = document.getElementById('attribute-text');
  element.setAttribute('class', 'text');
  element.innerHTML =
    \`hasAttribute('id'): \` +
    element.hasAttribute("id") +
    "; " +
    \`getAttribute('id'): \` +
    element.getAttribute("id") +
    "; " +
    \`hasAttribute('class'): \` +
    element.hasAttribute("class") +
    "; ";
}
`;

export const addElemets = `
function addElemets() {
  list_ol.before('before'); // вставить строку "before" перед <ol>
  list_ol.after('after'); // вставить строку "after" после <ol>
  let liFirst = document.createElement('li');
  liFirst.innerHTML = 'prepend';
  list_ol.prepend(liFirst); // вставить liFirst в начало <ol>
  let liLast = document.createElement('li');
  liLast.innerHTML = 'append';
  list_ol.append(liLast); // вставить liLast в конец <ol>
}
`;

export const listener = `
const firstElement = document.querySelector('.firstElement');
const secondElement = document.querySelector('.secondElement');
firstElement.addEventListener('mouseover', function () {
  secondElement.style.display = 'block';
});
firstElement.addEventListener('mouseout', function () {
  secondElement.style.display = 'none';
});

`;

export const target = `
const form = document.querySelector('.second_form');
form.onclick = function (event) {
  alert('target = ' + event.target.tagName + ', this=' + this.tagName);
};
`;
