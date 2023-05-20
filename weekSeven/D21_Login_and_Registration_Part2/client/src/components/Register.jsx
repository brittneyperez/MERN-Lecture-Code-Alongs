import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Register = () => {
    
    const navigate = useNavigate()
    const [ user, setUser ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        
        // ! withCrendentials ensures that the cookie is sent from the server to client, and vice versa.
        axios.post('http://localhost:8000/api/register', user, { withCredentials: true })
            .then((res) => {
                console.log(res)
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    
    return (
        <div>
            <form onSubmit={ submitHandler }>
                <h2>New Here? Register</h2>
                <div>
                    <div>
                        <label>First Name:</label>
                    </div>
                    <div>
                        <input type="text" name="firstName" value={ user.firstName } onChange={ changeHandler } />
                    </div>
                </div>
                
                <div>
                    <div>
                        <label>Last Name:</label>
                    </div>
                    <div>
                        <input type="text" name="lastName" value={ user.lastName } onChange={ changeHandler } />
                    </div>
                </div>
                
                <div>
                    <div>
                        <label>Email:</label>
                    </div>
                    <div>
                        <input type="text" name="email" value={ user.email } onChange={ changeHandler } />
                    </div>
                </div>
                
                <div>
                    <div>
                        <label>Password:</label>
                    </div>
                    <div>
                        <input type="password" name="password" value={ user.password } onChange={ changeHandler } />
                    </div>
                </div>
                
                <div>
                    <div>
                        <label>Confirm Password:</label>
                    </div>
                    <div>
                        <input type="password" name="confirmPassword" value={ user.confirmPassword } onChange={ changeHandler } />
                    </div>
                </div>
                
                <div>
                    <input type="submit" value="Register" />
                </div>
                
            </form>
            <Link to={'/login'}>Already have an account?</Link>
        </div>
    )
}

export default Register