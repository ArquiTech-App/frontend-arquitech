import React from 'react'
import LayoutCustomers from '../../components/LayoutCustomers'
import Link from 'next/link'


export default function home() {
  return (
      <LayoutCustomers>
        <Link href="/CustomerHome"> Dashboard Client </Link>
          
      </LayoutCustomers>
  )
}

