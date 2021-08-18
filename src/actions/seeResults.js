import types from "./types";

const viewResults = () => {
  return {
    type: types.VIEW_RESULTS,
  };
};
const hideResults = () => {
  return {
    type: types.HIDE_RESULTS,
  };
};

export { viewResults, hideResults };
