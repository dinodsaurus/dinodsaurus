import React from "react";
import RehypeReact from "rehype-react";
import Strava from "../components/Strava";
import Youtube from "../components/Youtube";

export const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { strava: Strava, youtube: Youtube }
}).Compiler;
