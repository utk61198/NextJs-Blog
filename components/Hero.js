
import { makeStyles } from '@material-ui/core/styles';
import { Height } from "@material-ui/icons";

import { Grid,Container,Typography} from "@material-ui/core";
import Head from "next/head"
import Typical from 'react-typical'
import React, {Component} from 'react';
import Typist from 'react-typist';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';





const useStyles = makeStyles((theme) => ({


  container:{
    //  background:"url(/herobg2.jpg)",

    background: "#232526", /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #414345, #232526)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #414345, #232526)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    

    height: '85vh',
    width:'94%',
    marginLeft:"3%",
  

    // width:"80%",
    backgroundSize:"cover",

    // display:"flex",
    // flexDirection:"column",
    //  alignItems:"center",
    //  justifyContent:"center",
 
  }

 
 
  
}));
export default function Hero() {
  const classes=useStyles()




  return (<div>
    <head>
       <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet"></link>
       <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"></link>
    </head>
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    className={classes.container}
    >
      <Typography
      variant="h2" align="center"
  style={{
    color:"white",
    fontFamily:"Special Elite"
    
   
  }}>

  </Typography>

<Typist>
  <Typography variant="h4" component="p" align="center"
  style={{
    color:"#FEE715FF",
    fontFamily:"Monoton"
    
   
  }}> 
  


Welcome &nbsp; to &nbsp; Daily &nbsp; Reboots 
&nbsp;
<br></br>
<br>
</br>
  Latest &nbsp;technolology&nbsp;  updates &nbsp;



  {/* <Typist.Backspace count={10} delay={350} />
  <span>Development</span>
  <Typist.Backspace count={11} delay={350} />
  <span>News</span>
  <Typist.Backspace count={4} delay={350} /> */}


</Typography>



</Typist>



  </Grid>
  </div>
    




  )
}


