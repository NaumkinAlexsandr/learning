export const timerFunctionConst: string = `
function timerFunction() {
    console.log('Execution of a function setTimeout');
}
setTimeout(timerFunction, 3000);
`;

export const functionSetIntervalConst: string = `
function updateTime() {
    const time = new Date().toTimeString();
    console.log(time);
}
setInterval(updateTime, 1000);
`;

export const functionAnimationFrameConst: string = `
let square = document.getElementById("rect");
let angle = 0;
function rotate() {
    angle = (angle + 2) % 360;
    square.style.transform = "rotate(" + angle + "deg)";
    window.requestAnimationFrame(rotate);
}
let id = window.requestAnimationFrame(rotate);
`;

export const syncConst: string = `
const second = () => {
    console.log('Section 2');
}
const first = () => {
    console.log('Section 1');
    second();
    console.log('Section 3');
}
first();
    
Section 1
Section 2
Section 3
`;

export const asyncConst: string = `
const funcAsync = () => {
    setTimeout(() => {
        console.log('Section 2');
    }, 2000);
};
console.log('Section 1');
funcAsync();
console.log('Section 3');
    
Section 1
Section 3
Section 2
`;
