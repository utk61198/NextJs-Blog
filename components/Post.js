import React from "react"
import Markdown from "react-markdown"
import Author from "./Author"
import Head from "next/head"
import Link from "next/link"
import { Typography ,Paper} from '@material-ui/core';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



const useStyles = makeStyles({

  root:{maxWidth:700,
  marginBottom:"5%",
  marginRight:"3%",
  marginLeft:"3%",
   
},
media: {
  height: 200,
},
container:{
 
 display:"flex",
 flexDirection:"column",
  alignItems:"center",
  justifyContent:"center",
  maxWidth:"80%",
  color:"#F9D342",
  marginLeft:"10%"


  // backgroundColor:"#90caf9"

  
 },
 cardcontent:{
   backgroundColor:"white",
   color:"black"

 }
});




export default function Post({ post }) {
    console.log("in here")
    const classes=useStyles();
  return (
    
      <div className={classes.container}>
      <Typography gutterBottom variant="h4" component="h2"
      align="center"
style={{
  fontFamily:"Oswald"
}} >

          {post.fields.title}
          </Typography>
          
<Paper
elevation={10}
  style={{
    maxWidth:600,
  
    marginTop:"3%",
    
    
 
   

  }}
>

  <Card>
  <CardActionArea>
        <CardMedia
          component="img"
         
          image={post.fields.img}
       />

        </CardActionArea>

  </Card>


</Paper>
          
          <Typography gutterBottom variant="caption" align="center" color="inherent">
            <p>{Date(post.fields.publishedDate).toString()}</p>
            </Typography>
            <Typography gutterBottom variant="body1" style={{
  color:"white",
  fontSize:"21px",
  lineHeight:"160%",
  fontFamily:"Roboto"
  
}} >
          
          {post.fields.body}
         </Typography>



    {/* <article>
     
      <Card className={classes.root} alignItems="center">
      <CardActionArea>
       <CardContent className={classes.cardcontent}>
       <Typography variant="h3" align="center">
          {post.fields.title}

        </Typography>
        <Typography variant="caption" align="center" color="inherent">
            <p>{Date(post.fields.publishedDate).toString()}</p>
            </Typography>

       </CardContent>
       
        <CardMedia
          className={classes.media}
          image={post.fields.img}
        />
        
        <CardContent className={classes.cardcontent}>
         
          <Typography variant="body1">
          
           {post.fields.body}
          </Typography>

          
        </CardContent>
    
      </CardActionArea>
  
    </Card>
    <Author author={post.fields.author} />
    <div className={classes.container}>
   
    
    </div>


       


      
    </article> */}
 
    </div>
  )
}