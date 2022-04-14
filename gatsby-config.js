require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
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
    `gatsby-plugin-netlify`,
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-loadable-components-ssr",
    `gatsby-plugin-preact`,
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
          Components: `src/components`,
          Constants: `src/constants`,
          Features: `src/features`,
          Graphql: `src/graphql`,
          Hooks: `src/hooks`,
          Pages: "src/pages",
          Styles: `src/styles`,
          SVG: `src/svg`,
          Utils: `src/utils`,
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
