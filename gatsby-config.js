module.exports = {
  siteMetadata: {
    title: "Dino Trojak | dinodsaurus"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-css-modules",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-svg-sprite",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-component", "gatsby-remark-prismjs"]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-31219245-7",
        anonymize: true,
        respectDNT: true
      }
    }
  ]
};
