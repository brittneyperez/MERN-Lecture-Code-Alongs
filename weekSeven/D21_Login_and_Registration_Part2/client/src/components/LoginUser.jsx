import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const LoginUser = () => {
    
    const navigate = useNavigate()
    const [ userLogin, setUserLogin ] = useState({
        email: "",
        password: ""
    })
    
    const changeHandler = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
    }
    const loginHandler = (e) => {
        e.preventDefault()
        
        // ! withCrendentials ensures that the cookie is sent from the server to client, and vice versa.
        axios.post('http://localhost:8000/api/login', userLogin, { withCredentials: true })
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
            <form onSubmit={ loginHandler }>
                <h2>Welcome Back!</h2>
                
                <div>
                    <div>
                        <label>Email:</label>
                    </div>
                    <div>
                        <input type="text" name="email" value={ userLogin.email } onChange={ changeHandler } />
                    </div>
                </div>
                
                <div>
                    <div>
                        <label>Password:</label>
                    </div>
                    <div>
                        <input type="password" name="password" value={ userLogin.password } onChange={ changeHandler } />
                    </div>
                </div>
                
                <div>
                    <input type="submit" value="Login" />
                </div>
                
            </form>
            <Link to={'/'}>Don't have an account? Click here to sign up!</Link>
        </div>
    )
}

export default LoginUser