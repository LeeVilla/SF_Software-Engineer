### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  `using callback functions, promises, and async/await are all ways to manage astnchronous code`
- What is a Promise?
  `Promises: An object that represents a value that may not yet be available, with methods to handle a successful or failed outcome.`
- What are the differences between an async function and a regular function?
```asynchronous function returns immediately, allowing the program to continue execution while results generate in the background. a standard function halts execution until a result has returned```
- What is the difference between Node.js and Express.js?
```Node.js is allows for server side javascript. express is a framework used for Node.js.```
- What is the error-first callback pattern?
```takes an error as the first argument and returns the result in subsequent arguments```
- What is middleware?
```function of software that operates in between the request and response ```
- What does the `next` function do?
```used to pass to the next middleware function```
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```the requests are being sent individually and would be faster if Promise.all was used.```

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```
