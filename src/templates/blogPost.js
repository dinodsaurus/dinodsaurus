import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { renderAst } from "../helpers/markdownTemplate";

import Header from "../components/Header";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

import styles from "./blogPost.module.css";

import mountains from "../img/mountains@2x.png";

import "prismjs/themes/prism-okaidia.css";

const BlogPost = (props) => {
  const { frontmatter: post, htmlAst } = props.data.markdownRemark;
  const { prev, next } = props.pathContext;
  const { sizes } = post.thumbnail.childImageSharp;
  return (
    <div>
      <Helmet>
        <title>Dino Trojak | {post.title}</title>
        <meta name="keywords" content={post.tags.toString()} />
      </Helmet>
      <Header />
      <div className={styles.container}>
          <img className={styles.icon} src={mountains} />
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.tags.join(", ")} • {post.date}</p>
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
  data: PropTypes.object,
  pathContext: PropTypes.object
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
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }
  }
`;

export default BlogPost;
