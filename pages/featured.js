import Layout from "../components/Layout"
import PostList from "../components/PostList"
import { makeStyles } from '@material-ui/core/styles';
import { Height } from "@material-ui/icons";
import SideList from "../components/SideList"
import { Grid,Container,Typography} from "@material-ui/core";
import Head from "next/head"
import Typical from 'react-typical'
import React, {Component} from 'react';
import Typist from 'react-typist';
import Hero from "../components/Hero"
import dynamic from 'next/dynamic'


const DynamicComponent2 = dynamic(() => import('../components/Layout'))






const useStyles = makeStyles((theme) => ({

  grid:{
    // background: 'rgb(177,179,171)',
    // background: 'radial-gradient(circle, rgba(177,179,171,1) 0%, rgba(82,84,82,1) 100%)',
    // backgroundImage:'url(/bg.jpg)',
    // Height:"100%",
    // backgroundPosition:"center",
    // backgroundRepeat:"no-repeat",
    // backgroundSize:"cover"
    
  },
 
  
 
  
}));
export default function Featured({ posts }) {
  const classes=useStyles()




  return (
  <div>
      <head>
     
        
     
      </head>


    <DynamicComponent2>

      {/* <Hero/> */}
   
   

      <PostList posts={posts}/>
      {/* <SideList posts={posts}/> */}
  
    </DynamicComponent2>
    </div>
    




  )
}


export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
  // Fetch all entries of content_type `blogPost`

  const posts = await client
    .getEntries({ content_type: "blogpost" })
    .then((response) => response.items)

  return {
    props: {
      posts,
    },
  }}