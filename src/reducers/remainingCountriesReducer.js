import types from "../actions/types";

const remainingQuestionsReducer = (state = [], action) => {
  switch (action.type) {
    //if retrieveAllQuestions is called, we are working with a new set of
    //countries,so we want remainingQuestions to equal this new set of questions
    case types.RETRIEVE_COUNTRIES:
      if (action.payload === "error") {
        return state;
      }
      return action.payload;
    case types.REMOVE_COUNTRY: {
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    }
    case types.RESET_REMAINING_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default remainingQuestionsReducer;
