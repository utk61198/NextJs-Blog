import React from "react"
import Head from "next/head"
import Link from "next/link"
import { useMediaQuery } from 'react-responsive'
import Appbar from "./AppBar"
import { CallMissedSharp, Height } from "@material-ui/icons"
import { makeStyles } from '@material-ui/core/styles';
import FooterPage from "./footer"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavDropdown,Form,FormControl} from 'react-bootstrap'
import {Grid} from '@material-ui/core'
import SideList from './SideList'






const useStyles = makeStyles((theme) => ({
  root:{
    // background: 'rgb(177,179,171)',
    // background: 'radial-gradient(circle, rgba(177,179,171,1) 0%, rgba(82,84,82,1) 100%)',
    // backgroundColor:"white"
    background: "#101820FF", /* fallback for old browsers */
  },
  bgv:{
    
height:"100%",
width: "100%",
float: "left",
top: 0,
padding: "none",

  }
  
}));

export default function Layout({ children }) {

  const classes=useStyles()





  return (
    <div className={classes.root}>
     
      <Head>
        <title>DailyReboots</title>
        <link rel="icon" href="/favicon.ico" />
        <script data-ad-client="ca-pub-9565175122331472" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Appbar/>
    <main className={classes.main}>{children}</main>
<FooterPage></FooterPage>
     
      </div>
  )
}


