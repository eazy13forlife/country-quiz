import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import allQuestionsReducer from "./allCountries";
import missedCountriesReducer from "./missedCountriesReducer";
import remainingCountriesReducer from "./remainingCountriesReducer";
import countriesAskedReducer from "./countriesAskedReducer";
import countryAskedIndexReducer from "./countryAskedIndexReducer";
import seeResultsReducer from "./seeResultsReducer";

export default combineReducers({
  allCountries: allQuestionsReducer,
  missedCountries: missedCountriesReducer,
  remainingCountries: remainingCountriesReducer,
  countriesAsked: countriesAskedReducer,
  countryAskedIndex: countryAskedIndexReducer,
  seeResults: seeResultsReducer,
});
