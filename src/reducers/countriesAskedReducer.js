import types from "../actions/types";

const countriesAskedReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_NEXT_COUNTRY:
      return [...state, action.payload];
    case types.MARK_CORRECT: {
      const newState = [...state];
      const currentCountry = newState[newState.length - 1];
      currentCountry.isCorrect = true;
      return newState;
    }
    case types.MARK_WRONG: {
      const newState = [...state];
      const currentCountry = newState[newState.length - 1];
      currentCountry.isCorrect = false;
      return newState;
    }
    case types.PROVIDE_ANSWER: {
      const newState = [...state];
      const currentCountry = newState[newState.length - 1];
      if (!currentCountry.userAnswers.includes(action.payload)) {
        currentCountry.userAnswers.push(action.payload);
        return newState;
      }
      return state;
    }
    case types.RESET_COUNTRIES_ASKED:
      return [];
    default:
      return state;
  }
};

export default countriesAskedReducer;
