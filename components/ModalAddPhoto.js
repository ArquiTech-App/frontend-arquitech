import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Router from 'next/router'

export default function ModalAddPhoto(props) {
  console.log(props);
    let token = props.token;
    let id = props.data._id;
    let userPhoto = props.photoUser;
    let urls = ''
    console.log(userPhoto);
    if(userPhoto[0] === 'client'){
      console.log(userPhoto[1]);
      
       urls = `https://eb-arquitech.lunacrisdev.xyz/clients/${userPhoto[1]}`
    } else {
      console.log('office');
      urls = `https://eb-arquitech.lunacrisdev.xyz/offices/${id}`
    }
        console.log(urls);
    async function uploadAvatar(e) {
        e.preventDefault();
        let formData = new FormData()
       
        formData.append('file', e.target.file.files[0] )
        console.log(formData);
        console.log(props.data.bucket);
        let options = {
            method: 'POST',
            body: formData
        }
       try {
           let res = await fetch(`https://eb-arquitech.lunacrisdev.xyz/upload/${props.data.bucket}`, options)
           let json = await res.json()
            console.log(json);
           if(!res.ok) throw {error: json}
           let url = json.url;
            let u = url.split('?')
            url = u[0]
            
            console.log(url);
            
            addAvatar(url);
            Router.reload(location.pathname)
            props.onHide();

       } catch (error) {
           console.log(error);
       }
    }
    
    async function addAvatar(url){
        console.log(token);
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
            if(!res.ok) throw {error: json}
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
