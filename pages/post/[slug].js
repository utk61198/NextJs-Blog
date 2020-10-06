import React from "react"
import Head from "next/head"
import Layout from "../../components/Layout"
import Post from "../../components/Post"
import Markdown from "react-markdown"
import Author from "../../components/Author"
import { makeStyles, rgbToHex } from '@material-ui/core/styles';





const useStyles = makeStyles({
  root: {
    maxWidth:700,
    marginBottom:"5%",
    marginTop:"5%",
    marginRight:"3%",
    marginLeft:"3%",
     borderRadius:"3%"
     
  },
  media: {
    height: 200,
  },
  container:{
    marginTop:"5%",
   display:"flex",
   flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",

  
    // backgroundColor:"#90caf9"

    
   }
});

export default function Slug({ post }) {
  const classes = useStyles();


  return (
    <Layout>
      
      <Head>
        <title>{post.fields.title} — My Next.js Static Blog</title>
      </Head>
      <div className={classes.container}>
     <Post post={post}/>
     </div>
       
    </Layout>
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