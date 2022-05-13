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
  const [urn, setUrn] = useState();

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
    
    
  


    const getTokenAutodesk = async () => {
      
      let res = await fetch('https://eb-arquitech.lunacrisdev.xyz/autodesk/forge/oauth/public'),
      json = await res.json();
      setAccessTokenForge(json)
      
    }
    getTokenAutodesk(setAccessTokenForge)
    
  },[])
  
  const [view, setView] = useState(null)
  const [viewSel, setViewSell] = useState(null)
  const [doc, setDoc] = useState(null)

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
    
    let docs = [];
    let pro = [];
  
  function onChange(e){
      
        setUrn(e.target.value);

  }
 

  function handleTokenRequested(onAccessToken){
    console.log('Token request by the viewer.');
    if(onAccessToken){
      let token = getForgeToken();
      if(token)
      onAccessToken(token.access_token, token.expires_in)
    }
  }
  
  if (data) {
      pro = data.projects
      
  }
  function onChanges(e) {
    let ind = e.target.value
    
    setDoc(pro[ind].documents)
    setViewSell(true)
}

  
  return (
    <LayoutOffice>
        <form className='form-viewer' >
        <label>
            Seleccione el Proyecto:
            <select onChange={onChanges}>
              <option value=""></option>
                {(!data)?<option></option>: pro.map((el, index)=>{
                  console.log(el);
                  
                  return(
                    
                    
                    <option key={index}  value={index}>{el.name}</option>
                    
                    
                    
                    
                    )
                  })}
            </select>
                  </label>
                  { (!viewSel)?null :

          <label>
            Seleccione el Archivo:
            <select onChange={onChange}>
              <option value=""></option>
                {!doc?null: doc.map(el=>{
                  console.log(el);
                  
                  return(
                    
                    (!el.urn)
                    ? null
                    :<option key={index}  value={el.urn}>{el.name}</option>
                    
                    
                    
                    
                    )
                  })}
            </select>
                  </label>
                  }
            
        </form>
        <>
      {(!accessTokenForge)?null: 
      <DynamicComponent
      version="6.0"
      urn={urn}
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