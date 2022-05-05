import React from 'react'
import AsideOffice from './AsideOffice'

export default function LayoutOffice({children}) {
  return (
    <section className="section-layout">
        <AsideOffice className="aside-layout"/>
        <div className="container-layout">
        {children}
        </div>
    </section>
  )
}
