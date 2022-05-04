import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Router from 'next/router'

export default function ModalError(props) {

    function clickModal() {
        if (!props.success) {
            
            props.setErrorC('')
            props.onHide()
            Router.push('/CreateAccount')
        } else {
            props.setErrorC('')
            props.onHide()
            props.setSuccess(false)
            Router.push('/login')

        }
    }
  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          {props.messageModal}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.titleModal}</h4>
        <p>
          {props.errorC}
        </p>
      </Modal.Body>
      <Modal.Footer>
          {!props.success ? 
          <Button onClick={clickModal}>Cerrar</Button>:
          <Button onClick={clickModal}>Aceptar</Button>
          }
        
      </Modal.Footer>
    </Modal>
  )
}
