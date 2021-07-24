module.exports = {
  siteMetadata: {
    siteUrl: "https://www.motanveer.com",
    title: "Mo Tanveer",
    description: "Mo Tanveer is a growth marketer, designer, and front-end developer.",
    author: "Mo Tanveer",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mo Tanveer`,
        short_name: `Mo Tanveer`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
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
          'karla\:400,700',
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
