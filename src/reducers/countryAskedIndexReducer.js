import types from "../actions/types";

const questionAskedIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTRY_INDEX:
      return state + 1;
    case types.DECREMENT_COUNTRY_INDEX:
      if (state === 0) {
        return 0;
      } else {
        return state - 1;
      }
    case types.RESET_COUNTRY_INDEX:
      return 0;
    default:
      return state;
  }
};

export default questionAskedIndexReducer;
