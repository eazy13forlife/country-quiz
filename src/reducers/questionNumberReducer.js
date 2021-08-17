import types from "../actions/types";

const questionNumberReducer = (state = null, action) => {
  switch (action.type) {
    case types.INCREMENT_QUESTION_NUMBER:
      if (state === null) {
        return 0;
      } else {
        return state + 1;
      }
    case types.DECREMENT_QUESTION_NUMBER:
      if (state === null) {
        return 0;
      } else {
        return state - 1;
      }
    default:
      return state;
  }
};

export default questionNumberReducer;
