import React, { useState, useEffect } from 'react';
import LayoutOffice from '../../components/LayoutOffice'
import {useRouter} from 'next/router'





export default function Documents(){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState();
  const [url, setUrl] = useState();

  const router = useRouter();
  const [id, setId] = useState(router.query);

  

  useEffect(() => {

      
      getClient(id.id)
      
  
    async function getClient(id) {
      try {
        let res = await fetch(`https://eb-arquitech.lunacrisdev.xyz/clients/${id}`)
        let json = await res.json()
        if(!res.ok) throw {error: json}
        setData(json.data.clients)
        
      } catch (error) {
        console.log(error)
      }
    }
    
    
  
    
  },[])
  
  

 

    
   
  function onChange(e){
      
        setUrl(e.target.value);

  }
  

  
  let doc = []
  if (data) {

       doc = data.projects[0].documents
  }

 

  
  return (
    <LayoutOffice>
        <form  >
            <select onChange={onChange} style={{width: "200px"}}>
              <option value=""></option>
                {(!data)?<option></option>: doc.map(el=>{
                    
                    console.log(el.name.substr(-3) === 'pdf')
                    
                    return(
                        (el.name.substr(-3) === 'pdf')?<option  value={el.url}>{el.name}</option>:null
                        
                        
                                
                            
                        
                    )
                })}
            </select>
            
        </form>
        <>
        
        
      </>
    </LayoutOffice>
  )
}