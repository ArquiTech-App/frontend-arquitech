import React, {useState} from 'react'
import Router from 'next/router'


export default function InputCreateAccount() {
    
   
    const [office, setOffice] = useState({
        name:'',
        address:'',
        email:'',
        password:''
    })    

    function handleOnChange(e){
        setOffice({
            ...office,
            [e.target.name]:e.target.value,
            

        })
        console.log(office);
    }
    async function createAccount(e){
        e.preventDefault()
        try {
            let options = {
                method: 'POST',
                body: JSON.stringify(office),
                headers: { "content-type": "application/json" }
               
            }
            console.log(JSON.stringify(office));
            let res = await fetch('http://localhost:8080/offices/createAccount', options)
            let json = await res.json()
            if(!res.ok) throw {error: json.error}
            Router.push('/login')
            
        } catch (error) {
            console.log(error.error);
        }
    }

  return (
    <>
        <section className="input-login">
            <h3>Welcome to Arquitetch</h3>
            <p>Crear cuenta</p>
            <form onSubmit={createAccount} className="form-login" id="login">
                <label>Nombre Compañia:
                    <input onChange={handleOnChange} name="name" type="name"/>
                </label>
                <label>dirección:
                    <input onChange={handleOnChange} name="address" type="address"/>
                </label>
                <label>Email:
                    <input onChange={handleOnChange} name="email" type="email"/>
                </label>
                <label>Password:
                    <input onChange={handleOnChange} name="password" type="password"/>
                </label>
                <input className="btn-login" type="submit" value="Crear Cuenta"/>
            </form>
        </section>
        </>
  )
}
