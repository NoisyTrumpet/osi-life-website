/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allContentfulPage.edges.forEach(({ node }) => {
        if (node.slug !== "/") {
          createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/page.js`),
            context: {
              slug: node.slug,
            },
          });
        }
      });
      resolve();
    });
  });
};
