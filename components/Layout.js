
import React from 'react'
import Aside from '../components/Aside'
import Script from 'next/script'
import Head from 'next/head'


export default function Layout({children}) {
  return (
    <>
    <Script src="https://developer.api.autodesk.com/modelderivative/v2/viewers/2.*/three.min.js"/>
    <Script src="https://developer.api.autodesk.com/modelderivative/v2/viewers/2.*/viewer3D.min.js" />
    <section className="section-layout">
        <Aside className="aside-layout"/>
        <div className="container-layout">

        {children}
        </div>
    </section>
    </>
   
  )
}

