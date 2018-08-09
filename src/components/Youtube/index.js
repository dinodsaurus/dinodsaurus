import React from "react";

import styles from "./styles.module.css";

const Youtube = props => (
  <div className={styles.youtube}>
    <iframe
      title="youtube"
      height="405"
      width="700"
      src={props.url}
      frameBorder="0"
      allow="encrypted-media"
      allowFullScreen
    />
  </div>
);

export default Youtube;
