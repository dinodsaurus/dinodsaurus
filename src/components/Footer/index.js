import React from "react";

import styles from "./styles.module.css";

import twitterIcon from "../../img/icons/twitter.svg";
import facebookIcon from "../../img/icons/facebook.svg";
import instragramIcon from "../../img/icons/instagram.svg";
import strackOverflowIcon from "../../img/icons/stackoverflow.svg";
import githubIcon from "../../img/icons/git.svg";
import youtubeIcon from "../../img/icons/youtube.svg";

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <ul className={styles.friends}>
        <li className={styles.list}>Friends & Family</li>
        <li className={styles.list}>
          <a href="http://reactor.studio/" className={styles.link} target="__blank">Reactor</a>
        </li>
        <li className={styles.list}>
          <a href="http://jszgb.com/" target="__blank" className={styles.link}>jsZgb</a>
        </li>
        <li className={styles.list}>
          <a href="http://nodeschool.io/zagreb" target="__blank" className={styles.link}>NodeSchool</a>
        </li>
        <li className={styles.list}>
          <a href="http://mop-fest.com" target="__blank" className={styles.link}>MOPfest</a>
        </li>
        <li className={styles.list}>
          <a href="http://markohrastovec.com/" target="__blank" className={styles.link}>Hot Type</a>
        </li>
      </ul>
      <div className={styles.social}>
        <a href="https://twitter.com/dinodsaurus" target="__blank">
          <svg style={{
            height: "16.6px", width: "16px", lineHeight: 1, marginRight: "30px"
          }}
          >
            <use xlinkHref={`#${twitterIcon.id}`} />
          </svg>
        </a>
        <a href="https://web.facebook.com/dino.trojak.9" target="__blank">
          <svg style={{
            height: "16.6px", width: "16px", lineHeight: 1, marginRight: "30px"
          }}
          >
            <use xlinkHref={`#${facebookIcon.id}`} />
          </svg>
        </a>
        <a href="https://www.instagram.com/dinodsaurus" target="__blank">
          <svg style={{
            height: "16.6px", width: "16px", lineHeight: 1, marginRight: "30px"
          }}
          >
            <use xlinkHref={`#${instragramIcon.id}`} />
          </svg>
        </a>
        <a href="https://stackoverflow.com/users/1257924/dinodsaurus" target="__blank">
          <svg style={{
            height: "16.6px", width: "16px", lineHeight: 1, marginRight: "30px"
          }}
          >
            <use xlinkHref={`#${strackOverflowIcon.id}`} />
          </svg>
        </a>
        <a href="https://github.com/dinodsaurus" target="__blank">
          <svg style={{
            height: "16.6px", width: "16px", lineHeight: 1, marginRight: "30px"
          }}
          >
            <use xlinkHref={`#${githubIcon.id}`} />
          </svg>
        </a>
        <a href="https://www.youtube.com/channel/UClAwaGrISW7Ikia1JkJ2rKw" target="__blank">
          <svg style={{
            height: "16.6px", width: "16px", lineHeight: 1, marginRight: "30px"
          }}
          >
            <use xlinkHref={`#${youtubeIcon.id}`} />
          </svg>
        </a>
      </div>
    </div>
  </div>
);


export default Footer;
