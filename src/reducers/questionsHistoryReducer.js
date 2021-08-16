import types from "../actions/types";

const questionsHistoryReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_QUESTIONS_HISTORY:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default questionsHistoryReducer;
