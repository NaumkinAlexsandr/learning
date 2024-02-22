export const thenResolveConst: string = `
const promise = new Promise((resolve, reject) => resolve()).then(
    console.log("Success!")
);
`;

export const thenRejectConst: string = `
const promise = new Promise((resolve, reject) => reject()).then(
    console.log("Error!")
);
`;

export const thenCatchConst: string = `
const promise = new Promise((resolve, reject) =>
    reject(new Error("New Error!"))
).catch(console.log);
`;

export const thenFinallyConst: string = `
const promise = new Promise((resolve, reject) => resolve())
    .then(console.log("Success!"))
    .finally(console.log("Promise completed successfully!"));
`;

export const chainPromiseConst: string = `
step1() 
    .then(step2)
    .then(step3)
    ...
`;

export const chainPromisConst: string = `
new Promise((resolve, reject) => {
    setTimeout(() => resolve("ok"), 1000);
})
    .then((value) => value + " first then ")
    .then((value) => value + " second then ")
    .then((value) => console.log(value));
`;

export const chainPromisTwoConst: string = `
new Promise(function (resolve, reject) {
    setTimeout(() => resolve(5), 1000);
})
    .then(function (result) {
        console.log(result);
        return result * 2;
    })
    .then(function (result) {
        console.log(result);
        return result * 2;
    })
    .then(function (result) {
        console.log(result);
        return result * 2;
    });
`;

export const promiseAllConst: string = `
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The first promise has resolved");
        resolve(10);
    }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The second promise has resolved");
        resolve(20);
    }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The third promise has resolved");
        resolve(30);
    }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
    const total = results.reduce((p, c) => p + c);

    console.log(\`Results: \${results}\`);
    console.log(\`Total: \${total}\`);
});
`;

export const promiseAllSettledConst: string = `
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The first promise has resolved");
        resolve(10);
    }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The second promise has rejected");
        reject(20);
    }, 2 * 1000);
});

Promise.allSettled([p1, p2]).then((result) => {
    console.log(result);
});
`;

export const promiseRaceConst: string = `
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The first promise has resolved");
        resolve(10);
    }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The second promise has rejected");
        resolve(20);
    }, 2 * 1000);
});

Promise.race([p1, p2])
    .then((value) => console.log(\`Resolved: \${value}\`))
    .catch((reason) => console.log(\`Rejected: \${reason}\`));
`;

export const promiseAnyConst: string = `
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 1 fulfilled");
        resolve(1);
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 fulfilled");
        resolve(2);
    }, 2000);
});

const p = Promise.any([p1, p2]);
p.then((value) => {
    console.log("Returned Promise");
    console.log(value);
});
`;
