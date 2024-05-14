import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: "https://osilife.com",
    title: "OsiLIFE",
    titleTemplate: "%s | Remote Patient Care Partners",
    description: "Remote Patient Care Partners",
    url: "https://osilife.com", // No trailing slash allowed!
    image: "src/images/icon.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@osilife",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-netlify`,
    "@chakra-ui/gatsby-plugin",
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: process.env.GATSBY_GTAG,
    //     // Include GTM in development.
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: false,
    //     // datalayer to be set before GTM is loaded
    //     // should be an object or a function that is executed in the browser
    //     // Defaults to null
    //     defaultDataLayer: { platform: "gatsby" },

    //     // Specify optional GTM environment details.
    //     // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
    //     // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
    //     // dataLayerName: "YOUR_DATA_LAYER_NAME",
    //     routeChangeEventName: "osi-route-change",
    //   },
    // },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_DELIVERY_API_KEY,
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
      },
    },

    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
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
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          components: `src/components`,
          constants: `src/constants`,
          features: `src/features`,
          graphql: `src/graphql`,
          hooks: `src/hooks`,
          pages: "src/pages",
          styles: `src/styles`,
          svg: `src/svg`,
          utils: `src/utils`,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
