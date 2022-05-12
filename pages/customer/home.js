import React from 'react'
import LayoutCustomers from '../../components/LayoutCustomers'
import Link from 'next/link'
import DocViewer, {DocViewerRenderers} from "react-doc-viewer"


export default function home() {
  const docs = [
    {uri: '/dwg.png'},
    {uri: '/CARP-1.11 Escritorio Sala TV.pdf'}, 
  ];
  return (
      <LayoutCustomers>
        <h1>Project Documents</h1>
        <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
      </LayoutCustomers>
  )
}

