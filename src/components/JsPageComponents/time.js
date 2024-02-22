// setInterval
export function functionSetInterval() {
  function updateTime() {
    const jsSetInterval = document.getElementById("jsSetInterval");
    jsSetInterval.innerHTML = new Date().toTimeString();
  }
  setInterval(updateTime, 1000);
}

// requestAnimationFrame()
export function functionAnimationFrame() {
  let square = document.getElementById("rect");
  let angle = 0;
  function rotate() {
    angle = (angle + 2) % 360;
    square.style.transform = "rotate(" + angle + "deg)";
    window.requestAnimationFrame(rotate);
  }
  let id = window.requestAnimationFrame(rotate);
}
