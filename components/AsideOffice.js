import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";
import home from "../public/btn-home.svg";
import dashboard from "../public/btn-dashboard.svg";

import settings from "../public/btn-settings.svg";
import clients from "../public/people-team-svgrepo-com.svg"

export default function AsideOffice() {
  return (
    <aside className="aside-layout">
      <div className="logo-aside">
        <Image src={logo} alt="Logo" width={150} height={150} />
      </div>
      <div className="menu-aside">
        <div className="buttons-aside">
          <Link href="home">
            <button className="btn-aside">
              <Image src={home} alt="logo-home" />
              Home
            </button>
          </Link>
          <Link href="clients">
            <button className="btn-aside">
              <Image src={clients} alt="logo-clients" />
              Clients
            </button>
          </Link>
          <Link href="dashboard">
            <button className="btn-aside">
              <Image src={dashboard} alt="logo-dashboard" />
              Dashboard
            </button>
          </Link>
         
          <Link href="settings">
            <button className="btn-aside">
              <Image src={settings} alt="logo-settings" />
              Settings
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
}
