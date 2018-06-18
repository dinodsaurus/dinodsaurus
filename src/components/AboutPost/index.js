import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import styles from "../BlogPost/styles.module.css";

const BlogPost = ({
  post = {}
}) => (
  <Link to="/about" className={styles.aboutContainer}>
    <div
      className={styles.aboutImg}
    />
    <div className={styles.smallDesc} style={{ backgroundColor: "transparent" }}>
      <h3 className={styles.titleLight}>About me</h3>
      <div className={styles.data}>
        <p className={styles.dateLight}>All eyes on me</p>
      </div>
    </div>
  </Link>
);

BlogPost.propTypes = {
  post: PropTypes.object
};

export default BlogPost;
