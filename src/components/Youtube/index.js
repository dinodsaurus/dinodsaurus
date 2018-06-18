import React from "react";

import styles from "./styles.module.css";

const Youtube = () => (
  <div className={styles.youtube}>
    <iframe
      title="youtube"
      height="405"
      width="700"
      src="https://www.youtube.com/embed/YTDNIc3HEWM"
      frameBorder="0"
      allow="encrypted-media"
      allowFullScreen
    />
  </div>
);

export default Youtube;
