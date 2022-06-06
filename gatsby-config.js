const path = require(`path`);
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Gatsby Styled Starter",
    titleTemplate: "Gatsby Styled Starter",
    description: "Gatsby Styled Starter",
    image: "/icon.png",
    siteUrl: "https://gatsbyjs.com",
    author: "veeresh",
    authorSite: "",
    twitterUsername: "@veeresh",
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
