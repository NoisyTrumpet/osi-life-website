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
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_DELIVERY_API_KEY,
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
      },
    },
    "@chakra-ui/gatsby-plugin",
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
          Svg: `src/svg`,
          Utils: `src/utils`,
        },
      },
    },
    // Fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Baloo+2\:400,500,600,700,800`],
        display: "swap",
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
