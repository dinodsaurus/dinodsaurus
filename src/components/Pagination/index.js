import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import styles from "./styles.module.css";

class Pagination extends Component {
  static renderLinks(path) {
    const Links = Array(path.pageCount)
      .fill()
      .map((item, i) => {
        const key = (i + 1).toString();
        const activeSt =					key === path.index
					  ? {
					    color: "black",
					    borderBottom: "4px solid #ffa40b"
						  }
					  : {};

        return (
          <Link key={key} to={key === 1 ? "" : key} className={styles.link} activeStyle={activeSt}>
            {key}
          </Link>
        );
      });
    return Links;
  }

  render() {
    const { path } = this.props;
    const { index } = path;
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();
    return (
      <div className={styles.container}>
        {!path.first ? <Link to={previousUrl}>☜</Link> : null}
        <div className={styles.content}>{Pagination.renderLinks(path)}</div>
        {!path.last ? <Link to={nextUrl}>☞ </Link> : null}
      </div>
    );
  }
}

Pagination.propTypes = {
  path: PropTypes.object
};

export default Pagination;
