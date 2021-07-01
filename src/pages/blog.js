import React from 'react'
import * as styles from './blog.module.css'
import Navbar from '../components/navbar/Navbar'
import { useStaticQuery, graphql } from "gatsby"
import Entry from '../components/entry/Entry'

const Blog = () => {
    const data  = useStaticQuery(graphql`
    {
        allMdx {
          nodes {
            frontmatter {
              slug
              title
              date
            }
            excerpt
            timeToRead
          }
        }
      }
      `)
     
      const nodes = data.allMdx.nodes
      console.log(nodes)

      const blogPosts = nodes.map((post, index) =>
      {
        console.log(post); 
        return(
        <Entry key={index} slug={post.frontmatter.slug} title={post.frontmatter.title} date={post.frontmatter.date} excerpt={post.excerpt} />
        )
     })
      console.log(blogPosts)
    return (
        <div>
            <Navbar/>
            <div className={styles.blogList}>
                {blogPosts}
            </div>
        </div>
    )
}

export default Blog
