import React from 'react'
import Link from 'gatsby-link'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'

import Layer1 from "../img/1.png";
import Layer2 from "../img/2.png";
import Layer3 from "../img/3.png";
import Layer4 from "../img/4.png";
import Layer5 from "../img/5.png";
import Layer6 from "../img/6.png";
import Layer7 from "../img/7.png";
import Layer8 from "../img/8.png";
import Layer9 from "../img/9.png";

const IndexPage = () => (
  <div>
    <ParallaxProvider>
      <ParallaxBanner
        className="Head"
        layers={[
            {
                image: Layer9,
                amount: 0,
                slowerScrollRate: false,
            },
            {
                image: Layer8,
                amount: 0,
                slowerScrollRate: false,
            },
            {
                image: Layer7,
                amount: 0.5,
                slowerScrollRate: false,
            },
            {
                image: Layer6,
                amount: 0.4,
                slowerScrollRate: false,
            },
            {
                image: Layer5,
                amount: 0.2,
                slowerScrollRate: false,
            },
            {
                image: Layer4,
                amount: 0.1,
                slowerScrollRate: false,
            },
            {
              image: Layer3,
              amount: 0.2,
              slowerScrollRate: false,
          },
          {
            image: Layer2,
            amount: 0.05,
            slowerScrollRate: true,
        },
        {
          image: Layer1,
          amount: 0.2,
          slowerScrollRate: true,
      },
        ]}
        style={{
            height: '700',
        }}
    />
  </ParallaxProvider>
  </div>
)

export default IndexPage
