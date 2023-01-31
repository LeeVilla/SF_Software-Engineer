### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  `react is a javascript library used to build user interfaces. typically used for single page applications`
- What is Babel?
  `a javascript transpiler that converts javascript into ES5 javascript to run on older browsers`
- What is JSX?
  `a syntax etension to Javascript. used with react to describe what the UI should look like`
- How is a Component created in React?
  `Components can be made using CLASS and Functions.`
- What are some difference between state and props?
  `props get passed to the component (similar to function parameters) whereas state is managed within the component `
- What does "downward data flow" refer to in React?
  ` the idea that parent components pass data down to their children via props.`
- What is a controlled component?
  `data is handled by the component's state`
- What is an uncontrolled component?
  `components that are not controlled by the React state and are handled by the DOM. `
- What is the purpose of the `key` prop when rendering a list of components?
  `Key prop helps React identify which items have changed, are added, or are removed.`
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  `Using an array index as a key prop is not recommended because it can cause problems when changing the list. Use a unique identifier instead.`
- Describe useEffect. What use cases is it used for in React components?`
`you tell React that your component needs to do something after render`
- What does useRef do? Does a change to a ref value cause a rerender of a component?
` can be used to store data values like useState but does NOT cause rerender when values are changed`
- When would you use a ref? When wouldn't you use one?
`Refs should only be used when you need direct access to the DOM element. Do not use refs for anything that can be done with props`
- What is a custom hook in React? When would you want to write one?
