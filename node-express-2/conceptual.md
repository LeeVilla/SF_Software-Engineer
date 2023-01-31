### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  `JSON Web Token commonly used for authorization purposes`
- What is the signature portion of the JWT? What does it do?
  `used to verify the authenticity, hashed value generated using a secret key`
- If a JWT is intercepted, can the attacker see what's inside the payload?
  `The attacker can see contents unless encryption is used.`
- How can you implement authentication with a JWT? Describe how it works at a high level.
  `With JWT, it's possible to have stateless authentication where the server doesn't need to maintain any user session data, as the JWT tracks the user's session.`\
- Compare and contrast unit, integration and end-to-end tests.
  `Unit tests are individual tests, Integration tests are used to test how different parts of an application work together, End-to-end tests are used to test the entire application as a whole, simulating real-world scenarios `
- What is a mock? What are some things you would mock?
  `fake implementation of component or object.`
- What is continuous integration?
  `development practice where developers regularly merge their code changes into a single codebase`
- What is an environment variable and what are they used for?
  `Environment variables provide a way for applications to access configuration information that can vary between different environments, such as development, staging, or production. This lets the same code to be used in different environments without having to modify it.`
- What is TDD? What are some benefits and drawbacks?
  `Test Driven Development = practice of writing test before code is written. `
- What is the value of using JSONSchema for validation?
  `JSONschema provides consistency and improved data quality as it ensures the data conforms to the expected structure. easier error handling.`
- What are some ways to decide which code to test?
```testing with a focus for high risk areas or areas most used by the user are some common methods to approach testing```
- What does `RETURNING` do in SQL? When would you use it?
```when INSERT, UPDATE, OR DELETE are used, RETURNING clause returns the values of the affected rows```
- What are some differences between Web Sockets and HTTP?
```Web Sockets and HTTP are protocols for communication on the web. HTTP is good for simple and stateless communication, while Web Sockets are better for real-time communication with less delay.```
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
```I prefer express over Flask for its flexibility and minimalist approach to web development. Express also has a larger community and more resources available.```