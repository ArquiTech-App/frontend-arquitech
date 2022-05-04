import Image from "next/image";
import { useState } from "react";
import logo from "../public/logo.svg";
import InputCreateAccount from "../components/InputCreateAccount";
import ModalError from "../components/ModalError";

export default function CreateAccount() {
  const [modalShow, setModalShow] = useState(false);
  const [errorC, setErrorC] = useState("");
  const [titleModal, setTitleModal] = useState("");
  const [messageModal, setMessageModal] = useState("");
  const [success, setSuccess] = useState(false);

  return (
    <section className="body-login">
      <div className="login-page">
        <div className="login-div"></div>

        <div className="login-div-two">
          <Image src={logo} alt="Logo" width={150} height={150} />
          <InputCreateAccount
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
          />
        </div>
      </div>
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
      />
    </section>
  );
}
