import { useState } from "react";
import Image from "next/image";
import Navigation from "../components/navigations";
import header from "../public/header-index.svg";
import fondo from "../public/fondo-index.svg";
import logo from "../public/logo.svg";

const Index = () => {
  return (
    <div className="container-index">
      <div className="header-index">
        <div>
          <Image src={fondo} alt="header"/>
        </div>
        <div className="div-header">
          <div className="navigator-index">
            <Navigation />
            <Image src={logo} alt="logo"/>
          </div>
        </div>
      </div>

      <div className="container-vid">
        

        <h1>
          THE <span>REPORTING</span> APP FOR THE BEST ARCHITECTURE PROJECTS
        </h1>
        
        <video className="video-container" autoPlay muted loop>
          <source
            src="https://bucket-deveckor.s3.us-east-2.amazonaws.com/Fondo_arquitech.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Index;
