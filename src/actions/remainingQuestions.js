import types from "./types";

//takes in the index of the question we want to remove from remainingQuestions state
const removeQuestion = (remainingQuestionsIndex) => {
  return {
    type: types.REMOVE_QUESTION,
    payload: remainingQuestionsIndex,
  };
};

//resets the remainingQuestions state to equal allQuestions
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
