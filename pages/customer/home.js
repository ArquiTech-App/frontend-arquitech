import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'


export default function home() {
  return (
      <Layout>
        <Link href="/CustomerHome"> Dashboard Client </Link>
          
      </Layout>
  )
}
