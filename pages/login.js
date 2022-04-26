import LoginInput from '../components/login-input'
import Image from 'next/image'
import logo from '../public/logo.svg'

export default function Login(){



    return(
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
            <LoginInput/>
            </div>
            
        </div>
    )
}