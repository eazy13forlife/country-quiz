import types from "../actions/types";

const seeResultsReducer = (state = false, action) => {
  switch (action.type) {
    case types.VIEW_RESULTS:
      return true;
    case types.HIDE_RESULTS:
      return false;
    default:
      return state;
  }
};

export default seeResultsReducer;
