const path = require(`path`);
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Ethical Den",
    titleTemplate: "Ethical Den",
    description:
      "We're the best digital marketing agency from West Bengal, curating experiences that users fall in love with",
    image: "/icon.png",
    siteUrl: "https://ethicalden.com",
    author: "ethicalden",
    authorSite: "",
    twitterUsername: "@ethicalden",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Gatsby Styled Starter`,
        short_name: `Gatsby Styled Starter`,
        description: `Gatsby Styled Starter`,
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://warm-dawn-95960.herokuapp.com/api/home?populate=deep",
      },
    },
    // {
    //   resolve: `gatsby-source-mysql`,
    //   options: {
    //     connectionDetails: {
    //       host: '192.163.205.187',
    //       user: 'ethicald_gatsby',
    //       password: 'ethicalden$2022',
    //       database: 'ethicald_den'
    //     },
    //     queries: [
    //       {
    //         statement: 'SELECT * FROM client',
    //         name: 'client',
    //         idFieldName: 'alias',
    //       },{
    //         statement: 'SELECT * FROM review',
    //         name: 'review',
    //         idFieldName: 'id',
    //       }
    //     ]
    //   }
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
