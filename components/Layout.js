import React from "react"
import Head from "next/head"
import Link from "next/link"
import { useMediaQuery } from 'react-responsive'


export default function Layout({ children }) {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })








  return (
    <div>
      <Head>
        <title>Tech Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>
          <Link href="/">
            <a>Featured Posts</a>
          </Link>
        </h1>
      </header>
      <main>{children}</main>
      </div>
  )
}