import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import emailjs from 'emailjs-com';
import Layout from "../components/Layout"
import dynamic from 'next/dynamic'
import MailRoundedIcon from '@material-ui/icons/MailRounded';


const DynamicComponent2 = dynamic(() => import('../components/Layout'))


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:"white"

    
  },
 
    icon:{
      margin: theme.spacing(1),
      fontSize:"100px",

    },

  form: {
    width: '80%', 
    backgroundColor:"white",
    paddingBottom:"10%",
    paddingTop:"10%",
    paddingRight:"1%"
  },
  submit: {
    margin: theme.spacing(1),
  },
  inp:{
    margin:theme.spacing(1),
    color:"white"
  }
}));

export default function SignUp() {
  const classes = useStyles();
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('test_id', 'template_prxfskj', e.target, 'user_TV87Rf27nQivxtdTE2V0B')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <DynamicComponent2>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <MailRoundedIcon className={classes.icon}/>
        
        <form className={classes.form} noValidate onSubmit={sendEmail}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                className={classes.inp}
                inputProps={{ style: { fontFamily: 'nunito', color: 'white',borderColor:"white",borderBottomColor:"white",borderBlockColor:"white"}}}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                className={classes.inp}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className={classes.inp}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                name="message"
                label="Message"
                type="test"
                id="text"
                className={classes.inp}

                
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Leave a message
          </Button>
          <Grid container justify="flex-end">
            
          </Grid>
        </form>
      </div>
  
    </Container>
    </DynamicComponent2>
  );
}