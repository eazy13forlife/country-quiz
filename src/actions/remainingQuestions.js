import types from "./types";

//takes in the index of the question we want to remove from remainingQuestions state
const removeQuestion = (remainingQuestionsIndex) => {
  return {
    type: types.REMOVE_QUESTION,
    payload: remainingQuestionsIndex,
  };
};

export { removeQuestion };
