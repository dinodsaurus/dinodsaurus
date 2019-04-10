const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve("src/templates/blogPost.js");

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            html
            id
            excerpt
            frontmatter {
              path
              title
              tags
              date(formatString: "Do MMMM YYYY")
              light
              noBg
              thumbnail {
                childImageSharp {
                  responsiveSizes(maxWidth: 1000) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    createPaginatedPages({
      edges: posts,
      createPage,
      pageTemplate: "src/templates/index.js",
      pageLength: 9
    });
    posts.forEach(({ node }, index) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node
        }
      });
    });
  });
};
