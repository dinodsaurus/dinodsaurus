const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve("src/templates/blogPost.js");

  // If you are experiencing issues with the ordering of the posts on the homepage,
  // replace the `allMarkdownRemark` line below with something like this:
  // allMarkdownRemark(sort:{fields:[frontmatter___date], order: ASC}) {

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            tags
            date(formatString: "Do MMMM YYYY")
            thumbnail {
             childImageSharp {
               responsiveSizes(maxWidth: 1128) {
                 src
               }
             }
           }
        }
      }
    }
  }
}`)
    .then((result) => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      const posts = result.data.allMarkdownRemark.edges;

      createPaginatedPages({
        edges: posts,
        createPage,
        pageTemplate: "src/templates/index.js",
        pageLength: 2
      });

      posts.forEach(({ node }, index) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {
            prev: index === 0 ? null : posts[index - 1].node,
            next: index === (posts.length - 1) ? null : posts[index + 1].node
          }
        });
      });
    });
};
