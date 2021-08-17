import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import allQuestionsReducer from "./allQuestions";
import missedQuestionsReducer from "./missedQuestionsReducer";
import remainingQuestionsReducer from "./remainingQuestionsReducer";
import currentQuestionReducer from "./currentQuestionReducer";
import questionsHistoryReducer from "./questionsHistoryReducer";
import questionNumberReducer from "./questionNumberReducer";

export default combineReducers({
  allQuestions: allQuestionsReducer,
  missedQuestions: missedQuestionsReducer,
  remainingQuestions: remainingQuestionsReducer,
  currentQuestion: currentQuestionReducer,
  questionsHistory: questionsHistoryReducer,
  questionNumber: questionNumberReducer,
});
