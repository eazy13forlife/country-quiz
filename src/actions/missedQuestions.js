import types from "./types";

//takes in the question missed and its correct answer. Since a question includes a flag, i cant put the image in the question, so I'm providing all the components needed to recreate this question
const addToMissedQuestions = (currentQuestion) => {
  const updatedCurrent = { ...currentQuestion };
  delete updatedCurrent.answerChoices;
  delete updatedCurrent.isCorrect;
  delete updatedCurrent.userAnswers;
  delete updatedCurrent.attempts;
  return {
    type: types.ADD_TO_MISSED_QUESTIONS,
    payload: {
      ...updatedCurrent,
    },
  };
};

const resetMissedQuestions = () => {
  return {
    type: types.RESET_MISSED_QUESTIONS,
  };
};

export { addToMissedQuestions, resetMissedQuestions };
