import types from "../actions/types";

const missedCountriesReducer = (state = [], action) => {
  switch (action.type) {
    //add to missed countries if question hasn't already been answered incorrectly
    case types.ADD_TO_MISSED_COUNTRIES: {
      const country = state.find((country) => {
        return country.name === action.payload.name;
      });
      if (country) {
        return state;
      } else {
        return [...state, action.payload];
      }
    }
    case types.RESET_MISSED_COUNTRIES:
      return [];
    default:
      return state;
  }
};

export default missedCountriesReducer;
