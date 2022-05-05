import React, {useState} from 'react'
import {useForm} from 'react-hook-form'



export default function LoginInput({setTokenOffice, tokenOffice, setIsLoginOffice, isLoginOffice, errorC, setErrorC, setModalShow, setMessageModal, setTitleModal, setSuccess}){

    const {register, handleSubmit, formState: {errors}} = useForm()
   
    
   

    async function onSubmit(data) {
        
        try {
            let option = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "content-type": "application/json"
                }
            }

            let res = await fetch('http://localhost:8080/offices/login', option)
            let json = await res.json();
            
            if(!res.ok) throw {error: json.error, message: json.message}

            setTokenOffice(json.data.token)
            setIsLoginOffice(true)
            console.log(tokenOffice);
            window.localStorage.setItem('token', json.data.token)
            setTitleModal(`Bienvenido ${data.email}`)
            setMessageModal(json.message)
            setSuccess(true)
            setModalShow(true)
        } catch (error) {
            setTitleModal('Error')
            setMessageModal(error.message)
            setErrorC(error.error)
            setModalShow(true)
        }
     }
    


    return (
        <>
        <section className="input-login">
            <h3>Welcome to Arquitetch</h3>
            <p>Login</p>
            <form onSubmit={handleSubmit(onSubmit)} className="form-login" id="login">
                <label>Email:
                    <input {...register("email", {required: true})} type="email"/>
                    {errors.email?.type === 'required' && <p>El email es requerido.</p>}
                </label>
                <label>Password:
                    <input {...register("password", {required: true})}  type="password"/>
                    {errors.password?.type === 'required' && <p>El password es requerido.</p>}
                </label>
                <input className="btn-login" type="submit" value="Login"/>
            </form>
        </section>
        </>
    )
}