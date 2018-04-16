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
      />
    );
  }
  render() {
    const { pathContext } = this.props;
    const { group: posts } = pathContext;
    return (
      <div>
        <Header />
        <div className="container">
          <PageTitle />
          <div className="grid">
            {posts.map(IndexPage.renderBlogPost)}
          </div>
          <Pagination path={pathContext} />
        </div>
        <Footer />
      </div>
    );
  }
}

IndexPage.propTypes = {
  pathContext: PropTypes.object
};

export default IndexPage;
