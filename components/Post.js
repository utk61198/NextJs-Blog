import React from "react"
import Markdown from "react-markdown"
import Author from "./Author"
import Head from "next/head"
import Link from "next/link"
import { Typography } from '@material-ui/core';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';



const usestyle=makeStyles({

  container:{
    display:"flex",
   
     alignItems:"center",
     justifyContent:"center",
     width:"80%"

  }
});




export default function Post({ post }) {
    console.log("in here")
    const style=usestyle();
  return (
      <div className={usestyle.container}>
    <article>
      <header>
        <Typography variant="h3" align="center" color="primary">
          {post.fields.title}

        </Typography>
            <Typography variant="caption" align="center" color="inherent">
            <p>Published: {Date(post.fields.publishedDate).toString()}</p>
            </Typography>
        
      </header>
      <section>
        <Typography variant="body1" align="justified" color="textPrimary">
        {post.fields.body} 

        </Typography>
      </section>
      <footer>
        <Author author={post.fields.author} />
      </footer>
      
    </article>
    </div>
  )
}