import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import Router from 'next/router'

export default function ModalAddDocument(props) {

    const {bucket, id, onHide} = props
    async function uploadFile(e){
        e.preventDefault()
        let formData = new FormData()
        
        formData.append('file', e.target.file.files[0])
        const name = e.target.file.files[0].name;
        console.log(name);
        let options = {
            method: 'POST',
            body: formData
        }
        try {
            let res = await fetch(`https://eb-arquitech.lunacrisdev.xyz/upload/${bucket}`, options)
           let json = await res.json()
            console.log(json);
           if(!res.ok) throw {error: json.message}
           let url = json.url;
            let u = url.split('?')
            url = u[0]
            
            console.log(url);
            
            addFile(url, name);
            Router.reload(location.pathname)
            props.onHide();
        } catch (error) {
            console.log(error.error);
        }
        
    }
    async function addFile(url, name){
      try {
        
      } catch (error) {
        
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
          Agregar Archivo:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={uploadFile} className="form-add">
            <input type="file" name="file"/>
            <div className='form-enviar'>

            <input type='submit' />
            </div>
        </form>
      </Modal.Body>
      
    </Modal>
  )
}