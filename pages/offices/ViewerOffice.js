import React, { useState, useEffect } from 'react';
import LayoutOffice from '../../components/LayoutOffice'
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'


const DynamicComponent = dynamic(
  () => import('react-forge-viewer'),
  { ssr: false}
)

export default function Viewer(){
  const [accessTokenForge, setAccessTokenForge] = useState();
  const [data, setData] = useState();
  const [doc, setDoc] = useState();
  const router = useRouter();
  const pass = router.query;
  const id = pass.id

  useEffect(() => {
    getClient(id);
  
    async function getClient(id) {
      try {
        let res = await fetch(`https://eb-arquitech.lunacrisdev.xyz/clients/${id}`)
        let json = await res.json()
        if(!res.ok) throw {error: json}
        setData(json.data.clients)
        setProyect(json.data.clients.projects)
      } catch (error) {
        console.log(error)
      }
    }



    const getTokenAutodesk = async () => {
      
      let res = await fetch('https://eb-arquitech.lunacrisdev.xyz/autodesk/forge/oauth/public'),
      json = await res.json();
      setAccessTokenForge(json)
      
    }
    getTokenAutodesk(setAccessTokenForge)
    
  },[])
  
  const [view, setView] = useState(null)

  //preparando la peticion replica

 
    
  
  
  
  
 
  function handleViewerError(error){
    console.log('Error loading viewer.');
  }
  function handleDocumentLoaded(doc, viewables){
    console.log(viewables.length);
    if(viewables.length === 0){
      log.error('Document contains no viewables.')
    } else{
      setView(viewables[0])
      
    }
  }
  function handleDocumentError(viewer, error){
    console.log('Error loading a document');
  }
  function handleModelLoaded(viewer, model){
    console.log(`Loaded model: ${model}`);
  }
  function handleModelError(viewer, error){
    console.log('Error loading the model.');
  }
    function getForgeToken(){

    
      return {
          access_token: accessTokenForge.access_token,
          expires_in: accessTokenForge.expires_in,
          token_type: "Bearer"
      }

    
      
     
      
    }
    
   
  function onChange(e){

  }

  function handleTokenRequested(onAccessToken){
    console.log('Token request by the viewer.');
    if(onAccessToken){
      let token = getForgeToken();
      if(token)
      onAccessToken(token.access_token, token.expires_in)
    }
  }
  if(data){
    setDoc(data.projects[0].documents)
}
  console.log(doc);
  return (
    <LayoutOffice>
        <form onSubmit={onChange} >
            <select style={{width: "200px"}}>
                {/* {(!data)?<option>hola</option>: doc.map(el=>{
                    console.log(el);
                    console.log(el);
                    return(
                        
                        
                        <option value={el.urn}>{el}</option>
                                
                            
                        
                    )
                })} */}
            </select>
        </form>
        <>
      {(!accessTokenForge)?null: 
      <DynamicComponent
      version="6.0"
      urn='dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXJxdWl0ZWNoL3BydWViYS5kd2c='
      view={view}
      
        headless={false}
        onViewerError={handleViewerError.bind(this)}
        onTokenRequest={handleTokenRequested.bind(this)}
        onDocumentLoad={handleDocumentLoaded.bind(this)}
        onDocumentError={handleDocumentError.bind(this)}
        onModelLoad={handleModelLoaded.bind(this)}
        onModelError={handleModelError.bind(this)}
    />
      }
      </>
    </LayoutOffice>
  )
}