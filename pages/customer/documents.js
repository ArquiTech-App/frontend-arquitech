import {useEffect, useState} from 'react'
import LayoutCustomers from '../../components/LayoutCustomers'
import DocViewer, {DocViewerRenderers} from "react-doc-viewer"
import { useRouter } from 'next/router'
import {getProject} from '../../services/projects'



export default function Documents () {
  const router = useRouter()
  const idProject = router.query.project
  console.log(idProject)
  const [project, setProject] = useState({})

  useEffect( () => {
    const getDataProject = async (idProject) => {
      
      const response = await getProject(idProject)
      
      const dataJson = await response.json()
      console.log(dataJson)
      setProject(dataJson.data.projects) 
    }
    console.log('se monta el componente de documents')
    getDataProject(idProject) 
    .catch(console.error)

  }, [])
  const docs = [
    {uri: '/dwg.png'},
    {uri: '/CARP-1.11 Escritorio Sala TV.pdf'}, 
  ];
  return (
    <LayoutCustomers>
      <h1>Documents of the Project</h1>
        
          <div className="App">
            <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
          </div>

    </LayoutCustomers>
  )
}

