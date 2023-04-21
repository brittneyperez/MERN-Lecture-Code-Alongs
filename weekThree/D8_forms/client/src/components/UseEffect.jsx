import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    
    const [ count, setCount ] = useState(0)
    
    // useEffect(() => {
    //     console.log("useEffect is running")
    // }, []) 
    /* [] is the dependency array
    the empty [] only means that it just wants the function to run */
    
    useEffect(() => {
        console.log("We added to count")
        // ! DO NOT add setters here as it will break the code
    }, [count])
    /* if we want useEffect to take effect when clicking 
    the btn, we can write [count] in the []; now this 
    func is running w/ every click */
    
    /* 
    * we can have multiple useEffects 
    * this one alerts that the component's up 
    */
    useEffect(() => {
        console.log("We mounted the component")
    }, [])
    
    const incrementCount = () => {
        setCount(count + 1)
    }
    
    return (
        <div>
            <h1>useEfect</h1>
            <div>
                <p>{count}</p>
                <button onClick={ incrementCount } className="btn btn-outline-dark">Click Me</button>
            </div>
        </div>
    )
}

export default UseEffect