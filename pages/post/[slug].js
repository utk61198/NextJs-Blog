import React from "react"
import Head from "next/head"
import Layout from "../../components/Layout"
import Post from "../../components/Post"
import Markdown from "react-markdown"
import Author from "../../components/Author"



export default function Slug({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.fields.title} — My Next.js Static Blog</title>
      </Head>
      <div>
    <article>
      <header>
        <h1>{post.fields.title}</h1>
        <small>
          <p>Published: {Date(post.fields.publishedDate).toString()}</p>
        </small>
      </header>
      <section>
        <Markdown source={post.fields.description} escapeHtml={true} />
      </section>
      <footer>
        <Author author={post.fields.author} />
      </footer>
      <style jsx>{`
        header {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #949499;
        }
        header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        /*
        The section :global() selector is necessary to target the content
        that will be rendered by the Markdown component.
        */
        section :global(h1) {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        section :global(h2) {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        section :global(p) {
          line-height: 1.75rem;
          margin: 2rem 0;
        }
        section :global(img) {
          max-width: 100%;
        }
        section :global(blockquote) {
          border-left: 0.5rem solid #949499;
          margin-left: 0;
          padding: 0 2rem;
          color: #646469;
        }
        section :global(li) {
          margin: 1rem 0;
          line-height: 1.5rem;
        }
        section :global(hr) {
          border: none;
          background: #949499;
          height: 1px;
        }
      `}</style>
    </article>
    </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  // Fetch all results where `fields.slug` is equal to the `slug` param
  const result = await client
    .getEntries({
      content_type: "blogpost",
      "fields.slug": context.params.slug,
    })
    .then((response) => response.items)

  // Since `slug` was set to be a unique field, we can be confident that
  // the only result in the query is the correct post.
  const post = result.pop()

  // If nothing was found, return an empty object for props, or else there would
  // be an error when Next tries to serialize an `undefined` value to JSON.
  if (!post) {
    return { props: {} }
  }

  // Return the post as props
  return {
    props: {
      post
    },
  }
}

export async function getStaticPaths() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  // Query Contentful for all blog posts in the space
  const posts = await client
    .getEntries({ content_type: "blogpost" })
    .then((response) => response.items)

  // Map the result of that query to a list of slugs.
  // This will give Next the list of all blog post pages that need to be
  // rendered at build time.
  const pt = posts.map(({ fields: { slug } }) => ({ params: { slug } }))
  console.log(pt)

  return {
    paths:pt,
    fallback:true
   
  }
}