module.exports = {
  siteMetadata: {
    title: "Dino Trojak | dinodsaurus"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-css-modules",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-component"]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`
      }
    }
  ]
};
