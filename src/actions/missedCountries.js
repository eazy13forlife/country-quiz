import types from "./types";

//takes in the country object of the question missed in order to be added
//to our missed countries state. Since a question includes a flag and I cant put
//the image in the question,I'm providing all the components needed to recreate
//this question from scratch
const addToMissedCountries = (currentQuestion) => {
  const { name, capital, flagImg, indexInAllQuestions } = currentQuestion;

  return {
    type: types.ADD_TO_MISSED_COUNTRIES,
    payload: {
      name,
      capital,
      flagImg,
      indexInAllQuestions,
    },
  };
};

const resetMissedCountries = () => {
  return {
    type: types.RESET_MISSED_COUNTRIES,
  };
};

export { addToMissedCountries, resetMissedCountries };
