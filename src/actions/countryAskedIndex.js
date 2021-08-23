import types from "./types";

//increments the index of of our countriesAskedIndex in order to align with
//the index of the country currently being asked.
const incrementCountryIndex = () => {
  return {
    type: types.INCREMENT_COUNTRY_INDEX,
  };
};

//decrements the index of of our countriesAskedIndex in order to align with
//the index of the country currently being asked.
const decrementCountryIndex = () => {
  return {
    type: types.DECREMENT_COUNTRY_INDEX,
  };
};

//resets our countryAskedIndex back to 0 when our array only has 1 item again
const resetCountryIndex = () => {
  return {
    type: types.RESET_COUNTRY_INDEX,
  };
};

export { incrementCountryIndex, decrementCountryIndex, resetCountryIndex };
