import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Router from 'next/router'

export default function ModalAddPhoto(props) {
    let token = props.tokenOffice;
    let id = props.officeData._id
    
        
    async function uploadAvatar(e) {
        e.preventDefault();
        let formData = new FormData()
       
        formData.append('file', e.target.file.files[0] )
        console.log(formData);
        let options = {
            method: 'POST',
            body: formData
        }
       try {
           let res = await fetch(`http://localhost:8080/upload/${props.officeData.bucket}`, options)
           let json = await res.json()
            
           if(!res.ok) throw {error: error}
           let url = json.url;
            let u = url.split('?')
            url = u[0]
            console.log(url);
           
            addAvatar(url);
            Router.reload(window.location.pathname)
            props.onHide();

       } catch (error) {
           console.log(error);
       }
    }
    async function addAvatar(url){
        
        let options = {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify({"avatar": url})
        }
        try {

            let res = await fetch(`http://localhost:8080/offices/${id}`, options)
            let json = await res.json();

            if(!res.ok) throw {error: error.message}
            console.log(json);
        } catch (error) {
            console.log(error);
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
          Agregar Avatar:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={uploadAvatar} className="form-add">
            <input type="file" name="file"/>
            <div className='form-enviar'>

            <input type='submit' />
            </div>
        </form>
      </Modal.Body>
      
    </Modal>
  )
}
