import React, { useState, useEffect } from 'react';
import ForgeViewer from 'react-forge-viewer';
import Layout from '../../components/Layout'


export default function Viewer(){
  const [accessTokenForge, setAccessTokenForge] = useState();

  useEffect(() => {
    const getTokenAutodesk = async () => {
      
      let res = await fetch('http://localhost:8080/autodesk/forge/oauth/public'),
      json = await res.json();
      setAccessTokenForge(json)
      
    }
    getTokenAutodesk(setAccessTokenForge)
  },[])
  
  const [view, setView] = useState(null)


 
    
  
  
  
  
 
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
    
    
  

  function handleTokenRequested(onAccessToken){
    console.log('Token request by the viewer.');
    if(onAccessToken){
      let token = getForgeToken();
      if(token)
      onAccessToken(token.access_token, token.expires_in)
    }
  }



  return (
    <Layout>
      {(!accessTokenForge)?null: 
      <ForgeViewer
      version="6.0"
      urn='dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXJjaGl2b18yL1Byb3llY3RvMS5ydnQ='
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
      
    </Layout>
  )
}



