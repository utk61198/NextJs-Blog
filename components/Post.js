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
    maxWidth:"500",
    marginBottom:"5%",
    marginTop:"5%",
    marginRight:"3%",
    marginLeft:"3%",
   borderRadius:"3%"
    
  },
  media: {
    height: 400,
  },
  container:{
   display:"flex",
   flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    marginLeft:"auto",
    marginRight:"auto"

    
   },
   cardcontent:{
    backgroundColor:"#282828",
    color:"white"

  }
});




export default function Post({ post }) {
    console.log("in here")
    const classes=useStyles();
  return (
      <div className={useStyles.container}>
    <article>
      <header>
     
            <Typography variant="caption" align="center" color="inherent">
            <p>{Date(post.fields.publishedDate).toString()}</p>
            </Typography>
        
      </header>
      <Card className={classes.root} alignItems="center">
      <CardActionArea>
       <CardContent>
       <Typography variant="h3" color="primary">
          {post.fields.title}

        </Typography>
       </CardContent>
       
        <CardMedia
          className={classes.media}
          image={post.fields.img}
        />
        
        <CardContent className={classes.cardcontent}>
         
          <Typography variant="body2" component="p">
          
           {post.fields.body}
          </Typography>

          
        </CardContent>
    
      </CardActionArea>
  
    </Card>
    <div className={classes.container}>
    <Author author={post.fields.author} />
    
    </div>


       


      
    </article>
    </div>
  )
}