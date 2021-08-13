import types from "../actions/types";

const remainingQuestionsReducer = (state = [], action) => {
  switch (action.type) {
    //if retrieveAllQuestions is called, we are working with a new set of questions,so we want remainingQuestions to equal this new set of questions
    case types.RETRIEVE_ALL_QUESTIONS:
      return action.payload;
    case types.REMOVE_QUESTION: {
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    }
    default:
      return state;
  }
};

export default remainingQuestionsReducer;
