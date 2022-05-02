import Link from 'next/link'

const Navigation = () => {
  return (
    
        <ul className="nav">

        <Link href='/CreateAccount'>
          <li>Create Account</li>
        </Link>
        <Link href='/Pricing'>
          <li>Pricing</li>
        </Link>
        <Link href='/LearnAndHelp'>
          <li>Learning & Help</li>
        </Link>
        <Link href='/login'>
          <li>Login</li>
        </Link>
        </ul>
     
  )
}

export default Navigation
