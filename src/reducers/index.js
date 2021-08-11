import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import questionsReducer from "./questionsReducer";
import missedQuestionsReducer from "./missedQuestionsReducer";

export default combineReducers({
  questions: questionsReducer,
  missedQuestions: missedQuestionsReducer,
});
