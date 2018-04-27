const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}
      })
    })
  })
}
