import React, { Component } from "react";
import PropTypes from "prop-types";
// import { renderAst } from "../helpers/markdownTemplate";


import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import BlogPost from "../components/BlogPost";
import Pagination from "../components/Pagination";

class IndexPage extends Component {
  static renderBlogPost({ node }, i) {
    const { frontmatter: post } = node;
    return (
      <BlogPost
        key={i}
        post={post}
        img="https://p.vitalmtb.com/photos/users/2/slideshows/9999/photos/22934/s1200_slideshow_photo_1460157605.jpg"
      />
    );
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <PageTitle />

          <Pagination />
        </div>
        <Footer />
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object
};

export const BlogPostQuery = graphql`
query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      id
      frontmatter {
        path
        title
        tags
        date(formatString: "Do MMMM YYYY")
        thumbnail {
          childImageSharp {
            responsiveSizes(maxWidth: 700) {
              src
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
