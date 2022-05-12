import React from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import logo from '../public/logo.svg'
import CardInputRestartPassword from '../components/CardInputRestartPassword'


function restart() {
  
    const router = useRouter();
    let token = router.query
    token = token.token
  return (
    <div className="container-restart-password">
      <div className="container-blank">

      </div>
      <div className="container-input-password">
      <Image
        src={logo}
        alt="Logo"
        width={150}
        height={150}
      />
      <CardInputRestartPassword
      token = {token}
      />
      </div>
    </div>
  )
}

export default restart