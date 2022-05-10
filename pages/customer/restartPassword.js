import React from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import CardInputRestartPassword from '../../components/CardInputRestartPassword'

export default function restartPassword() {
  const router = useRouter();
  const token = router.query
  
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
      token = {token.token}
      />
      </div>
    </div>
  )
}
