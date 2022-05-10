import React, {useContext} from 'react'
import {useForm} from 'react-hook-form'
import OfficeContext  from '../context/officeContext';
import Router from 'next/router'


export default function CardClientInput() {

    const {tokenOffice, officeData} = useContext(OfficeContext);
    const {register, handleSubmit, formState: {errors}} = useForm();

   

    async function onSubmit(data){
        let office = officeData._id;
        data = {
            ...data, 
            "office": office
        }
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        try {
            
            let res = await fetch('https://ec2-54-227-138-69.compute-1.amazonaws.com/clients/createClient', options)
            let json = await res.json();

            
            if(!res.ok) throw {error: json}

            Router.push('offices/home')
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="card-client-container">
        <h3>Bienvenido a Arquitetch</h3>
            <p>Agrega tu Cliente</p>
        <form onSubmit={handleSubmit(onSubmit)} className="form-client">
            <label>
                Nombre del Cliente:
                <input {...register('name',{required: true})} type="name"/>
                {errors.name?.type === 'required' && <p>El nombre es requerido.</p>}
            </label>
            <label>
                Apellido del Cliente:
                <input {...register('lastName',{required: true})} type="lastName"/>
                {errors.lastName?.type === 'required' && <p>El apellido es requerido.</p>}
            </label>
            <label>
                Dirección del Cliente:
                <input {...register('address',{required: true})} type="address"/>
                {errors.address?.type === 'required' && <p>La dirección es requerida.</p>}
            </label>
            <label>
                Organización del Cliente:
                <input {...register('organization',{required: false})} type="organization"/>
                
            </label>
            <label>
                email del Cliente:
                <input {...register('email',{required: true})} type="email"/>
                {errors.email?.type === 'required' && <p>El email es requerido.</p>}
            </label>
            <label>
                RFC del Cliente:
                <input {...register('rfc',{required: true})} type="rfc"/>
                {errors.rfc?.type === 'required' && <p>El rfc es requerido.</p>}
            </label>
            <label>
                Permisos:
                <select>
                    <option value=""></option>
                    <option value="readOnly">readOnly</option>
                    <option value="readAndWrite">readAndWrite</option>
                </select>
            </label>
            <input type="submit" className='btn-addClient'/>

        </form>

    </div>
  )
}
