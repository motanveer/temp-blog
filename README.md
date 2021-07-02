

<div align="center">
<h1> 🚀 Mo's Temporary Blog Site</h1>
<p>
I'm working on launching my personal website. The goal is it to function as portfolio, blog, project showcase, and all around central point of display for any of my technical and creative projects.

While that website is still in development, this project will serve as a minimal blog implementation.
<p>
</div>


## 🎃 Built using Gatsby + MDX
--- 
 This site is built using Gatsby v3.

Blog content is written via MDX and transformed using gatsby-plugin-mdx.

The implementation is very minimal. 

## Here's how it works:
---

### Example MDX File
We start off with our blog post, an MDX file.
```
---
//Frontmatter:
Title: Top 10 Supergirl Comics
Slug: supergirl-comic
Date: 07-01-2021
---

# Content starts here
....
```
This MDX File (+ any other MDX file) can be queried via GraphQL.

### Example Query

```
const result = await graphql(`
      query {
        allMdx {
          nodes {
            frontmatter{
              slug
            }
          }
        }
      }    
    `)
```
This will return all MDX files, and their associated slug.

### Creating Pages from the MDX Files
Once we have the slug information we can use Gatsby's Node API to programatically generate pages from our MDX files.

```
result.data.allMdx.nodes.forEach(node => {
        console.log(node.slug)
        createPage({
          path: "blog/" +node.frontmatter.slug,
          component: path.resolve(`./src/templates/Post.js`),
          context:{
            slug:  "blog/" +node.frontmatter.slug
          }, 
        })
      })
```
This will go through each node, get it's slug, and then create a path that resembles ```blog/slug-name```

```component: path.resolve(`./src/templates/Post.js`), ```  is the React component that serves as our blog post layout.

We send it a context variable, in this case the slug of the blog post.
```
ontext:{
            slug:  "blog/" +node.frontmatter.slug
          }
```

### Inside Our Layout Component 

// TO DO FINISH READ-ME