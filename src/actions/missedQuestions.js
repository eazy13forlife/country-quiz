import types from "./types";

//takes in the question missed and its correct answer
const addToMissedQuestions = (question, correctAnswer) => {
  return {
    type: types.ADD_TO_MISSED_QUESTIONS,
    payload: {
      question,
      correctAnswer,
    },
  };
};

const resetMissedQuestions = () => {
  return {
    type: types.RESET_MISSED_QUESTIONS,
  };
};

export { addToMissedQuestions, resetMissedQuestions };
