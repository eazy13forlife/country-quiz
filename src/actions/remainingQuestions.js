import types from "./types";

//takes in the index of the question we want to remove from remainingQuestions state
const removeQuestion = (remainingQuestionsIndex) => {
  return {
    type: types.REMOVE_QUESTION,
    payload: remainingQuestionsIndex,
  };
};

//called when wanting to reset the remainingQuestions state to equal
//all the questions in allQuestions state
const resetRemainingQuestions = () => {
  return (dispatch, getState) => {
    const allQuestions = getState().allQuestions;
    dispatch({
      type: types.RESET_REMAINING_QUESTIONS,
      payload: allQuestions,
    });
  };
};

export { removeQuestion, resetRemainingQuestions };
