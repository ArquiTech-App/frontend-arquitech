import {useEffect, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Router from 'next/router'
import { getUser } from '../services/clients/auth'


export default function ModalError(props) {
  const [projects, setProjects] = useState([])

  // useEffect( () => {
  //   const getDataUser = async (token) => {
      
  //     const response = await getUser(token)
      
  //     const dataJson = await response.json()
  //     //console.log(dataJson)
  //     setProjects(dataJson.data.clients.projects) 
  //   }
  //   //console.log('se monta el componente')
  //   getDataUser(localStorage.getItem('token')) 
  //   .catch(console.error)

  // }, [])
   async function clickModal() {
        if (!props.success) {
            
            props.setErrorC('')
            props.onHide()
            if(props.pageComing === 'ceateacount'){

                Router.push('/CreateAccount')
            } else {
              
                Router.push('/login')
            }
        } else {
            props.setErrorC('')
            props.onHide()
            props.setSuccess(false)
            if(props.pageComing === 'ceateacount'){
            Router.push('/login')
            } else {
              
              if(props.userState === 'office'){
                


                Router.push('offices/home')

              } else {
                const response = await getUser(localStorage.getItem('token'))
      
      const dataJson = await response.json()
                //Router.push('customer/home')
                Router.push({
                  pathname: '/customer/home',
                  query: { project: dataJson.data.clients.projects[0]._id },
                })
              }
            }
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
