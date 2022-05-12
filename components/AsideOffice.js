import React, {useState, useContext, useEffect} from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";
import home from "../public/btn-home.svg";
import dashboard from "../public/btn-dashboard.svg";
import projects from "../public/btn-document.svg";
import view from "../public/btn-view.svg"
import officeContext from "../context/officeContext"
import settings from "../public/btn-settings.svg";
import clients from "../public/people-team-svgrepo-com.svg"

import {Accordion, ListGroup} from "react-bootstrap"




export default function AsideOffice() {
  
  const [client, setClient] = useState()
  const [bucket, setBucket] = useState()
  
  useEffect(() => {
    
    let user = localStorage.getItem("data")
    user = JSON.parse(user);
    if(user){

      setClient(user.clients)
      setBucket(user.bucket)
    }
  },[])
 
 

  
  
 
  
  
  
  return (
    
    <aside className="aside-layout">
      <div className="logo-aside">
        <Image src={logo} alt="Logo" width={150} height={150} />
      </div>
      <div className="menu-aside">
        <div className="buttons-aside">
          <Link href="home">
            <button className="btn-aside">
              <Image src={home} alt="logo-home" />
              Home
            </button>
          </Link>
        
    
          
          <Link href="dashboard">
            <button className="btn-aside">
              <Image src={dashboard} alt="logo-dashboard" />
              Dashboard
            </button>
          </Link>
         
          <Link href="settings">
            <button className="btn-aside">
              <Image src={settings} alt="logo-settings" />
              Settings
            </button>
          </Link>
        <Accordion className="accordion-container">
           <Accordion.Item eventKey="0" className="accordion-item">
              <Accordion.Header className="accordion-header">
              
              <button className="btn-aside">
              <Image src={clients} alt="logo-dashboard" />
              Clientes
             
            </button>
         
              </Accordion.Header>
              <Accordion.Body>

              { (!client)?null:
              client.map(el=>{
                return (
                  <>
                  

                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header className="accordion-header">
                      <button className="btn-aside">
              
              {el.lastName}
             
            </button>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ListGroup>
                        <ListGroup.Item>
                          <Link href="/clientDashboard">
                            <button className="btn-aside">
                              <Image src={dashboard} alt="logo-dashboard" />
                              Dashboard
                            </button>
                          </Link>
                          <Link href={{
                            
                            pathname: "OfficeClientProyect",
                            query: { id: el._id,
                            bucket: bucket}
                            }}>
                            <button className="btn-aside">
                              <Image src={projects} alt="logo-dashboard" />
                              Proyectos
                            </button>
                          </Link>
                          <Link href="/clientDashboard">
                            <button className="btn-aside">
                              <Image src={view} alt="logo-view" />
                              Viewer
                            </button>
                          </Link>
                        </ListGroup.Item>
                        </ListGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  
                  </>
                )
              })}
              </Accordion.Body>
           </Accordion.Item>
         </Accordion>
         
        </div>
      </div>
    </aside>
  );
}
