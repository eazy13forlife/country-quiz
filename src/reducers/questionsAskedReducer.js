import types from "../actions/types";

const questionsAskedReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_NEXT_QUESTION:
      return [...state, action.payload];
    case types.MARK_CORRECT: {
      const newState = [...state];
      const currentQuestion = newState[newState.length - 1];
      currentQuestion.isCorrect = true;
      return newState;
    }
    case types.MARK_WRONG: {
      const newState = [...state];
      const currentQuestion = newState[newState.length - 1];
      currentQuestion.isCorrect = false;
      return newState;
    }
    case types.PROVIDE_ANSWER: {
      const newState = [...state];
      const currentQuestion = newState[newState.length - 1];
      if (!currentQuestion.userAnswers.includes(action.payload)) {
        currentQuestion.userAnswers.push(action.payload);
        return newState;
      }
      return state;
    }
    /*
    case types.ADD_TO_QUESTIONS_HISTORY:
      return [...state, action.payload];
      */
    default:
      return state;
  }
};

export default questionsAskedReducer;
