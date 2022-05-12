import React, {useEffect, useState} from 'react'
import LayoutOffice from '../../components/LayoutOffice'
import {useRouter} from 'next/router'
import ModalAddProyects from '../../components/ModalAddProyects'
import ModalAddDocument from '../../components/ModalAddDocument'
import { Button } from 'react-bootstrap'
import LayoutClientOffice from '../../components/LayoutClientOffice'


export default function OfficeClientProyect() {
  const [proyect, setProyect] = useState();
  const [data, setData] = useState();
  const [idProyect, setIdProyect] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [modalShowFile, setModalShowFile] = useState(false);
  const router = useRouter();
  const pass = router.query;
  const bucket = pass.bucket;
  const id = pass.id

  
  
  useEffect(() => {
    let id = pass.id;
    getClient(id);
  
    async function getClient(id) {
      try {
        let res = await fetch(`https://eb-arquitech.lunacrisdev.xyz/clients/${id}`)
        let json = await res.json()
        if(!res.ok) throw {error: json}
        setData(json.data.clients)
        setProyect(json.data.clients.projects)
      } catch (error) {
        console.log(error)
      }
    }
  },[])

  function clickModal(){
    setModalShow(true)
  }
  function clickModalFile(el){
    setIdProyect(el._id)
    setModalShowFile(true)
  }
  return (

    <LayoutOffice>
      
      <ModalAddProyects
      show={modalShow}
      onHide={() => {
        setModalShow(false);
      }}
      id={id}
      bucket={bucket}
      />
      

      <LayoutClientOffice>
      <div data={data}>

      </div>
      </LayoutClientOffice>
      {(!proyect)?<h2>Recarga la pagina...</h2>
      : 
      <div>
        {proyect.map(el=>{
          
          return (
            <>
            <div className="card p-4">
              <h3>{el.name}</h3>
              <h5>{el.organization}</h5>
              {el.documents.length > 0 ? el.documents.map(el => {return <a href={el.url}>{el.name}</a>}): null}
              <Button onClick={()=>{clickModalFile(el)}}>Agregar Archivo</Button>
            </div>
            
            </>
          )
        })}
      <Button  onClick={clickModal}>Agregar Proyecto</Button>
      <ModalAddDocument
      show={modalShowFile}
      onHide={() => {
        setModalShowFile(false);
      }}
      id={idProyect}
      bucket={bucket}
      />
      </div>
      
    }
    </LayoutOffice>
  )
}
