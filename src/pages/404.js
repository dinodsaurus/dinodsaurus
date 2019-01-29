import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import Header from "../components/Header";
import compass from "../img/compass.png";

import styles from "./about.module.css";

const NotFoundPage = () => (
  <div>
    <div>
      <Helmet>
        <title>Dino Trojak | You are Lost :S</title>
      </Helmet>
      <Header />
      <div className={styles.containerLost}>
        <img className={styles.icon} src={compass} alt="compass" />
        <h1 className={styles.titleLost}>
          It seems that you are lost
          {" "}
          <span role="img">😱</span>
          {" "}
          <br />
          <Link className={styles.link} to="/">
            Please go back to the Home Page
          </Link>
        </h1>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
