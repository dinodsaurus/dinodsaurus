import React from "react";
import Link from "gatsby-link";
import styles from "./styles.module.css";

import logo from "../../img/dino.jpg";

const Heading = () => (
    <div className={styles.container}>
        <Link className={styles.link} to="/">☜  Back to Blog</Link>
        <img className={styles.logo} src={logo} />
        <div/>
    </div>
)

export default Heading;