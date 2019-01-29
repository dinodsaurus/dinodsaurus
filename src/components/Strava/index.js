import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

class Strava extends Component {
  state = {
    windowWidth: 0
  };

  componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth
    });
  }

  render() {
    const { windowWidth } = this.state;
    const { url } = this.props;
    const width = windowWidth > 590 ? 590 : windowWidth;
    return (
      <div className={styles.strava}>
        <iframe height="405" width={width} title="Strava" scrolling="no" src={url} />
      </div>
    );
  }
}

Strava.propTypes = {
  url: PropTypes.string
};

export default Strava;
