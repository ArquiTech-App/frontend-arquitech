import LoginInput from '../components/login-input'
import Image from 'next/image'
import logo from '../public/logo.svg'
import React, {useState, useContext} from 'react'
import OfficeContext from '../context/officeContext'


export default function Login(){

   const {tokenOffice,setTokenOffice,isLoginOffice,setIsLoginOffice} = useContext(OfficeContext);
    

    return(
        <section className="body-login">

        <div className="login-page">
            <div className="login-div">

            </div>
            
            <div className="login-div-two">
            <Image 
            src={logo}
            alt="Logo"
            width={150}
            height={150}
            />
            <LoginInput
            setTokenOffice={setTokenOffice}
            tokenOffice={tokenOffice}
            setIsLoginOffice={setIsLoginOffice}
            isLoginOffice={isLoginOffice}
            />
            </div>
            
        </div>
            </section>
    )
}
