import React from 'react'
import CardClientInput from '../components/CardClientInput'
import Image from 'next/image'
import logo from '../public/logo.svg'


export default function AddClients() {
  return (
    

    <section className="create-client">

      <div className="container-blank">

      </div>
      <div className="container-cardClient">
        <Image
        src={logo}
        alt= 'Logo'

        />
        <CardClientInput/>
      </div>
    </section>
    
  )
}
