// Promise resolve
export function thenResolve() {
  const promise = new Promise((resolve, reject) => resolve()).then(
    console.log("Success!")
  );
  const jsThenResolve = document.getElementById("jsThenResolve");
  jsThenResolve.textContent = `Success!`;
}

// Promise reject
export function thenReject() {
  const promise = new Promise((resolve, reject) => reject()).then(
    console.log("Error!")
  );
  const jsThenReject = document.getElementById("jsThenReject");
  jsThenReject.textContent = `Error!`;
}

// Promise catch
export function thenCatch() {
  const promise = new Promise((resolve, reject) =>
    reject(new Error("New Error!"))
  ).catch(console.log);
  const jsThenCatch = document.getElementById("jsThenCatch");
  jsThenCatch.textContent = `Error: New Error!`;
}

// Promise finally
export function thenFinally() {
  const promise = new Promise((resolve, reject) => resolve())
    .then(console.log("Success!"))
    .finally(console.log("Promise completed successfully!"));
  const jsThenFinally = document.getElementById("jsThenFinally");
  jsThenFinally.innerHTML = `Success! <br /> Promise completed successfully!`;
}

// chain Promis
export function chainPromis() {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("ok"), 1000);
  })
    .then((value) => value + " first then ")
    .then((value) => value + " second then ")
    .then((value) => console.log(value));
  const jsChainPromis = document.getElementById("jsChainPromis");
  jsChainPromis.textContent = `ok first then  second then `;
}

// chain Promis two
export function chainPromisTwo() {
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
  const jsChainPromisTwo = document.getElementById("jsChainPromisTwo");
  jsChainPromisTwo.innerHTML = `5  <br /> 10  <br /> 20`;
}

// Promise.all
export function promiseAll() {
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

    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);
  });
  const jspromiseAll = document.getElementById("jspromiseAll");
  jspromiseAll.innerHTML = `The first promise has resolved  <br /> 
  The second promise has resolved  <br /> 
  The third promise has resolved <br />
  Results: 10,20,30 <br />
  Total: 60`;
}

// Promise.allSettled
export function promiseAllSettled() {
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
  const jspromiseAllSettled = document.getElementById("jspromiseAllSettled");
  jspromiseAllSettled.innerHTML = `The first promise has resolved <br />
    The second promise has rejected <br />
    (2) [{…}, {…}]<br />
    0: {status: 'fulfilled', value: 10}<br />
    1: {status: 'rejected', reason: 20}`;
}

// Promise.race
export function promiseRace() {
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
    .then((value) => console.log(`Resolved: ${value}`))
    .catch((reason) => console.log(`Rejected: ${reason}`));
  const jspromiseRace = document.getElementById("jspromiseRace");
  jspromiseRace.innerHTML = `The first promise has resolved <br />
  Resolved: 10 <br />
  The second promise has rejected`;
}

// Promise.any
export function promiseAny() {
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
  const jspromiseAny = document.getElementById("jspromiseAny");
  jspromiseAny.innerHTML = `Promise 1 fulfilled<br />
  Returned Promise<br />
  1<br />
  Promise 2 fulfilled`;
}
