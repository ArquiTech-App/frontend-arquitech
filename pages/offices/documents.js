import React, { useState, useEffect } from 'react';
import LayoutOffice from '../../components/LayoutOffice'
import {useRouter} from 'next/router'
import dynamic from 'next/dynamic';

const DocViewer = dynamic(() => import("react-doc-viewer"), { ssr: false });
const { DocViewerRenderers } = dynamic(() => import("react-doc-viewer"), {
  ssr: false,
});




export default function Documents(){
  
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
      
        setUrl([{uri: e.target.value}]);

  }
  console.log(url);
  let doc = []
  if (data) {

       doc = data.projects[0].documents
  }
  


  
  return (
    <LayoutOffice>
        <form  >
            <select onChange={onChange} style={{width: "200px"}}>
              <option value=""></option>
                {(!doc)?<option></option>: doc.map(el=>{
                    
                    console.log(el.name.substr(-3) === 'pdf')
                    
                    return(
                        (el.name.substr(-3) === 'pdf')?<option  value={el.url}>{el.name}</option>:null
                        
                        
                                
                            
                        
                    )
                })}
            </select>
            
        </form>
        <>
        {
          !url ? null : 
          <DocViewer config={{header:{disableHeader: true}}} pluginRenderers={DocViewerRenderers} documents={url} />
        }
        
      </>
    </LayoutOffice>
  )
}