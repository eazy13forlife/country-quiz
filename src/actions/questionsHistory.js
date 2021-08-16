import types from "./types";

const addToQuestionsHistory = (currentQuestion) => {
  const newObject = { ...currentQuestion };
  delete newObject.index;
  delete newObject.attempts;
  delete newObject.userAnswer;
  return {
    type: types.ADD_TO_QUESTIONS_HISTORY,
    payload: newObject,
  };
};

export { addToQuestionsHistory };
