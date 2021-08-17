import types from "../actions/types";

const missedQuestionsReducer = (state = [], action) => {
  switch (action.type) {
    //add to missed questions if question hasn't already been answered incorrectly
    case types.ADD_TO_MISSED_QUESTIONS: {
      const country = state.find((country) => {
        return country.name === action.payload.name;
      });
      if (country) {
        return state;
      } else {
        return [...state, action.payload];
      }
    }
    case types.RESET_MISSED_QUESTIONS:
      return [];
    default:
      return state;
  }
};

export default missedQuestionsReducer;
