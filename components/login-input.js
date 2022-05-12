import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function LoginI({
  setTokenOffice,
  tokenOffice,
  setIsLoginOffice,
  isLoginOffice,
  errorC,
  setErrorC,
  setModalShow,
  setMessageModal,
  setTitleModal,
  setSuccess,
  setUserState,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      
      let option = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          
          "Content-Type": "application/json"
          
        },
      };

      let res = await fetch("https://eb-arquitech.lunacrisdev.xyz/offices/login", option);
      let json = await res.json();

      if (!res.ok)
        throw { error: json.error, message: json.message, option: option };
       

      localStorage.setItem("token", json.data.token);
    
      setTokenOffice(json.data.token);
      setIsLoginOffice(true);
      setTitleModal(`Bienvenido ${data.email}`);
      setMessageModal(json.message);
      setSuccess(true);
      setModalShow(true);
      setUserState("office");
    } catch (error) {
      if (error.message === "Could office not register") {
        let options = error.option;
        
        try {
          let res = await fetch("https://eb-arquitech.lunacrisdev.xyz/clients/login", options);
          let json = await res.json();
          if (!res.ok)
            throw { error: json.error, message: json.message };

          setTokenOffice(json.data.token);
          setIsLoginOffice(true);
          console.log(tokenOffice);
          localStorage.setItem("token", json.data.token);
          setTitleModal(`Bienvenido ${data.email}`);
          setMessageModal(json.message);
          setSuccess(true);
          setModalShow(true);
          setUserState("customer");
        } catch (error) {

            setTitleModal("Error");
            setMessageModal(error.message);
            setErrorC(error.error);
            setModalShow(true);

        }
        
      }
    }
  }

  return (
    <>
      <section className="input-login">
        <h3>Bienvenido a Arquitetch</h3>
        <p>Login</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-login"
          id="login"
        >
          <label>
            Email:
            <input {...register("email", { required: true })} type="email" />
            {errors.email?.type === "required" && <p>El email es requerido.</p>}
          </label>
          <label>
            Password:
            <input
              {...register("password", { required: true })}
              type="password"
            />
            {errors.password?.type === "required" && (
              <p>El password es requerido.</p>
            )}
          </label>
          <input className="btn-login" type="submit" value="Login" />
        </form>
      </section>
    </>
  );
}

export default LoginI