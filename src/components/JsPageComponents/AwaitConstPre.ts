export const asyncConst: string = `
async function number() {
    return 1;
}
number().then(console.log);
`;

export const AwaitConst: string = `
async function hi() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello World!"), 1000);
    });
    let result = await promise;
    console.log(result);
}
hi();
`;

export const errorConst: string = `
async function getUser(userId) {
    try {
        const user = await Promise.reject(new Error("Invalid User Id"));
    } catch (error) {
        console.log(error);
    }
}
getUser();
`;

export const promiseConst: string = `
const delay = (ms) => {
    return new Promise((res) => setTimeout(() => res(), ms));
};
const user = 'https://jsonplaceholder.typicode.com/users';
function fetchUsers() {
    return delay(1000)
        .then(() => {
            return fetch(user);
        })
        .then((response) => response.json());
}
fetchUsers()
    .then((data) => {
        console.log('Data:', data);
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('Promise completed successfully'));
`;

export const asyncTwoConst: string = `
const delay = (ms) => {
    return new Promise((res) => setTimeout(() => res(), ms));
};
const user = 'https://jsonplaceholder.typicode.com/users';
async function fetchAsyncUsers() {
    try {
        await delay(1000);
        const response = await fetch(user);
        const data = await response.json();
        console.log('Data:', data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Promise completed successfully');
    }
}
fetchAsyncUsers();
`;
