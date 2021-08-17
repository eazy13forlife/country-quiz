import types from "./types";

const addToQuestionsHistory = (currentQuestion) => {
  const newObject = { ...currentQuestion };
  delete newObject.attempts;
  return {
    type: types.ADD_TO_QUESTIONS_HISTORY,
    payload: newObject,
  };
};

export { addToQuestionsHistory };
