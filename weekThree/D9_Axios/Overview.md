### ２０２３年０４月２０日（木）
---
## **Recap**
- **Lifted State**:
    - needed bc `useState` cannot be shared between sibling components on their own unless there is a parent; so by using the **lifted state** we can access those sibling components
- `useEffect`
    - a way to run code over and over again whenever a condition is met. In the presence of an empty **[ ]**, aka the **dependency array**, the code runs _only_ when it is first mounted.
    - a condition/value can be placed in the **[ ]**. It will only rerun when a change has occurred. (e.g., everytime we click a button to increase the `count`, the `useEffect` function will run to let us know that a change was made—the value has been incremented)

## **Topics to Cover**
- Intro to APIs
- Postman
- Using `useEffect` with APIs 


### **APIs**
APIs, aka **A**pplication **P**rogramming **I**nterface are a way of grabbing information from another source (**`request`**) to be implemented into our app (**`response`**).