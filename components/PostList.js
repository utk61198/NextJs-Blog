// import React from "react"
// import Link from "next/link"
// import { Picture } from 'react-responsive-picture';
// import { useMediaQuery } from 'react-responsive'




// export default function PostList({ posts = [] }) {
//   const isDesktopOrLaptop = useMediaQuery({
//     query: '(min-device-width: 1224px)'
//   })
//   const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
//   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
//   const isTabletOrMobileDevice = useMediaQuery({
//     query: '(max-device-width: 1224px)'
//   })
//   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
//   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

// return (
//     <div>
//     <section>
//       {posts.map((post) => (
//         <article key={post.sys.id}>
//           <header>
//             <h1>
//               <Link href={`/post/${post.fields.slug}`}>
//                 <a>{post.fields.title}</a>
//               </Link>
//             </h1>
//             <small>
//               <p>Published: {Date(post.fields.publishedDate).toString()}</p>
//             </small>
           
            
//           </header>
//           {isDesktopOrLaptop && <p>{post.fields.description}</p>}

//           {isTabletOrMobileDevice && <p>{post.fields.description}</p>}

        
//           <p>
//             <Link href={`/post/${post.fields.slug}`}>
//               <a>Continue reading »</a>
//             </Link>
//           </p>
//         </article>
//       ))}
      
//     </section>
    
//     </div>
//   )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Autorenew, FullscreenExit } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth:500,
  },
  media: {
    height: 170,
  },
  container:{
   display:"flex",
   flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"

    
   }
});

export default function PostList({ posts = [] }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
    {posts.map((post) => (

<article key={post.sys.id}>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={post.fields.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.fields.title}  </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {post.fields.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
     
        <Button size="small" color="primary" href={`/post/${post.fields.slug}`}>
Continue reading...</Button>
      </CardActions>
    </Card>
    </article>

  ))};
  </div>)
}