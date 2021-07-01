const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMdx {
          nodes {
            slug
          }
        }
      }    
    `)
      console.log(JSON.stringify(result, null, 4))
  
      console.log(result.data.allMdx.nodes)
      
      result.data.allMdx.nodes.forEach(node => {
        console.log(node.slug)
        createPage({
          path: "blog/" +node.slug,
          component: path.resolve(`./src/templates/Post.js`),
          context:{
            slug:  "blog/" +node.slug
          }, 
        })
      })
  }
  