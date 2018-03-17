import React, { Component } from "react";

import styles from "./styles.module.css";

class Pagination extends Component {
  render() {
    return (
      <div className={styles.container}>
        <a href="">☜</a>
        <div className={styles.content}>
          <a className={styles.linkActive} href="">1</a>
          <a className={styles.link} href="">2</a>
          <a className={styles.link} href="">3</a>
          <a className={styles.link} href="">4</a>
        </div>
        <a href="">☞ </a>
      </div>
    );
  }
}

export default Pagination;
