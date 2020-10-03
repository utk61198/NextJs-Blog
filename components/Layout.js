import React from "react"
import Head from "next/head"
import Link from "next/link"
import { useMediaQuery } from 'react-responsive'
import Appbar from "./AppBar"


export default function Layout({ children }) {




  return (
    <div>
      <Head>
        <title>Tech Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Appbar/>
        <h1>
          {/* <Link href="/">
            <a>Featured Posts</a>
          </Link> */}
        </h1>
      </header>
      <main>{children}</main>
      </div>
  )
}