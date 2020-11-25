import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const BlogPost = ({
  post,
  first
}) => (
  <Link to={post.path} className={first ? styles.longCointainer : styles.postContainer}>
    <div
      className={styles.mainImg}
      style={{
        backgroundImage: `url("${post.thumbnail.childImageSharp.fluid.src}")`
      }}
    />
    <div
      className={styles.desc}
      style={{
        backgroundColor: post.noBg ? "transparent" : "white",
        padding: post.noBg ? "20px" : "20px 0"
      }}
    >
      <h3 className={post.light ? styles.titleLight : styles.titleDark}>
        {post.title}
      </h3>
      <div className={styles.data}>
        <p className={post.light ? styles.tagsLight : styles.tagsDark}>
          {post.tags.join(" • ")}
        </p>
        <p className={post.light ? styles.dateLight : styles.dateDark}>
          {post.date}
        </p>
      </div>
    </div>
  </Link>
);

BlogPost.propTypes = {
  post: PropTypes.object,
  first: PropTypes.bool
};

export default BlogPost;
