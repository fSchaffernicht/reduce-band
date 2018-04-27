module.exports = {
  siteMetadata: {
    author: 'Felix Schaffernicht',
    title: `reduce band`
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'blog'
      }
    }
  ]
}
