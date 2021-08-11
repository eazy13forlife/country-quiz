import types from "../actions/types";

const missedQuestionsReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_MISSED_QUESTIONS:
      return [...state, action.payload];
    case types.RESET_MISSED_QUESTIONS:
      return [];
    default:
      return state;
  }
};

export default missedQuestionsReducer;
