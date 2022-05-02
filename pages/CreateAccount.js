import Image from 'next/image'
import logo from '../public/logo.svg'
import InputCreateAccount  from '../components/InputCreateAccount'

export default function CreateAccount() {
  return (
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
            <InputCreateAccount/>
            </div>
            
        </div>
            </section>
  )
}
