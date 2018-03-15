import React from "react";

import placeholder from "../../img/placeholder.png";
import styles from "./styles.module.css";

const BlogPost = ({
  light, noBg, img, long
}) => (
  <div className={long ? styles.longCointainer : styles.postContainer}>
    <div
      className={styles.mainImg}
      style={{
        backgroundImage: `url("${img}")`
    }}
    />
    <div className={styles.desc} style={{ backgroundColor: noBg ? "transparent" : "white" }}>
      <h3 className={light ? styles.titleLight : styles.titleDark}>Last time biking</h3>
      <div className={styles.data}>
        <p className={light ? styles.tagsLight : styles.tagsDark}>downhill  •  mtb</p>
        <p className={light ? styles.dateLight : styles.dateDark}>17th January 2018</p>
      </div>
    </div>
  </div>
);

export default BlogPost;
