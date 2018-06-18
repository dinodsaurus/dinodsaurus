import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "reset-css";

import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Dino Trojak | Home</title>
      <meta name="description" content="Dino Trojak's lair" />
      <meta name="keywords" content="JavaScript, MTB, JiuJitsu, YT Jeffsy" />
      <link rel="stylesheet" href="https://fonts.typotheque.com/WF-026590-010248.css" type="text/css" />
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
