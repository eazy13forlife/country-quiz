import { retrieveAllQuestions } from "./allQuestions";

import { addToMissedQuestions, resetMissedQuestions } from "./missedQuestions";

import { removeQuestion, resetRemainingQuestions } from "./remainingQuestions";

import {
  getNextQuestion,
  setCurrentQuestion,
  markCorrect,
  markWrong,
  provideAnswer,
  resetQuestionsAsked,
} from "./questionsAsked";

import {
  incrementQuestionIndex,
  decrementQuestionIndex,
  resetQuestionIndex,
} from "./questionAskedIndex";

import { viewResults, hideResults } from "./seeResults";

export {
  retrieveAllQuestions,
  addToMissedQuestions,
  resetMissedQuestions,
  removeQuestion,
  getNextQuestion,
  setCurrentQuestion,
  markCorrect,
  markWrong,
  provideAnswer,
  incrementQuestionIndex,
  decrementQuestionIndex,
  viewResults,
  hideResults,
  resetQuestionIndex,
  resetQuestionsAsked,
  resetRemainingQuestions,
};
