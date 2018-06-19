import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "reset-css";

import "./index.css";

import appleTouch from "../img/favicon/apple-touch-icon.png";
import favicon32 from "../img/favicon/favicon-32x32.png";
import favicon16 from "../img/favicon/favicon-16x16.png";
import safariPinned from "../img/favicon/safari-pinned-tab.svg";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Dino Trojak | Home</title>
      <meta name="description" content="Dino Trojak's lair" />
      <meta name="keywords" content="JavaScript, MTB, JiuJitsu, YT Jeffsy" />
      <link rel="stylesheet" href="https://fonts.typotheque.com/WF-026590-010248.css" type="text/css" />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    </Helmet>
    <div>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
