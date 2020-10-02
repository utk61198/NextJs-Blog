import React from "react"
import Link from "next/link"
import { Picture } from 'react-responsive-picture';
import { useMediaQuery } from 'react-responsive'



export default function PostList({ posts = [] }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })









  return (
    <div>
    <section>
      {posts.map((post) => (
        <article key={post.sys.id}>
          <header>
            <h1>
              <Link href={`/post/${post.fields.slug}`}>
                <a>{post.fields.title}</a>
              </Link>
            </h1>
            <small>
              <p>Published: {Date(post.fields.publishedDate).toString()}</p>
            </small>
           
            
          </header>
          {isDesktopOrLaptop && <p>{post.fields.description}</p>}

          {isTabletOrMobileDevice && <p>{post.fields.description}</p>}

        
          <p>
            <Link href={`/post/${post.fields.slug}`}>
              <a>Continue reading »</a>
            </Link>
          </p>
        </article>
      ))}
      
    </section>
    
    </div>
  )
}