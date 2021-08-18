import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import allQuestionsReducer from "./allQuestions";
import missedQuestionsReducer from "./missedQuestionsReducer";
import remainingQuestionsReducer from "./remainingQuestionsReducer";
import questionsAskedReducer from "./questionsAskedReducer";
import questionAskedIndexReducer from "./questionAskedIndexReducer";
import seeResultsReducer from "./seeResultsReducer";

export default combineReducers({
  allQuestions: allQuestionsReducer,
  missedQuestions: missedQuestionsReducer,
  remainingQuestions: remainingQuestionsReducer,
  questionsAsked: questionsAskedReducer,
  questionAskedIndex: questionAskedIndexReducer,
  seeResults: seeResultsReducer,
});
