import React from "react";

import styles from "./styles.module.css";
import logo from "../../img/dino.jpg";

const PageTitle = () => (
  <div className={styles.container}>
    <img className={styles.logo} src={logo} />
    <h1 className={styles.title}>Dino Trojak</h1>
    <h2 className={styles.subtitle}>Muay thai ninja, enduro jedi, master of code and almost marathoner.<br />
        Some new activity coming soon..
    </h2>
  </div>
);


export default PageTitle;
