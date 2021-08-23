import types from "./types";

//takes in the index of the country we want to remove from remainingCountries state
const removeCountry = (remainingQuestionsIndex) => {
  return {
    type: types.REMOVE_COUNTRY,
    payload: remainingQuestionsIndex,
  };
};

//called when wanting to reset the remainingCountries state to equal
//all the countries in allCountries state
const resetRemainingCountries = () => {
  return (dispatch, getState) => {
    const allQuestions = getState().allCountries;
    dispatch({
      type: types.RESET_REMAINING_COUNTRIES,
      payload: allQuestions,
    });
  };
};

export { removeCountry, resetRemainingCountries };
