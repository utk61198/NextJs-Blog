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
    color:"primary.main",
    
  },
 
  
}));

export default function Layout({ children }) {

  const classes=useStyles()





  return (
    <div className={classes.root}>
      <Head>
        <title>Tech Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header >
        <Appbar/>
        <h1>
          {/* <Link href="/">
            <a>Featured Posts</a>
          </Link> */}
        </h1>
      </header>
      <Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="center"
  
> <main>{children}</main>
<SideList/></Grid>
     
      </div>
  )
}