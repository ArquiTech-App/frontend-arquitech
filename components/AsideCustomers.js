import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import gantt from "../public/btn-gantt.svg";
import documents from "../public/btn-document.svg";
import view from "../public/btn-view.svg";
import contracts from "../public/btn-contracts.svg";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function AsideCustomers({projects}) {
  return (
    
    <aside className="aside-layout">
      <div className="logo-aside">
        <Image src={logo} alt="Logo" width={150} height={150} />
      </div>
      <div className="title-aside">
        <h5>Customer Projects</h5>
      </div>
      <Accordion border="none">
      {
        projects.length>0 && 
        projects.map((project, index)=>(
          <Accordion.Item eventKey={index} key={project._id}>
          <Accordion.Header>{project.name}</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
            <ListGroup.Item action variant="/light">
                <Link href={{
                        pathname: '/customer/home',
                        query: { project: project._id }
                      }}>
                  <a className="btn-aside">
                    <Image src={documents} alt="logo-documents" />
                    Documents
                  </a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <Link href={{
                        pathname: '/customer/viewer',
                        query: { project: project._id }
                      }}>
                  <a className="btn-aside">
                    <Image src={view} alt="logo-view" />
                    View 3D
                  </a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <Link href={{
                        pathname: '/customer/gantt',
                        query: { project: project._id }
                      }}>
                  <a variant="light" className="btn-aside">
                    <Image src={gantt} alt="logo-gantt" />
                    Gantt
                  </a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <Link href={{
                        pathname: '/customer/contracts',
                        query: { project: project._id }
                      }}>
                  <a className="btn-aside">
                    <Image src={contracts} alt="logo-contracts" />
                    Contracts
                  </a>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        ))
      }
        
      </Accordion>
    </aside>
  );
}
