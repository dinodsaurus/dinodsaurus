import React, { Component } from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { renderAst } from "../helpers/markdownTemplate";

import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

import styles from "./blogPost.module.css";

const BlogPost = (props) => {
  const { frontmatter: post, htmlAst } = props.data.markdownRemark;
  const { prev, next } = props.pathContext;
  const { sizes } = post.thumbnail.childImageSharp;
  console.log(prev);
  console.log(next);
  return (
    <div>
      <div className="container">
        <div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.tags.toString()} • {post.date}</p>
        </div>
      </div>
      <div className={styles.headImgCont}>
        <Image sizes={sizes} />
      </div>
      <div className={styles.content}>
        {renderAst(htmlAst)}
      </div>
      <PageNav prev={prev} next={next} />
      <Footer />
    </div>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object
};

export const BlogPostQuery = graphql`
query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      htmlAst
      id
      frontmatter {
        path
        title
        tags
        date(formatString: "Do MMMM YYYY")
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 1200) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }
  }
`;

export default BlogPost;
