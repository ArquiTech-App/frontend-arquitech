import React from 'react'
import Link from "next/link";
import Image from "next/image";
import gantt from "../public/btn-gantt.svg";
import view from "../public/btn-view.svg";
import documents from "../public/btn-document.svg";
import contracts from "../public/btn-contracts.svg";

export default function AsideClientsOffice() {
  return (
    <div>
         <Link href="gantt">
            <button className="btn-aside">
              <Image src={gantt} alt="logo-gantt" />
              Gantt
            </button>
          </Link>
          <Link href="documents">
            <button className="btn-aside">
              <Image src={documents} alt="logo-documents" />
              Documents
            </button>
          </Link>
          <Link href="Viewer">
            <button className="btn-aside">
              <Image src={view} alt="logo-view" />
              View 3D
            </button>
          </Link>
          <Link href="contracts">
            <button className="btn-aside">
              <Image src={contracts} alt="logo-contracts" />
              Contracts
            </button>
          </Link>
    </div>
  )
}
