
## **React.js Exam Paper**

### **Section A: MCQs (Each question = 1 marks)**

1. **What is the main purpose of React Context?**
   
   A) For routing between pages
   
   B) For managing component state locally
   
   C) For passing data through the component tree without props
   
   D) For optimizing rendering performance

2. **Which of the following creates a context in React?**
   
   A) `React.makeContext()`
   
   B) `React.createContext()`
   
   C) `new ReactContext()`
   
   D) `useContext()`

3. **What does the `Context.Provider` do?**
   
   A) Consumes the context value
   
   B) Creates a new context
   
   C) Provides a value to all child components
   
   D) Updates component state

4. **Which hook is used to access context value in a functional component?**
   
   A) `useState`
   
   B) `useEffect`
   
   C) `useRef`
   
   D) `useContext`

5. **What is the main goal of code-splitting in React?**
   
   A) To increase bundle size
   
   B) To improve performance by lazy-loading code
   
   C) To remove unused components
   
   D) To enhance routing

6. **Which React feature allows you to lazy load components?**
   
   A) `React.memo`
   
   B) `React.lazy`
   
   C) `React.defer`
   
   D) `React.async`

7. **What must you wrap a lazy-loaded component with?**
   
   A) `<StrictMode>`
   
   B) `<Router>`
   
   C) `<Suspense>`
   
   D) `<Provider>`

8. **Which hook is used to manage local component state?**
   
   A) `useState`
   
   B) `useEffect`
   
   C) `useRef`
   
   D) `useReducer`

9. **Which hook runs side effects like fetching data?**
   
   A) `useData`
   
   B) `useState`
   
   C) `useEffect`
   
   D) `useFetch`

10. **Which of the following is NOT a rule of hooks?**
   
    A) Call hooks only inside React functions
   
    B) Call hooks conditionally
   
    C) Call hooks at the top level
   
    D) Never call hooks inside loops

11. **What does the `Context.Consumer` component do?**

    A) Provides a new context value
    
    B) Reads the current context value
    
    C) Updates the provider value
    
    D) Creates a new Provider

12. **What is the main difference between controlled and uncontrolled components in React?**

    A) Controlled components store form data in the DOM, uncontrolled store it in state

    B) Controlled components store form data in React state, uncontrolled use the DOM

    C) Both store data in React state

    D) Both store data in the DOM

13. **Which of the following is a **valid reason** to use Context?**
    
    A) To avoid prop drilling
    
    B) To replace Redux entirely
    
    C) To update the DOM manually
    
    D) To store component styles

14. **What happens if you try to use `useContext()` outside a `Context.Provider`?**
    
    A) It throws an error   
    
    B) It returns `undefined`
    
    C) It returns the default context value
    
    D) It returns an empty object

15. **In **React.lazy**, which import syntax is used?**

    A) `React.lazy(() => import('Component'))`
    
    B) `React.lazy('Component')`
    
    C) `React.import('Component')`
    
    D) `React.load(() => Component)`

16. **In route-based code splitting, where do you usually use `React.lazy` and `Suspense`?**

    A) Inside route definitions
    
    B) Inside `index.html`
    
    C) Only in Redux store
    
    D) Only in class components

17. **In a **controlled component**, the input value is controlled by:**
    
    A) DOM itself
    
    B) React state
    
    C) Context API
    
    D) Local storage

18. **In an **uncontrolled component**, which prop is used to access input values?**
    
    A) `onChange`
    
    B) `value`
    
    C) `defaultValue` or `ref`
    
    D) `context`

19. **Why is the **key prop** important when rendering lists in React?**
    
    A) To apply CSS styling
    
    B) To uniquely identify elements and improve performance
    
    C) To define routing paths
    
    D) To link with Context

22. **Which React hook allows you to directly access a DOM element?**

    A) useEffect()
    
    B) useRef()

    C) useState()
    
    D) useMemo()

---

## Task:1 
#### Create a controlled input form that shows the user input below the text field after submission.

### Output:
```
Enter Name: [Tanvi]
Submitted Name: Tanvi
```

## Task: 2

#### Lazy load a component called Dashboard using React.lazy and Suspense.
#### Display “Loading Dashboard…” while loading.

### Output:
```
Loading Dashboard...
```
### (Then after a moment)
```
Welcome to Dashboard Page!
```