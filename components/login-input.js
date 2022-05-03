import Router from 'next/router'
import React, {useState} from 'react'



export default function LoginInput({setTokenOffice, tokenOffice, setIsLoginOffice, isLoginOffice}){

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    
    function handleOnChange(e) {
        
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
        
    }

    async function onSubmit(e) {
        e.preventDefault()
        try {
            let option = {
                method: 'POST',
                body: JSON.stringify(login),
                headers: {
                    "content-type": "application/json"
                }
            }

            let res = await fetch('http://localhost:8080/offices/login', option)
            let json = await res.json();
            
            if(!res.ok) throw {error: json.error}

            setTokenOffice(json.data.token)
            setIsLoginOffice(true)
            console.log(tokenOffice);
            window.localStorage.setItem('token', tokenOffice)
            Router.push('offices/home')
        } catch (error) {
            console.log(error.error);
        }
     }
    


    return (
        <>
        <section className="input-login">
            <h3>Welcome to Arquitetch</h3>
            <p>Login</p>
            <form onSubmit={onSubmit} className="form-login" id="login">
                <label>Email
                    <input onChange={handleOnChange} name="email" type="email"/>
                </label>
                <label>Password
                    <input onChange={handleOnChange} name="password" type="password"/>
                </label>
                <input className="btn-login" type="submit" value="Login"/>
            </form>
        </section>
        </>
    )
}