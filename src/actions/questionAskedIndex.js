import types from "./types";
const incrementQuestionIndex = () => {
  return {
    type: types.INCREMENT_QUESTION_INDEX,
  };
};

const decrementQuestionIndex = () => {
  return {
    type: types.DECREMENT_QUESTION_INDEX,
  };
};

const resetQuestionIndex = () => {
  return {
    type: types.RESET_QUESTION_INDEX,
  };
};

export { incrementQuestionIndex, decrementQuestionIndex, resetQuestionIndex };
