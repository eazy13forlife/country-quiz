import types from "../actions/types";

const questionAskedIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case types.INCREMENT_QUESTION_INDEX:
      return state + 1;
    case types.DECREMENT_QUESTION_INDEX:
      if (state === 0) {
        return 0;
      } else {
        return state - 1;
      }
    case types.RESET_QUESTION_INDEX:
      return 0;
    default:
      return state;
  }
};

export default questionAskedIndexReducer;
