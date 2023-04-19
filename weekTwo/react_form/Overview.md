### 2023年04月12日（水）
---
## **Topics to Cover**
- Synthetic Events === Event Listeners
- Building a form
- Form + State go on date
- State Separated vs State Together

### **Event Handler**
Writing the code inline like this...

    return (
        <div>
            <button onClick={ () => alert("This button has been clocked) }>Click Me</button>
        </div>
    )
... can be written also like this...

    const handleClick = () => {
        alert("This button has been clicked!")
    }
    
    return (
        <div>
            <button onClick={ handleClick }>Click Me</button>
        </div>
    )
The first option is an anonymous function where it only runs the `alert` function when the button is clicked. The second event is where we create our own function—`handleClick`—to complete the same synthetic event.

### **Building a Form**
- Discussed two ways to handle state (and i found the 2nd method to be the most efficient)
