import types from "../actions/types";

const currentQuestionReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_NEXT_QUESTION:
      return action.payload;
    case types.MARK_CORRECT:
      console.log("reducer is working");
      return { ...state, isCorrect: true };
    case types.MARK_WRONG:
      return { ...state, isCorrect: false };
    case types.PROVIDE_ANSWER:
      if (!state.userAnswers.includes(action.payload)) {
        const newUserAnswers = [...state.userAnswers, action.payload];
        return { ...state, userAnswers: newUserAnswers };
      }
      return state;
    default:
      return state;
  }
};

export default currentQuestionReducer;
