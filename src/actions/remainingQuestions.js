import types from "./types";

//takes in the index of the question we want to remove from remainingQuestions state
const removeQuestion = (index) => {
  return {
    action: types.REMOVE_QUESTION,
    payload: index,
  };
};

export { removeQuestion };
