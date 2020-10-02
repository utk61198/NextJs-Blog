import React from "react"
import Markdown from "react-markdown"
import Author from "./Author"
import Head from "next/head"
import Link from "next/link"


export default function Post({ post }) {
    console.log("in here")
  return (
      <div>
    <article>
      <header>
        <h1>{post.fields.title}</h1>
        <small>
          <p>Published: {Date(post.fields.publishedDate).toString()}</p>
        </small>
      </header>
      <section>
        <Markdown source={post.fields.body} escapeHtml={true} />
      </section>
      <footer>
        <Author author={post.fields.author} />
      </footer>
      
    </article>
    </div>
  )
}