/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `semi-yu-blog`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `article-contents`,
        path: `${__dirname}/article-contents`,
      }
    },
    "gatsby-plugin-mdx"
  ],
}
