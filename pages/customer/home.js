import { useEffect, useState } from "react";
import LayoutCustomers from "../../components/LayoutCustomers";
import Link from "next/link";
import { useRouter } from "next/router";
import { getProject } from "../../services/projects";
import { Document, Page } from 'react-pdf';
import dynamic from 'next/dynamic';
// import pdf from '../../public/CARP-1.11 Escritorio Sala TV.pdf'

const DocViewer = dynamic(() => import("react-doc-viewer"), { ssr: false });
const { DocViewerRenderers } = dynamic(() => import("react-doc-viewer"), {
  ssr: false,
});

export default function Home() {
  const router = useRouter();
  const idProject = router.query.project;
  console.log(idProject);
  const [documents, setDocuments] = useState([]);


  useEffect(() => {
    const getDataProject = async (idProject) => {
      const response = await getProject(idProject);

      const dataJson = await response.json();

      console.log(dataJson);

      setDocuments(
        dataJson.data.projects.documents.map((doc) => {
          if (doc.url) {
            return { uri: doc.url };
          }
        })
      );
    };
    console.log("se monta el componente de documents");
    getDataProject(idProject).catch(console.error);
  }, [idProject]);
  const docs = [
    {uri: '/CARP-1.11 Escritorio Sala TV.pdf'},
    {uri: '/dwg.png'}, 
  ];
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  console.log('documents:',documents);
  return (
      <LayoutCustomers>
        <h1>Project Documents</h1>
        {
          <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
        }
        
      </LayoutCustomers>
  )
}

          <DocViewer config={{header:{disableHeader: true}}}  pluginRenderers={DocViewerRenderers} documents={docs} />

        }
      {/* {documents.map((doc) => {
        if (!doc) return null;
        if (doc.uri.includes("pdf")) {
          return (
            <object
              type="application/pdf"
              data={doc.uri}
              width="250"
              height="200"
            ></object>
          );
        }
        return (
          <iframe
            src={doc.uri}
            height={300}
            width={300}
            sandbox="allow-scripts allow-downloads"
          />
        );
      })} */}
      {/* {
        documents.length>0 && 
        <>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
        </>
      } */}
    </LayoutCustomers>
  );
}
