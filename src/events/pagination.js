import { navigate } from "@reach/router";

/**
 * onClick event handler for pagination items
 * @param {String} path Base path to navigate to
 * @param {Number} page Integer indexing to paginated page
 */
export const onClick = (path, page) => {
  navigate(`${path}/${page !== 1 ? page : ""}`);
};
