import React from "react";

import styles from "./styles.module.css";

const Strava = props => (
  <div className={styles.strava}>
    <iframe
      height="405"
      width="700"
      title="Strava"
      scrolling="no"
      src={props.url}
    />
  </div>
);

export default Strava;
