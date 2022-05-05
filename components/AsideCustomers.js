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

export default function AsideCustomers() {
  return (
    <aside className="aside-layout">
      <div className="logo-aside">
        <Image src={logo} alt="Logo" width={150} height={150} />
      </div>
      <div className="title-aside">
        <h5>Customer Projects</h5>
      </div>
      <Accordion border="none">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Project #1</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item action variant="light">
                <Link href="gantt">
                  <button variant="light" className="btn-aside">
                    <Image src={gantt} alt="logo-gantt" />
                    Gantt
                  </button>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <Link href="documents">
                  <button className="btn-aside">
                    <Image src={documents} alt="logo-documents" />
                    Documents
                  </button>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <Link href="Viewer">
                  <button className="btn-aside">
                    <Image src={view} alt="logo-view" />
                    View 3D
                  </button>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <Link href="contracts">
                  <button className="btn-aside">
                    <Image src={contracts} alt="logo-contracts" />
                    Contracts
                  </button>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Project #2</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item action variant="light">
                <Link href="gantt">
                  <button variant="light" className="btn-aside">
                    <Image src={gantt} alt="logo-gantt" />
                    Gantt
                  </button>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <Link href="documents">
                  <button className="btn-aside">
                    <Image src={documents} alt="logo-documents" />
                    Documents
                  </button>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <Link href="Viewer">
                  <button className="btn-aside">
                    <Image src={view} alt="logo-view" />
                    View 3D
                  </button>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                <Link href="contracts">
                  <button className="btn-aside">
                    <Image src={contracts} alt="logo-contracts" />
                    Contracts
                  </button>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </aside>
  );
}
