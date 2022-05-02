import React from 'react';
import Image from 'next/image'
import Logo from '../public/logo.svg';
import home from '../public/btn-home.svg'
import dashboard from '../public/btn-dashboard.svg'
import gantt from '../public/btn-gantt.svg'
import view from '../public/btn-view.svg'
import documents from '../public/btn-document.svg'
import contracts from '../public/btn-contracts.svg'
import settings from '../public/btn-settings.svg'
import Link from 'next/link';


export default function Aside(props) {

    

  return (
    <aside className='aside-layout'>
        <div className="logo-aside">
            <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={150}
            />
        </div>
        <div className="menu-aside">
            <div className="buttons-aside">
                <Link href='/home'>

                <button className="btn-aside">
                    <Image
                    src={home}
                    alt="logo-home"
                    />
                    Home
                </button>
                    </Link>

                <Link href='/dashboard'>

                <button className="btn-aside">
                    <Image
                    src={dashboard}
                    alt="logo-dashboard"
                    />
                    Dashboard
                </button>
                    </Link>
                <Link href='/gantt'>

                <button className="btn-aside">
                    <Image
                    src={gantt}
                    alt="logo-gantt"
                    />
                    Gantt
                </button>
                    </Link>
                <Link href='/documents'>

                <button className="btn-aside">
                    <Image
                    src={documents}
                    alt="logo-documents"
                    />
                    Documents
                </button>
                    </Link>
                <Link href='/Viewer'>

                <button className="btn-aside">
                    <Image
                    src={view}
                    alt="logo-view"
                    />
                    View 3D
                </button>
                    </Link>
                <Link href='/contracts'>

                <button className="btn-aside">
                    <Image
                    src={contracts}
                    alt="logo-contracts"
                    />
                    Contracts
                </button>
                    </Link>
                <Link href='/settings'>

                <button className="btn-aside">
                    <Image
                    src={settings}
                    alt="logo-settings"
                    />
                    Settings
                </button>
                    </Link>
            </div>
        </div>
    </aside>
  )
}
