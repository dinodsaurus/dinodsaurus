import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const BlogPost = ({
  post
}) => (
  <Link to={post.path} className={post.long ? styles.longCointainer : styles.postContainer}>
    <div
      className={styles.mainImg}
      style={{
        backgroundImage: `url("${post.thumbnail.childImageSharp.responsiveSizes.src}")`
    }}
    />
    <div className={styles.desc} style={{ backgroundColor: post.noBg ? "transparent" : "white" }}>
      <h3 className={post.light ? styles.titleLight : styles.titleDark}>{post.title}</h3>
      <div className={styles.data}>
        <p className={post.light ? styles.tagsLight : styles.tagsDark}>{post.tags.map(p => `${p} • `)}</p>
        <p className={post.light ? styles.dateLight : styles.dateDark}>{post.date}</p>
      </div>
    </div>
  </Link>
);

BlogPost.propTypes = {
  post: PropTypes.object
};

export default BlogPost;
