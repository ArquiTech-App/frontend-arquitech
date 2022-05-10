import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Router from 'next/router'

export default function ModalAddPhoto(props) {
    let token = props.tokenOffice;
    let id = props.officeData._id;
    let userPhoto = props.photoUser;
    let urls = ''
    if(userPhoto[0] === 'client'){
      console.log('client');
      
       urls = `https://ec2-54-227-138-69.compute-1.amazonaws.com/clients/${userPhoto[1]}`
    } else {
      console.log('office');
      urls = `https://ec2-54-227-138-69.compute-1.amazonaws.com/offices/${id}`
    }
        console.log(urls);
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
           let res = await fetch(`https://ec2-54-227-138-69.compute-1.amazonaws.com/upload/${props.officeData.bucket}`, options)
           let json = await res.json()
            
           if(!res.ok) throw {error: error}
           let url = json.url;
            let u = url.split('?')
            url = u[0]
            console.log('hola');
            console.log(url);
            
            addAvatar(url);
            Router.reload(location.pathname)
            props.onHide();

       } catch (error) {
           console.log(error);
       }
    }
    
    async function addAvatar(url){
        console.log(url);
        let options = {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify({"avatar": url})
        }
        try {

            let res = await fetch(urls, options)
            let json = await res.json();
            console.log(res);
            if(!res.ok) throw {error: json.message}
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
