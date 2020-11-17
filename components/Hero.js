
import { makeStyles } from '@material-ui/core/styles';
import { Height } from "@material-ui/icons";

import { Grid,Container,Typography} from "@material-ui/core";
import Head from "next/head"
import Typical from 'react-typical'
import React, {Component} from 'react';
import Typist from 'react-typist';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import {motion} from "framer-motion"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




const useStyles = makeStyles((theme) => ({


  container:{
    //  background:"url(/herobg2.jpg)",

    // background: "#232526", /* fallback for old browsers */
    // background: "-webkit-linear-gradient(to right, #414345, #232526)",  /* Chrome 10-25, Safari 5.1-6 */
    // background: "linear-gradient(to right, #414345, #232526)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background:"#101820FF",
    height: '85vh',
    width:'94%',
    marginLeft:"3%",
  

    // width:"80%",
    backgroundSize:"cover",

  },
  expandmore:{
    fontSize:"50px",
    color:"#FEE715FF"



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
    justify="space-evenly"
    alignItems="center"
    className={classes.container}
    >  
    
<motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 360, 360, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}

    transition={{
      duration: 5,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      loop: Infinity,
      repeatDelay: 1
    }}
    style={{

    }}
  >
   <img src="/heroloader.png" style={{
   height:"90px",

            }}/>

</motion.div>


<Typist>
  <Typography variant="h4" component="p" align="center"
  style={{
    color:"#FEE715FF",
    fontFamily:"Monoton"
    
   
  }}> 
  
TECHNOLOGY 
<br/>
BLOG




</Typography>



</Typist>
<motion.div
      animate={{
        scale: [1, 1, 1.2, 1.2, 1],
        rotate: [0, 0, 0, 0, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay:0.1
      }}
    >
<ExpandMoreIcon className={classes.expandmore}></ExpandMoreIcon>
</motion.div>






  </Grid>

  
  </div>
    




  )
}


