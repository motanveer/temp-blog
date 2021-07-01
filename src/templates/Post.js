import React from "react"
import * as styles from'./Post.module.css'
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Navbar from "../components/navbar/Navbar"

const Post = ({data}) => {
    const result = data.allMdx.nodes[0];
    console.log(result)
    return (
       <div>
           <Navbar/>
           <div className={styles.contentContainer}>
           <h1>{result.frontmatter.title}</h1>
           <MDXRenderer>{result.body}</MDXRenderer>
           </div>
       </div>
        
    )
}
export default Post

export const query = graphql`
query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          title
          date
        }
        body
        timeToRead
      }
    }
  }
  
`