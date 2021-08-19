import types from "./types";

//increments the index of of our questionsAskedIndex in order to align with
//the index of the question currently being asked.
const incrementQuestionIndex = () => {
  return {
    type: types.INCREMENT_QUESTION_INDEX,
  };
};

//decrements the index of of our questionsAskedIndex in order to align with
//the index of the question currently being asked.
const decrementQuestionIndex = () => {
  return {
    type: types.DECREMENT_QUESTION_INDEX,
  };
};

//resets our questionAskedIndex back to 0 when our array only has 1 item again
const resetQuestionIndex = () => {
  return {
    type: types.RESET_QUESTION_INDEX,
  };
};

export { incrementQuestionIndex, decrementQuestionIndex, resetQuestionIndex };
