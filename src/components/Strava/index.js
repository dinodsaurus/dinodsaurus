import React from "react";

import styles from "./styles.module.css";

const Strava = ({ url }) => (
  <div className={styles.strava}>
    <iframe height="405" width="590" title="Strava" scrolling="no" src={url} />
  </div>
);

export default Strava;
