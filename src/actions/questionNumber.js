import types from "../actions/types";
const incrementQuestionNumber = () => {
  return {
    type: types.INCREMENT_QUESTION_NUMBER,
  };
};

const decrementQuestionNumber = () => {
  return {
    type: types.DECREMENT_QUESTION_NUMBER,
  };
};

export { incrementQuestionNumber, decrementQuestionNumber };
