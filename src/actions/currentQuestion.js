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
          userAnswer: null,
        },
      });
      dispatch(removeQuestion(index));
    }
  };
};

export { getNextQuestion };
