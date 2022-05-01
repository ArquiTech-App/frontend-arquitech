
import React from 'react'
import Aside from '../components/Aside'


export default function Layout({children}) {
  return (
    <>
   
    <section className="section-layout">
        <Aside className="aside-layout"/>
        <div className="container-layout">

        {children}
        </div>
    </section>
    </>
  )
}

