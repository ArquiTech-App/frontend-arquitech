import React from 'react'
import {useForm} from 'react-hook-form'
import Router from 'next/router'


export default function CardInputRestartPassword({token}) {

    const {register, handleSubmit, formState: {errors}} = useForm();
    
    async function onSubmit(data){
        let options = {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }
        try {
            let res = await fetch(`https://ec2-54-227-138-69.compute-1.amazonaws.com/pass/restartPassword?token=${token}`, options);
            let json = await res.json();
            if(!res.ok) throw {error: json.message}
            Router.push('../login')
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }
  return (


    <div className="card-restart-password">
        <h3>Bienvenido a Arquitetch</h3>
        <p>Ingresa tu contraseña</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
            Password:
            <input {...register('newPassword', {required: true})} type="password"/>
            {errors.newPassword?.type === 'required' && <p>El password es requerido.</p>}
            </label>
            <label>
            Confirma tu password:
            <input {...register('confirmPassword', {required: true})} type="password"/>
            {errors.confirmPassword?.type === 'required' && <p>El apellido es requerido.</p>}
            </label>
            <input className="btn-enviar" type="submit"/>
        </form>
    </div>
  )
}
