import React, {useEffect, useState} from 'react'
import LayoutOffice from '../../components/LayoutOffice'
import {useRouter} from 'next/router'
import ModalAddProyects from '../../components/ModalAddProyects'
import ModalAddDocument from '../../components/ModalAddDocument'
import { Button } from 'react-bootstrap'
import Image from 'next/image'
import LayoutClientOffice from '../../components/LayoutClientOffice'
import pdf from '../../public/pdf.png'
import jpg from '../../public/jpg.png'
import rvt from '../../public/revit.png'
import dwg from '../../public/dwg.png'


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
  let img = '';
  
  
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
      <div className='container-btn-proyect'>

<button className="btn-add-proyect"  onClick={clickModal}>Agregar Proyecto</button>
  </div>
      {(!proyect)?<h2>Recarga la pagina...</h2>
      : 
      <div>
        {proyect.map(el=>{
          
          return (
            <>
            <div className="card p-4 ">
              <h3>{el.name}</h3>
              <h5>{el.organization}</h5>
              <div className='container-doc'>

              {el.documents.length > 0 ? el.documents.map(el => {
                if(el.name.substr(-3) === 'pdf' ) img = pdf;
                if(el.name.substr(-3) === 'jpg' || el.name.substr(-3) === 'png' ) img = jpg;
                if(el.name.substr(-3) === 'dwg' || el.name.substr(-3) === '3ds') img = dwg;
                if(el.name.substr(-3) === 'rvt' ) img = rvt;
                
                return (
                  <div key={el._id} className='container-files'>
                    <Image
                    src={img}
                    alt='icon'
                    height={50}
                    width={50}
                    />
                <a key={el.name} href={el.url}>{el.name}</a>
                  </div>
                )}): null}
                </div>
              <div className='container-btn-addfile'>

              <button className='btn-addfile' onClick={()=>{clickModalFile(el)}}>Agregar Archivo</button>
              </div>
            </div>
            
            </>
          )
        })}
      
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
