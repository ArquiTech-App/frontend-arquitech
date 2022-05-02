import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function clientHome () {
    return {
        <div className={styles.components}> 
        <Link href="/ClientHome"> Dashboard Client </Link>  
        </div>
    }
}

