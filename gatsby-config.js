module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Mo's Temp Blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
                maxWidth: 950,
                maxHeight: 600,
                markdownCaptions: true,

            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options:{
        fonts: [
          'karla\:500,700',
          'mulish\:400,700,800'
        ],
        display:'swap',
      },
      },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/blog-posts/",
      },
      __key: "pages",
    },
  ],
};
