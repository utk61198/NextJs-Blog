import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Social from "./social"

function Copyright() {

  
  return (
    <Typography gutterBottom style={{color:"white",fontSize:"130%",marginBottom:"3%"}} align="center">
      {'Copyright © '}
      <Link href="/" style={{color:"white"}}>
        Daily Reboots
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '20vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:"#282828",
    color:"white"
  },
}));

export default function FooterPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
     
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1"></Typography>
          <Copyright />
          <Social/>
         
        </Container>
      </footer>
    </div>
  );
}