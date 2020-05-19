/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");
const imagesPerPage = require("./constants").imagesPerPage;

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

/**
 * Creates all gallery pages
 */
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

  /** Query for horse images and create pages**/
  const horseResult = await graphql(`
    {
      allContentfulImage(filter: { category: { eq: "Horses" } }) {
        nodes {
          title
          id
          image {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  `);

  const horseImages = horseResult.data.allContentfulImage.nodes;

  // Calculate how much pages are needed to show all images
  const numPagesHorses = Math.ceil(horseImages.length / imagesPerPage);
  Array.from({ length: numPagesHorses }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/gallery/horses" : `/gallery/horses/${i + 1}`,
      component: path.resolve("./src/templates/gallery-horse-template.jsx"),
      context: {
        limit: imagesPerPage,
        skip: i * imagesPerPage,
        numPagesHorses,
        currentPage: i + 1,
      },
    });
  });

  /** Query for cat images and create pages**/
  const catResult = await graphql(`
    {
      allContentfulImage(filter: { category: { eq: "Cats" } }) {
        nodes {
          title
          id
          image {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  `);

  const catImages = catResult.data.allContentfulImage.nodes;

  // Calculate how much pages are needed to show all images
  const numPagesCats = Math.ceil(catImages.length / imagesPerPage);
  Array.from({ length: numPagesCats }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/gallery/cats" : `/gallery/cats/${i + 1}`,
      component: path.resolve("./src/templates/gallery-cat-template.jsx"),
      context: {
        limit: imagesPerPage,
        skip: i * imagesPerPage,
        numPagesCats,
        currentPage: i + 1,
      },
    });
  });

  /** Query for dog images and create pages**/
  const dogResult = await graphql(`
    {
      allContentfulImage(filter: { category: { eq: "Dogs" } }) {
        nodes {
          title
          id
          image {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  `);

  const dogImages = dogResult.data.allContentfulImage.nodes;

  // Calculate how much pages are needed to show all images
  const numPagesDogs = Math.ceil(dogImages.length / imagesPerPage);
  Array.from({ length: numPagesDogs }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/gallery/dogs" : `/gallery/dogs/${i + 1}`,
      component: path.resolve("./src/templates/gallery-dog-template.jsx"),
      context: {
        limit: imagesPerPage,
        skip: i * imagesPerPage,
        numPagesDogs,
        currentPage: i + 1,
      },
    });
  });
};
