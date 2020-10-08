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


const useStyles = makeStyles({
  root: {
    borderRadius:"5%"

   
     
  },
  media: {
    height: 200,
  },
  container:{
   
   display:"flex",
   flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    marfinLeft:"5%",

  
    // backgroundColor:"#90caf9"

    
   },
   
   btn:{
    //  color:"black",
     fontStyle:"italic",
     fontWeight:"bold",
     
   }
});

export default function PostList({ posts = [] }) {
  const classes = useStyles();

  return (
<div className={classes.container}>

    
    {posts.map((post) => (

<article key={post.sys.id}>



<Grid
  container
  direction="row"
  justify="space-around"
  alignItems="center"
  >

<Paper
elevation={5}
  style={{
    maxWidth:400,
  
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
 paddingTop:"1%",
color:"white",
marginBottom:"2%"

}}>
<Typography gutterBottom variant="h4" component="h2" >
           <u> <a  href={`/post/${post.fields.slug}`}>{post.fields.title}</a> </u> </Typography>
            
            <Typography gutterBottom variant="body2" color="inherent" >
            {Date(post.fields.publishedDate).toString()} </Typography>
<Typography>
<Typography gutterBottom variant="body1" >
           {post.fields.description}  </Typography>

<Button size="small" color="primary"  href={`/post/${post.fields.slug}`} className={classes.btn}>
Read more...</Button>
</Typography>



</div>



</Grid>

 



    
    </article>

  ))}
  </div>


  )
}