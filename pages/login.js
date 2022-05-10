import LoginInput from '../components/login-input'
import Image from 'next/image'
import logo from '../public/logo.svg'
import React, {useState, useContext} from 'react'
import OfficeContext from '../context/officeContext'
import ModalError from '../components/ModalError'


export default function Login(){
    const [modalShow, setModalShow] = useState(false);
    const [userState, setUserState] = useState('');
  const [errorC, setErrorC] = useState("");
  const [titleModal, setTitleModal] = useState("");
  const [messageModal, setMessageModal] = useState("");
  const [success, setSuccess] = useState(false);
   const {tokenOffice,setTokenOffice,isLoginOffice,setIsLoginOffice} = useContext(OfficeContext);
   const [pageComing, setPageComing] = useState('login')

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
            setModalShow={setModalShow}
            show={modalShow}
            errorC={errorC}
            setErrorC={setErrorC}
            titleModal={titleModal}
            setTitleModal={setTitleModal}
            messageModal={messageModal}
            setMessageModal={setMessageModal}
            success={success}
            setSuccess={setSuccess}
            userState={userState}
            setUserState={setUserState}
            />
            <ModalError
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
        errorC={errorC}
        setErrorC={setErrorC}
        titleModal={titleModal}
        setTitleModal={setTitleModal}
        messageModal={messageModal}
        setMessageModal={setMessageModal}
        success={success}
        setSuccess={setSuccess}
        pageComing={pageComing}
        userState={userState}
      />
            </div>
            
        </div>
            </section>
    )
}
