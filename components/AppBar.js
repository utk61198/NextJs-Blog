
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavDropdown,Form,FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {makeStyles,Typography} from "@material-ui/core"
import Link from "next/link"
import MenuIcon from '@material-ui/icons/Menu';


const useStyles=makeStyles({

appbar:{

  backgroundColor:"#101820FF",
  color:"#FEE715FF"
},
navlink:{
  color:"#FEE715FF",
  fontFamily:"Oswald",
  textDecoration:"none"
  
}

})

export default function Appbar(){
  const classes=useStyles()
  




  return(
    <div>
    <head>
  <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
  </head>

<Navbar collapseOnSelect expand="lg" className={classes.appbar}>

<Navbar.Brand> <Link href="/">
          <Typography variant="h3" noWrap  align="left" paddingTop="1%">
            <img src="/logo.png" style={{
   height:"90px",
   cursor:"pointer"

            }}/>
            </Typography>
          </Link></Navbar.Brand>



  <Navbar.Toggle color="#FEE715FF" aria-controls="responsive-navbar-nav">

    <MenuIcon className={classes.navlink}/>
  </Navbar.Toggle>





  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">


      <Nav.Link href="/" ><Typography variant="h5" className={classes.navlink}>
      BLOG
        </Typography></Nav.Link>


        <Nav.Link href="/featured" ><Typography  variant="h5" className={classes.navlink}>
        FEATURED
        </Typography></Nav.Link>


        <Nav.Link href="/about"><Typography  variant="h5" className={classes.navlink}>
        ABOUT
        </Typography></Nav.Link>


        <Nav.Link href="/contact"><Typography  variant="h5" className={classes.navlink}>
       CONTACT
        </Typography></Nav.Link>
       
   
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    </div>



    
  )
}