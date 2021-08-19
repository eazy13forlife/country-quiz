import types from "./types";

import { getRandomIndex } from "../helperFunctions";
import { removeQuestion } from "./remainingQuestions";
import { incrementQuestionNumber } from "./questionAskedIndex";

//gets a random country object from remainingQuestions state so this country
// can be pushed into questionsAsked(which provides the order of questions asked
// so far). In the process, this exact country is removed from the remainingQuestions state, so we can't choose it again.
const getNextQuestion = () => {
  return (dispatch, getState) => {
    const remainingQuestions = getState().remainingQuestions;
    const index = getRandomIndex(0, remainingQuestions.length - 1);
    dispatch({
      type: types.GET_NEXT_QUESTION,
      payload: {
        ...remainingQuestions[index],
        attempts: 0,
        isCorrect: null,
        userAnswers: [],
      },
    });
    dispatch(removeQuestion(index));
  };
};

const resetQuestionsAsked = () => {
  return {
    type: types.RESET_QUESTIONS_ASKED,
  };
};

//called when wanting to set isCorrect in current question object to true
const markCorrect = () => {
  return {
    type: types.MARK_CORRECT,
  };
};

//called when wanting to set isCorrect in current question object to false
const markWrong = () => {
  return {
    type: types.MARK_WRONG,
  };
};

//takes the answer choice user selected in order to be pushed into the userAnswer
//property in current question object
const provideAnswer = (answer) => {
  return {
    type: types.PROVIDE_ANSWER,
    payload: answer,
  };
};

export {
  getNextQuestion,
  markCorrect,
  markWrong,
  provideAnswer,
  resetQuestionsAsked,
};
