import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import ModalError from '../components/ModalError'


export default function InputCreateAccount({errorC, setErrorC, setModalShow, setMessageModal, setTitleModal, setSuccess }) {
    
   
    const {register, handleSubmit, formState: {errors}} = useForm(); 

    
    async function createAccount(data){
        
        try {
            let options = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { "content-type": "application/json" }
               
            }
            
            let res = await fetch('http://localhost:8080/offices/createAccount', options)
            let json = await res.json()
            
            if(!res.ok) throw {error: json.error, message: json.message}
            setTitleModal(`Exito al crear ${data.name}`)
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
            <p>Crear cuenta</p>
            <form onSubmit={handleSubmit(createAccount)} className="form-login" id="login">
                <label>Nombre Compañia:
                    <input {...register("name", {required: true})} />
                    {errors.name?.type === 'required' && <p>El nombre de la Compañia es requerido.</p>}
                </label>
                <label>dirección:
                    <input {...register("address", {required: true})}/>
                    {errors.address?.type === 'required' && <p>La dirección es requerida.</p>}
                </label>
                <label>Email:
                    <input {...register("email", {required: true})} type="email"/>
                    {errors.email?.type === 'required' && <p>El email es requerido.</p>}
                </label>
                <label>Password:
                    <input {...register("password", {required: true})} type="password"/>
                    {errors.password?.type === 'required' && <p>El password es requerido.</p>}
                </label>
                <input className="btn-login" type="submit" value="Crear Cuenta"/>
            </form>
            
        
        </section>
        </>
  )
}
