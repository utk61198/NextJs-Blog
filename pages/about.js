import React from "react"
import { render } from "react-dom"
import dynamic from "next/dynamic"
const DynamicComponent2 = dynamic(() => import('../components/Layout'))
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles=makeStyles({



container:{

display:"flex",
flexDirection:"column",
justify:"center",
width:"80%",


}





})


export default function About()
{
   
  const classes=useStyles()


return(
<DynamicComponent2>
   <div className={classes.container}>



   <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>


   </div>






</DynamicComponent2>










       
)
}