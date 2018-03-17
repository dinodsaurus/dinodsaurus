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
    const { allMarkdownRemark } = this.props.data;
    const { edges: posts } = allMarkdownRemark;
    return (
      <div>
        <Header />
        <div className="container">
          <PageTitle />
          <div className="grid">
            {posts.map(IndexPage.renderBlogPost)}
          </div>
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

export const IndexQuery = graphql`
 query IndexQuery {
   allMarkdownRemark {
     totalCount
     edges {
       node {
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
   }
 }
`;

export default IndexPage;
