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
    DEV_SSR: true,
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-loadable-components-ssr",
    `gatsby-plugin-preact`,
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
