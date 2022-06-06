import types from "./types";

import { getRandomIndex } from "../helperFunctions";
import { removeCountry } from "./remainingCountries";

//gets a random country object from remainingQuestions state so this country
// can be pushed into countriesAsked(which provides the order of countries asked
// so far). In the process, this exact country is removed from the
// remainingCountries state, so we can't choose it again.
const getNextCountry = () => {
  return (dispatch, getState) => {
    const remainingCountries = getState().remainingCountries;
    const index = getRandomIndex(0, remainingCountries.length - 1);
    dispatch({
      type: types.GET_NEXT_COUNTRY,
      payload: {
        ...remainingCountries[index],
        attempts: 0,
        isCorrect: null,
        userAnswers: [],
      },
    });
    dispatch(removeCountry(index));
  };
};

const resetCountriesAsked = () => {
  return {
    type: types.RESET_COUNTRIES_ASKED,
  };
};

//called when wanting to set isCorrect in current country object to true
const markCorrect = () => {
  return {
    type: types.MARK_CORRECT,
  };
};

//called when wanting to set isCorrect in current country object to false
const markWrong = () => {
  return {
    type: types.MARK_WRONG,
  };
};

//takes the answer choice user selected in order to be pushed into the userAnswer
//property in current country object
const provideAnswer = (answer) => {
  return {
    type: types.PROVIDE_ANSWER,
    payload: answer,
  };
};

export {
  getNextCountry,
  markCorrect,
  markWrong,
  provideAnswer,
  resetCountriesAsked,
};
