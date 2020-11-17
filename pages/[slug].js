import Layout from "../components/Layout"
import PostList from "../components/PostList"
import { makeStyles } from '@material-ui/core/styles';
import { Height } from "@material-ui/icons";
import SideList from "../components/SideList"
import { Grid,Container,Typography} from "@material-ui/core";
import Head from "next/head"
import Typical from 'react-typical'
import React, {Component} from 'react';

import dynamic from 'next/dynamic'
import Comments from "../components/comments"


const DynamicComponent = dynamic(() => import('../components/Post'))
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
  container:{
    display:"flex",
    alignSelf:"center",
    flexDirection:"column",
      width:"80%",
      marginLeft:"10%"
    


  }
 
  
 
  
}));
export default function Slug({ post }) {
  const classes=useStyles()




  return (
  <div>
      <head>
     
        
     
      </head>


    <DynamicComponent2>

   
   

      <DynamicComponent post={post}/>
      <div className={classes.container}>
      <Comments fullUrl={post.fields.slug} id={post.fields.slug} />

      </div>

  
    </DynamicComponent2>




    </div>
    




  )
}
export async function getStaticProps(context) {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  // Fetch all results where `fields.slug` is equal to the `slug` param
  const result = await client
    .getEntries({
      content_type: "blogpost",
      "fields.slug": context.params.slug,
    })
    .then((response) => response.items)

  // Since `slug` was set to be a unique field, we can be confident that
  // the only result in the query is the correct post.
  const post = result.pop()

  // If nothing was found, return an empty object for props, or else there would
  // be an error when Next tries to serialize an `undefined` value to JSON.
  if (!post) {
    return { props: {} }
  }

  // Return the post as props
  return {
    props: {
      post
    },
  }
}

export async function getStaticPaths() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  // Query Contentful for all blog posts in the space
  const posts = await client
    .getEntries({ content_type: "blogpost" })
    .then((response) => response.items)

  // Map the result of that query to a list of slugs.
  // This will give Next the list of all blog post pages that need to be
  // rendered at build time.
  const pt = posts.map(({ fields: { slug } }) => ({ params: { slug } }))

  return {
    paths:pt,
    fallback:false
   
  }
}