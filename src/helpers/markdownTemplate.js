import React from "react";
import RehypeReact from "rehype-react";
import Strava from "../components/Strava";

export const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { strava: Strava }
}).Compiler;
