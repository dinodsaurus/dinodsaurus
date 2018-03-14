import React from "react";
import styles from "./styles.module.css";

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <ul className={styles.friends}>
        <li className={styles.list}>Friends & Family</li>
        <li className={styles.list}>
          <a href="#" className={styles.link}>Reactor</a>
        </li>
        <li className={styles.list}>
          <a href="#" className={styles.link}>jsZgb</a>
        </li>
        <li className={styles.list}>
          <a href="#" className={styles.link}>NodeSchool</a>
        </li>
        <li className={styles.list}>
          <a href="#" className={styles.link}>MOPfest</a>
        </li>
        <li className={styles.list}>
          <a href="#" className={styles.link}>Hot Type</a>
        </li>
      </ul>

    </div>
  </div>
);


export default Footer;
