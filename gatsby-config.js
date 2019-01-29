const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Dino Trojak | dinodsaurus"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-css-modules",
    "gatsby-plugin-svg-sprite",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000
            }
          },
          "gatsby-remark-component",
          "gatsby-remark-prismjs"
        ]
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: path.join(__dirname, "src")
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
