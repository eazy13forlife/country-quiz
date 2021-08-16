import types from "./types";

import { getRandomIndex } from "../helperFunctions";
import { removeQuestion } from "./remainingQuestions";

const getNextQuestion = () => {
  return (dispatch, getState) => {
    const remainingQuestions = getState().remainingQuestions;
    const index = getRandomIndex(0, remainingQuestions.length - 1);
    if (index < remainingQuestions.length) {
      dispatch({
        type: types.GET_NEXT_QUESTION,
        payload: {
          ...remainingQuestions[index],
          index: index,
          attempts: 0,
          isCorrect: null,
          userAnswers: [],
        },
      });
      dispatch(removeQuestion(index));
    }
  };
};

//sets isCorrect in current question object to true
const markCorrect = () => {
  return {
    type: types.MARK_CORRECT,
  };
};

//sets isCorrect in current question object to false
const markWrong = () => {
  return {
    type: types.MARK_WRONG,
  };
};

const provideAnswer = (answer) => {
  return {
    type: types.PROVIDE_ANSWER,
    payload: answer,
  };
};
export { getNextQuestion, markCorrect, markWrong, provideAnswer };
