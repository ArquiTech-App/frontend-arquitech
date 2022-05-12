import Link from 'next/link' 

const Navigation = () => {
  return (
    
        <ul className="nav">

        <Link href='/CreateAccount'>
          <li>Crear Cuenta</li>
        </Link>
        <Link href='/Pricing'>
          <li>Precios</li>
        </Link>
        <Link href='/LearnAndHelp'>
          <li>Aprende y Ayuda</li>
        </Link>
        <Link href='login'>
          <li>Login</li>
        </Link>
        </ul>
     
  )
}

export default Navigation
