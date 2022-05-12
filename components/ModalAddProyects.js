import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import Router from 'next/router'
import {useForm} from 'react-hook-form'

export default function ModalAddProyects(props) {
    const {
      register,
      handleSubmit,
      formState: {errors}
    } = useForm();
    const { id, onHide} = props

    async function onSubmit(data){
        
        let options = {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
        }
        try {
            let res = await fetch(`https://eb-arquitech.lunacrisdev.xyz/proyects/${id}`, options)
           let json = await res.json()
            console.log(json);
           if(!res.ok) throw {error: json.message}
           
            
            
            
            Router.back(location)
            props.onHide();
        } catch (error) {
            console.log(error.error);
        }
        
    }


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Agregar Proyecto:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)} className="form-proyect">
          <label>
            Nombre del Proyecto:
            <input {...register("name",{required: true})} type="text"/>
            {errors.name?.type === "required" && <p>El nombre del proyecto es requerido.</p>}
          </label>
          <label>
            Nombre de la Organización:
            <input {...register("organization",{required: false})} type="text"/>
            
          </label>
          <label>
            Estatus:
            <select>
                    <option value=""></option>
                    <option value="open">Open</option>
                    <option value="finally">Finally</option>
                </select>
            
          </label>
          <div className="div-btn">
          <input className="btn-enviar" type="submit" value="Enviar" />

          </div>
        </form>
      </Modal.Body>
      
    </Modal>
  )
}
