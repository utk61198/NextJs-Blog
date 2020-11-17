import React from 'react';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import {Card,Grid} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Autorenew, FullscreenExit,Paper} from '@material-ui/core';
import { palette } from '@material-ui/system';
import Particles from "react-tsparticles";
import Post from './Post';
import { Divider } from '@material-ui/core';
import { motion } from "framer-motion"





const useStyles = makeStyles({
  root: {
    borderRadius:"5%"

   
     
  },

  container:{
   
   display:"flex",
   flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    marginTop:"2%"

  
    // backgroundColor:"#90caf9"

    
   },
   
   btn:{
    //  color:"black",
     fontStyle:"italic",
     fontWeight:"bold",
     color:"white",
     fontSize:"18px"
     
   },
   link:{
     textDecoration:"none",
     color:"#FEE715FF"
   }
});


export default function PostList({ posts = [] }) {
  const classes = useStyles();

  return (

<div className={classes.container}>
  <head>
  <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
  </head>

    
    {posts.map((post) => (



<article key={post.sys.id}>
  

<motion.div whileHover={{ scale: 1.1 }} 
// whileTap={{ scale: 1 }
// }


>
<Grid
  container
  direction="row"
  justify="space-around"
  alignItems="center"
  >
    


 
<Paper
elevation={5}
  style={{
    maxWidth:500,
  
    marginBottom:"2%",

    
    
 
   

  }}
>

  <Card style={
    {
    }
  }>
  <CardActionArea>
        <CardMedia
          component="img"
         
          image={post.fields.img}
       />

        </CardActionArea>

  </Card>


</Paper>

<div style={{
maxWidth:700,
 paddingLeft:"5%",
color:"#F9D342",
marginBottom:"2%"

}}>
  
<Typography gutterBottom variant="h4" component="h2"
style={{
  fontFamily:"Oswald"
}} >
            <a className={classes.link} href={`/${post.fields.slug}`}>{post.fields.title}</a>  </Typography>
            
            <Typography gutterBottom variant="body2" color="inherit"
            style={{
              color:"white"
            }}  >
            {Date(post.fields.publishedDate).toString()} </Typography>
<Typography>
<Typography gutterBottom variant="body1" style={{
  color:"white",
  fontSize:"21px",
  lineHeight:"160%",
  fontFamily:"Roboto"
  
}} >
           {post.fields.description}  </Typography>

<Button size="small"   href={`/${post.fields.slug}`} className={classes.btn}>
<u>Read more..</u></Button>
</Typography>




</div>




</Grid>
</motion.div>


<Divider variant="middle"
style={{
  color:"white",
  backgroundColor:"white",
  marginBottom:"4%",
  marginTop:"4%"
}}></Divider>

    </article>


  ))}
  </div>



  )
}