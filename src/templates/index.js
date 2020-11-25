import React, { Component } from "react";
import PropTypes from "prop-types";
// import { renderAst } from "../helpers/markdownTemplate";

import Layout from "../layouts";
import Paralax from "../components/Paralax";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import BlogPost from "../components/BlogPost";
import AboutPost from "../components/AboutPost";
import Pagination from "../components/Pagination";

class IndexPage extends Component {
  static renderBlogPost({ node }, i) {
    const { frontmatter: post } = node;
    return (
      <BlogPost
        key={i}
        post={post}
        first={i === 0}
      />
    );
  }

  render() {
    const { pathContext } = this.props;
    const { group: posts } = pathContext;
    return (
      <Layout>
        <Paralax />
        <div className="container">
          <PageTitle />
          <div className="grid">
            <AboutPost />
            {posts.map(IndexPage.renderBlogPost)}
          </div>
          <Pagination path={pathContext} />
        </div>
        <Footer />
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  pathContext: PropTypes.object
};

export default IndexPage;
