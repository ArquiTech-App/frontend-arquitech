import React, {useState, useEffect} from 'react'
import AsideOffice from './AsideOffice'

export default function LayoutOffice({children}) {
  const [data, setData] = useState()

  useEffect(() => {
    
    let token = localStorage.getItem('token')
    
    
    
    async function getId(){
      
 
     try {
       
       let res = await fetch(`https://eb-arquitech.lunacrisdev.xyz/offices/getID/${token}`)
       let json = await res.json();
       let idUser = json.data.id;
       getUser(idUser, token)
 
       
     } catch (error) {
       
     }
     }
     async function getUser(id, token){
       
       try {
         let options = {
           headers: {'Authorization': token}
         }
         let res = await fetch(`https://eb-arquitech.lunacrisdev.xyz/offices/${id}`, options);
         let json = await res.json()
         let user = json.data.offices;
         setData(user)
         
       } catch (error) {
         
       }
     }
    
     getId(token)
  },[])
  
  return (
    <section className="section-layout">
        <AsideOffice 
        data={data}
        className="aside-layout"/>
        <div className="container-layout">
        {children}
        </div>
    </section>
  )
}
