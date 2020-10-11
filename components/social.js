import  {Grid,makeStyles} from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles=makeStyles({

icon:{

fontSize:"200%",
marginRight:"5%",
marginLeft:"5%"


}

})


export default function Social()
{  const classes=useStyles()




    return(
    
      <Grid
      container
  direction="row"
  justify="center"
  alignItems="center"
>
    <GitHubIcon className={classes.icon} />
    <LinkedInIcon  className={classes.icon}/>
    <InstagramIcon  className={classes.icon}/>
   


      </Grid>)



    
}