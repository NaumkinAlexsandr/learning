// async
export function async() {
  async function number() {
    return 1;
  }
  number().then(console.log);
  const jsasync = document.getElementById("jsasync");
  jsasync.textContent = `1`;
}

// Await
export function Await() {
  async function hi() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World!"), 1000);
    });
    let result = await promise;
    console.log(result);
  }
  hi();
  const jsawait = document.getElementById("jsawait");
  jsawait.textContent = `Hello World!`;
}

// error
export function error() {
  async function getUser(userId) {
    try {
      const user = await Promise.reject(new Error("Invalid User Id"));
    } catch (error) {
      console.log(error);
    }
  }
  getUser();
  const jserror = document.getElementById("jserror");
  jserror.textContent = `Error: Invalid User Id`;
}
