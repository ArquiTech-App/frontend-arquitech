import {useEffect} from 'react'
import AsideCustomers from './AsideCustomers'
import { getUser } from '../services/clients/auth'

export default function LayoutCustomers({children}) {
  

  useEffect( () => {
    const getDataUser = async (token) => {
      console.log(token)
      const response = await getUser(token)
      console.log(response )
      const dataJson = await response.json()
      conselo.log(dataJson)
    }
    console.log('se monta el componente')
    getDataUser(localStorage.getItem('token')) 
    .catch(console.error)

  }, [])

  return (
    <section className="section-layout">
        <AsideCustomers className="aside-layout"/>
        <div className="container-layout">
        {children}
        </div>
    </section>
  )
}