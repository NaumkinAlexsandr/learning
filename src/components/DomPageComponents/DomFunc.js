export function changeStyleFn() {
  const element = document.getElementById("style-text");
  element.style.color = "lightblue";
  element.style.fontSize = "24px";
  element.innerHTML = "Конечный текст";
}

export function getStyle() {
  const element1 = document.querySelector(".getStyle");
  const element2 = document.querySelector(".getStyle1");
  const el1 = getComputedStyle(element1);
  element2.innerHTML =
    `font-size: ` +
    el1.fontSize +
    " " +
    `color: ` +
    el1.color +
    " " +
    `margin: ` +
    el1.margin;
}

export function changeAttributeFn() {
  const element = document.getElementById("attribute-text");
  element.setAttribute("class", "text");
  element.innerHTML =
    `hasAttribute('id'): ` +
    element.hasAttribute("id") +
    "; " +
    `getAttribute('id'): ` +
    element.getAttribute("id") +
    "; " +
    `hasAttribute('class'): ` +
    element.hasAttribute("class") +
    "; ";
}

export function addElemetsFn() {
  list_ol.before("before");
  list_ol.after("after");
  let liFirst = document.createElement("li");
  liFirst.innerHTML = "prepend";
  list_ol.prepend(liFirst);
  let liLast = document.createElement("li");
  liLast.innerHTML = "append";
  list_ol.append(liLast);
}

export function listenerFn() {
  const firstElement = document.querySelector(".firstElement");
  const secondElement = document.querySelector(".secondElement");
  firstElement.addEventListener("mouseover", function () {
    secondElement.style.display = "block";
  });
  firstElement.addEventListener("mouseout", function () {
    secondElement.style.display = "none";
  });
}
export function listenerFn2() {
  const form = document.querySelector(".second_form");
  form.onclick = function (event) {
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
  };
}
