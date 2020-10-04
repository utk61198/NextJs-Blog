import Head from "next/head"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import { makeStyles } from '@material-ui/core/styles';
import { Height } from "@material-ui/icons";




export default function Index({ posts }) {




  return (
    <Layout>
      <PostList posts={posts} />
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