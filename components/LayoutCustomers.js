import {useEffect, useState} from 'react'
import AsideCustomers from './AsideCustomers'
import { getUser } from '../services/clients/auth'

export default function LayoutCustomers({children}) {
  
  const [projects, setProjects] = useState([])

  useEffect( () => {
    const getDataUser = async (token) => {
      
      const response = await getUser(token)
      
      const dataJson = await response.json()
     // console.log(dataJson)
      setProjects(dataJson.data.clients.projects) 
    }
    //console.log('se monta el componente')
    getDataUser(localStorage.getItem('token')) 
    .catch(console.error)

  }, [])

  return (
    <section className="section-layout">
        <AsideCustomers className="aside-layout" projects={projects}/>
        <div className="container-layout">
        {children}
        </div>
    </section>
  )
}