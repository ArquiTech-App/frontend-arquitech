import {useEffect, useState} from 'react'
import LayoutCustomers from '../../components/LayoutCustomers'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {getProject} from '../../services/projects'
import dynamic from 'next/dynamic'

const DocViewer = dynamic(
  () => import('react-doc-viewer'),
  {ssr: false}
  )
  const {DocViewerRenderers} = dynamic(
    () => import('react-doc-viewer'),
    {ssr: false}
    )


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
          <DocViewer pluginRenderers={DocViewerRenderers} documents={documents} />
        }
        
      </LayoutCustomers>
  )
}

