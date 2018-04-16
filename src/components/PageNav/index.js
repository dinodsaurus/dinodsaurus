import React from "react";
import Link from "gatsby-link";

import styles from "./styles.module.css";

const PageNav = ({ prev, next }) => (
  <div className={styles.nav}>
    <div className={styles.post}>
      {prev ?
        <Link to={prev.frontmatter.path}>
          <div className={styles.desc}>
            <h4 className={styles.title}>{prev.frontmatter.title}</h4>
            <p>☜  Previous Story</p>
          </div>
          <div
            className={styles.img}
            src={prev.frontmatter.thumbnail.childImageSharp.responsiveSizes.src}
          />
        </Link>
        : null }
    </div>
    <div className={styles.post}>
      { next ?
        <Link to={next.frontmatter.path}>
          <div className={styles.desc}>
            <h4 className={styles.title}>{next.frontmatter.title}</h4>
            <p>Next Story  ☞ </p>
          </div>
          <div
            // className={styles.img}
            style={{
                height: "100px",
                backgroundImage: `url(${next.frontmatter.thumbnail.childImageSharp.responsiveSizes.src})`,
                backgroundSize: "cover"
            }}
          />
        </Link>
        : null}
    </div>
  </div>
);

export default PageNav;
