import React, { Component } from 'react';
import ForgeViewer from 'react-forge-viewer';
import Layout from '../components/Layout'

class Viewer extends Component {

  constructor(props){
    super(props);

    this.state = {
      view:null
    }
  }

  handleViewerError(error){
    console.log('Error loading viewer.');
  }

  /* after the viewer loads a document, we need to select which viewable to
  display in our component */
  handleDocumentLoaded(doc, viewables){
    if (viewables.length === 0) {
      console.error('Document contains no viewables.');
    }
    else{
      //Select the first viewable in the list to use in our viewer component
      this.setState({view:viewables[0]});
    }
  }

  handleDocumentError(viewer, error){
    console.log('Error loading a document');
  }

  handleModelLoaded(viewer, model){
    console.log('Loaded model:', model);
  }

  handleModelError(viewer, error){
    console.log('Error loading the model.');
  }

  getForgeToken(){
    
    return {
      access_token:'eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJ2aWV3YWJsZXM6cmVhZCJdLCJjbGllbnRfaWQiOiJISVFYOUlvN244UVo4akVXV3d6bW1YSW5YZ0d3cXh0RSIsImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tL2F1ZC9hand0ZXhwNjAiLCJqdGkiOiJoQ1BoSzNCeU95YmtUWW14SXl4d09GRHF0R3MyS0lsZk44eFNaUTE0SEhmb2tqMVYxVE8ydElybGhTcEl3T2hxIiwiZXhwIjoxNjUxMzUyODc3fQ.L8pzeAY9xL-aHyfkkAH4YdNPyG2mFzSCqe3zgwwJGQyRnMLdhmHC0YAifBbBz-4oTrBAZo0_-5Wx8TTRByKG8vSBRrQ1oibIYFtoA-j3yYtGQ7zqe786s9JDzxu-0EKk6_4k6PyiZzXotmGKBIZq7XaItZQ6NAxbqm2fSR20ag71rayImRznJnLd50V2TDDze2uQqw2y3lXXbRy1wTVlZHH0g-VxAnwxXYEVVbq9atshok90z7C2p5XO82t5WuT6rfqy5SOr3PRRS0gT81VCbRqHOZERxphlKwabgvyXXsnxSqL4Zv59lDQtmykpSNQqLyf8ZQTL6HowZ0OwgdQIWg',
      expires_in: 3599,
      token_type: "Bearer"
    };
  }

  
  handleTokenRequested(onAccessToken){
    console.log('Token requested by the viewer.');
    if(onAccessToken){
      let token = this.getForgeToken();
      if(token)
        onAccessToken(
          token.access_token, token.expires_in);
    }
  }

  render() {
    return (
      <Layout>
        <ForgeViewer
          version="6.0"
          urn='dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXJjaGl2b18yL1Byb3llY3RvMS5ydnQ='
          view={this.state.view}
          headless={false}
          onViewerError={this.handleViewerError.bind(this)}
          onTokenRequest={this.handleTokenRequested.bind(this)}
          onDocumentLoad={this.handleDocumentLoaded.bind(this)}
          onDocumentError={this.handleDocumentError.bind(this)}
          onModelLoad={this.handleModelLoaded.bind(this)}
          onModelError={this.handleModelError.bind(this)}
        />
      </Layout>
    );
  }
}

export default Viewer;