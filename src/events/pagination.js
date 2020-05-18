import { navigate } from "@reach/router";

/**
 * onClick event handler for pagination index items
 * @param {String} path Base path to navigate to
 * @param {Number} page Integer value indexing to paginated page
 */
export const onClickIndex = (path, page) => {
  navigate(`${path}/${page !== 1 ? page : ""}`);
};

/**
 * Handles navigation to next page
 * @param {String} path  Base path to navigate to
 * @param {Number} nextPage Integer referencing next page
 */
export const onClickNext = (path, nextPage) => {
  navigate(`${path}/${nextPage}`);
};

/**
 * Handles navigation to previous page
 * @param {String} path Base path to navigate to
 * @param {Number} previousPage Integer referencing next page
 */
export const onClickPrevious = (path, previousPage) => {
  navigate(`${path}/${previousPage === 1 ? "" : previousPage}`);
};

/**
 * Navigates to last pagination page
 * @param {String} path Base path to navigate to
 * @param {Number} lastPage Integer referencing next page
 */
export const onClickLast = (path, lastPage) => {
  navigate(`${path}/${lastPage}`);
};

/**
 * Navigates to last pagination page
 * @param {String} path Base path to navigate to
 * @param {Number} lastPage Integer referencing next page
 */
export const onClickFirst = path => {
  navigate(`${path}`);
};

export default {
  onClickIndex,
  onClickNext,
  onClickLast,
  onClickPrevious,
  onClickFirst,
};
