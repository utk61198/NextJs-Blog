import Head from "next/head"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import { makeStyles } from '@material-ui/core/styles';
import { Height } from "@material-ui/icons";
import SideList from "../components/SideList"
import { Grid } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root:{
    background: 'rgb(63,94,251)',
background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,70,1) 100%)'
    
  },
  grid:{
    background: 'rgb(63,94,251)',
    background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,70,1) 100%)'
  }
 
  
}));
export default function Index({ posts }) {
  const classes=useStyles()




  return (
    <Layout>
        <Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="stretch"
  className={classes.grid}
  
> 
      <PostList posts={posts}/>
      <SideList posts={posts}/>
      </Grid>
    </Layout>
    




  )
}


export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
  // Fetch all entries of content_type `blogPost`

  const posts = await client
    .getEntries({ content_type: "blogpost" })
    .then((response) => response.items)

  return {
    props: {
      posts,
    },
  }}