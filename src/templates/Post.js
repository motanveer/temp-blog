import React from "react"
import * as styles from'./Post.module.css'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import SEO from '../components/seo'
import {graphql} from 'gatsby'
const Post = ({data}) => {
    
    const result = data.allMdx.nodes[0];
    console.log(result)
    return (
       <div>
         <SEO title={result.frontmatter.title} description={result.frontmatter.metaDescription}/>
           <Navbar/>
           <div className={styles.contentContainer}>
           <h1>{result.frontmatter.title}</h1>
           <div className={styles.dateContainer}>
             <div>{result.frontmatter.date}</div>
             <div>{result.timeToRead} Minutes</div>

           </div>
           <MDXRenderer>{result.body}</MDXRenderer>
           </div>
           <div className={styles.footer}>
           <Footer/>               
           </div>
       </div>
        
    )
}


export default Post

export const query = graphql`
query ($slug: String) {
  allMdx(filter: {slug: {eq: $slug}}) {
    nodes {
      frontmatter {
        title
        metaDescription
        date
      }
      timeToRead
      body
    }
  }
}
    
`
