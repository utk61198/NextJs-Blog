import React from "react"
import Markdown from "react-markdown"
import Author from "./Author"
import Head from "next/head"
import Link from "next/link"
import { Typography } from '@material-ui/core';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



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
   display:"flex",
   flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    maxWidth:"80%"
    // backgroundColor:"#90caf9"

    
   }
});




export default function Post({ post }) {
    console.log("in here")
    const classes=useStyles();
  return (
      <div className={useStyles.container}>
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
      <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image={post.fields.img}
        /> */}
        <CardContent>
         
          <Typography variant="body1" color="textPrimary">
           {post.fields.body}
          </Typography>
        </CardContent>
      </CardActionArea>
  
    </Card>
    
      </section>

        <Author author={post.fields.author} />


      
    </article>
    </div>
  )
}