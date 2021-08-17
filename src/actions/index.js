import { retrieveAllQuestions } from "./allQuestions";
import { addToMissedQuestions, resetMissedQuestions } from "./missedQuestions";
import { removeQuestion } from "./remainingQuestions";
import {
  getNextQuestion,
  setCurrentQuestion,
  markCorrect,
  markWrong,
  provideAnswer,
} from "./currentQuestion";
import { addToQuestionsHistory } from "./questionsHistory";

export {
  retrieveAllQuestions,
  addToMissedQuestions,
  resetMissedQuestions,
  removeQuestion,
  getNextQuestion,
  setCurrentQuestion,
  addToQuestionsHistory,
  markCorrect,
  markWrong,
  provideAnswer,
};
