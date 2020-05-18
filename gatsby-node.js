/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        "process.env.CONTENTFUL_SPACE_ID": JSON.stringify(
          process.env.CONTENTFUL_SPACE_ID,
        ),
        "process.env.CONTENTFUL_ACCESS_TOKEN": JSON.stringify(
          process.env.CONTENTFUL_ACCESS_TOKEN,
        ),
      }),
    ],
  });
};

// Create paginated pages for gallery
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulImage {
        nodes {
          id
          title
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const images = result.data.allContentfulImage.nodes;
  const imagesPerPage = 9;

  // Calculate how much pages are needed to show all images
  const numPages = Math.ceil(images.length / imagesPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/gallery" : `/gallery/${i + 1}`,
      component: path.resolve("./src/templates/gallery-template.jsx"),
      context: {
        limit: imagesPerPage,
        skip: i * imagesPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
