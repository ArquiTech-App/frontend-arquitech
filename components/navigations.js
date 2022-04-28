import Link from 'next/link'

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href='/'>
          <a>Index</a>
        </Link>
      </li>
      <li>
        <Link href='/login'>
          <a>login</a>
        </Link>
      </li>
      <li>
        <Link href='/gannt'>
          <a>gannt</a>
        </Link>
      </li>

      <li>
        <Link href='/documents'>
          <a>documents</a>
        </Link>

      </li>
      <li>
        <Link href='/calendar'>
          <a>calendar</a>
        </Link>
      </li>
      <li><Link href='/payments'>
        <a>payments</a>
          </Link>
      </li>
      <li><Link href='/settings'>
        <a>settings
        </a>
          </Link>
      </li>
      <li><Link href='/view_3d'>
        <a>view_3d</a>
          </Link>
      </li>

    </ul>
  )
}

export default Navigation
