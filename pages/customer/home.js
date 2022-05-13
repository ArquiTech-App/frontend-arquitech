import {useEffect, useState} from 'react'
import LayoutCustomers from '../../components/LayoutCustomers'
import Link from 'next/link'
import DocViewer, {DocViewerRenderers} from "react-doc-viewer"
import { useRouter } from 'next/router'
import {getProject} from '../../services/projects'


export default function Home() {
  const router = useRouter()
  const idProject = router.query.project
  console.log(idProject)
  const [documents, setDocuments] = useState({})
  

  useEffect( () => {
    const getDataProject = async (idProject) => {
      
      const response = await getProject(idProject)
      
      const dataJson = await response.json()
      console.log(dataJson)
      setDocuments(dataJson.data.projects.documents.map((doc)=>{
        if (doc.url) return {uri: doc.url}
      })) 
    }
    console.log('se monta el componente de documents')
    getDataProject(idProject) 
    .catch(console.error)

  }, [idProject])
  const docs = [
    {uri: '/dwg.png'},
    {uri: '/CARP-1.11 Escritorio Sala TV.pdf'}, 
  ];
  return (
      <LayoutCustomers>
        <h1>Project Documents</h1>
        {
          documents.length>0 && 
          <DocViewer config={{header:{disableHeader: true}}}  pluginRenderers={DocViewerRenderers} documents={docs} />
        }
        
      </LayoutCustomers>
  )
}

