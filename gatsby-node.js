/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
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
