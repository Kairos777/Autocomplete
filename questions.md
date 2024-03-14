1 Components and PureComponents both serve as building blocks in react applications, the difference between them is that Component does not implement by defautl shouldComponentUpdate(), Pure component implement it by using shallow comparison (it does not return true if nested objects were changed, relating to objects, this algo compares only references). This can be beneficial for performance optimization, especially in larger applications where unnecessary re-renders can impact performance.
Shallow comparison might break your app is when dealing with complex data structures or nested objects and lead to unexpected behavior... 

---
2 Context provides a way to pass data through the component tree without having to props drill. However, using ShouldComponentUpdate to optimize rendering based on context changes can lead to unpredictable behavior.
I don't remember for sure, but it might lead to incorrect rendering decisions, especially if the context changes frequently. This leading to performance issues and bugs that are hard to solve.

---
3
- pass callback as prop from parent to child, then call it with data in the child component <br />
- Context or actions of Context based libraries <br />
- ref passed to the child component <br />
---
4 
- implementation of shouldComponentUpdate <br />
- useMemo/useCallback <br />

---
5
 <></> Fragment is a solution when we need to return more than one element in the component and we don't want to use divs and don't want to make html structure hard to read.
React functions are still js functions which can return only one thing. For this purpose we need React fragment. 
An example where fragments might break your app is when using third-party libraries that expect and rely on parent element. Since fragments don't create a DOM node of their own, they might not be recognized as a valid parent element by such libraries, leading to errors. In such cases, you might use usual wrappers.

---
6 
- Authentication HOC: A HOC that wraps a component and checks whether the user is authenticated before rendering the component. <br />
- Redux connect <br />
- withTheme <br />
---
7
- Promises: Errors in promises can be caught using the .catch() method or by chaining a .then() method with a second callback for error handling. Errors in promises propagate down to .catch() block. <br />
- Callbacks: I almost don't remember. By passing two separate callbacks to asynchronous functions: one for success and one for error <br />
- Async/await: Errors in async functions can be caught using try/catch blocks. <br />

---
8 setState in React takes two arguments: an updater function or an object containing the new state, and an optional callback function that is executed once setState is completed and the component is re-rendered. This way we can be sure, that we rely on the updated state. setState is asynchronous because Raect batches multiple setState calls for performance optimization. This batching process ensures that multiple consecutive setState calls within the same synchronous execution context are grouped together and only trigger a single re-render, improving performance by avoiding unnecessary intermediate renders.

---
9 Steps to migrate a class component to a function component: <br />
- Convert lifecycle methods to useEffect. <br />
- Replace this.state with useState. <br />
- Convert class methods to regular functions. <br />
- Carefully migrate functionality where force update was used since new Functional component does not support such unique mechanic. <br />
---

10 

- inline styles <br />
- styled components <br />
- global (ex: App.css) or vice versa module level css (isolated by hashes) <br />
- sass/less/scss... <br />
- 3rd party libraries like tailwind and others <br />
---
11 All incoming data will be wrapped as strings by React as a default protection. Rendering HTML strings from the server can be done using dangerousHTML attribute in React. However, it's important to be cautious when using this approach as we bypasses React's built-in XSS protection and can expose our application to security vulnerabilities if not used carefully. We need to sanitize such HTML string before passing it to dangerousHTML.

