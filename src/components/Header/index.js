import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

import Layer1 from "../../img/1.png";
import Layer2 from "../../img/2.png";
import Layer3 from "../../img/3.png";
import Layer4 from "../../img/4.png";
import Layer5 from "../../img/5.png";
import Layer6 from "../../img/6.png";
import Layer7 from "../../img/7.png";
import Layer8 from "../../img/8.png";
import Layer9 from "../../img/9.png";

const width = typeof window !== "undefined" ? window.innerWidth : 1200;
const height = width / 1.8;

const Header = () => (
  <div style={{ background: "#0C2A3C", lineHeight: 0 }}>
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          {
            image: Layer8,
            amount: 0,
            slowerScrollRate: false
          },
          {
            image: Layer7,
            amount: 0.05,
            slowerScrollRate: true
          },
          {
            image: Layer6,
            amount: 0.1,
            slowerScrollRate: true
          },
          {
            image: Layer5,
            amount: 0.15,
            slowerScrollRate: true
          },
          {
            image: Layer4,
            amount: 0.20,
            slowerScrollRate: true
          },
          {
            image: Layer3,
            amount: 0.25,
            slowerScrollRate: true
          },
          {
            image: Layer2,
            amount: 0.1,
            slowerScrollRate: false
          },
          {
            image: Layer1,
            amount: 0.1,
            slowerScrollRate: false
          }
        ]}
        style={{
          height
        }}
      />
    </ParallaxProvider>
    <img src={Layer9} style={{ margin: 0 }} alt="" />
  </div>
);

export default Header;
