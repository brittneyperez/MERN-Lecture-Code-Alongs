### ２０２３年０４月２５日
ーーー
### Recap
- APIs
- `useEffect`

## **Topics to Cover**
- JavaScript Promises
- Axios
    - install Axios
    - `useEffect` Axios

### Notes
A **Hook** is a set of tools in React that allows us to do certain things (e.g., `useState` and `useEffect`). By no means does `useEffect` have to be paired with an API. If we want to use it separately for something else. 
-  If the the **[ ]** is empty, then `useEffect` will run upon the component being mounted.
- If a variable is placed within the **[ ]** (e.g., `[count]` in the "Click Me" Button example), then only when that element has been interacted with where the variable is called, will `useEffect` run. 

We use **`axios`** over **`fetch`** because not only is it a more concise method of gathering data, but by using `get` it is enough to JSONify and do all the other steps and promises that `fetch` requires us to do to get a `response`.

Usually, `.then()` will be used to get a `response` while `.catch()` is used only once to get an error. Similar to a `catchAll`.

_React will never break a promise._

## Notes on Components
In the component file, `PokemonForm.jsx`, I attempted to write an API call that will request the a Pokémon's name along with there coresponding number and sprite. This was in preparation for an upcoming assignment using `axios`.

