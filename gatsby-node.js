const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMdx {
          nodes {
            frontmatter{
              slug
            }
            slug
          }
        }
      }    
    `)
      console.log(JSON.stringify(result, null, 4))


      result.data.allMdx.nodes.forEach(node => {
        console.log("TEST 🔴" + node.slug)
        createPage({
          path: "blog/" +node.frontmatter.slug,
          component: path.resolve(`./src/templates/Post.js`),
          context:{
            slug: node.slug
          }, 
        })
      })
  
  
  }
  