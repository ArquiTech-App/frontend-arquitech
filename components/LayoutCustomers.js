import React from 'react'
import AsideCustomers from './AsideCustomers'

export default function LayoutCustomers({children}) {
  return (
    <section className="section-layout">
        <AsideCustomers className="aside-layout"/>
        <div className="container-layout">
        {children}
        </div>
    </section>
  )
}