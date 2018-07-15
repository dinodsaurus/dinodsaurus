import React from "react";
import Link from "gatsby-link";
import styles from "./styles.module.css";

import logo from "../../img/dino.jpg";

const Heading = () => (
  <div className={styles.container}>
    <Link className={styles.link} to="/">
      <span className={styles.hand}>
        ☜
      </span>
      <span>
        Back to Blog
      </span>
    </Link>
    <img className={styles.logo} src={logo} alt="Dino logo" />
  </div>
);

export default Heading;
