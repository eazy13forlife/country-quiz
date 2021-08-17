import types from "./types";

import { getRandomIndex } from "../helperFunctions";
import { removeQuestion } from "./remainingQuestions";

//payload value is the next question from our remainingQuestions state. In the process, this exact question is removed from the remainingQuestions state.
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

//called to set our currentQuestion state to a specific question
const setCurrentQuestion = (question) => {
  return {
    type: types.SET_CURRENT_QUESTION,
    payload: question,
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
export {
  getNextQuestion,
  setCurrentQuestion,
  markCorrect,
  markWrong,
  provideAnswer,
};
