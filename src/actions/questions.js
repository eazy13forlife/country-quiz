import axios from "axios";

import types from "./types";

//action creator that retrieves api data and calls
//createQuestionsArray to create the foundation of our questions array
const retrieveQuestions = () => {
  return async (dispatch) => {
    const allCountries = await axios.get(
      "https://restcountries.eu/rest/v2/all"
    );
    const questions = [];
    createQuestionsArray(questions, allCountries.data, 20);

    dispatch({
      type: types.RETRIEVE_QUESTIONS,
      payload: questions,
    });
  };
};

const addToMissedQuestions = (question, correctAnswer) => {
  return {
    type: types.ADD_TO_MISSED_QUESTIONS,
    payload: {
      question,
      correctAnswer,
    },
  };
};

const resetMissedQuestions = () => {
  return {
    type: types.RESET_MISSED_QUESTIONS,
  };
};

////////////////HELPER FUNCTIONS////////////////////

//returns a random index from an array
const getRandomIndex = (start = 0, end) => {
  return Math.ceil(Math.random() * (end - start)) + start;
};

//recursive function that adds a specific amount of random country
//objects from our api data to our questions array, to be used as the
//basis for our questions.
const createQuestionsArray = (result, data, quantity) => {
  //stop the recursive function when we have retrieved the number of
  //countries we wanted
  if (quantity === 0) {
    return;
  }

  //find a random index from our api data and push country
  // value to our result array
  const index = getRandomIndex(0, data.length - 1);
  const country = data[index];

  result.push({
    name: country.name,
    capital: country.capital,
    flagImg: country.flag,
    answerChoices: [country.name],
  });

  //remove the country from our api data so it won't be selected again
  //when recursive function is called. 0(n)
  //data array should only contain the questions that havent yet been selected
  data.splice(index, 1);

  // result[result.length - 1] is the current country object we are
  //working on. We want to add answer choices to this object.
  addAnswerChoices(result[result.length - 1].answerChoices, data, 3);
  createQuestionsArray(result, data, quantity - 1);
};

//adds answer choices to a country object in our questions array.
const addAnswerChoices = (result, data, quantity) => {
  //we want to remove answer choices that have already been selected
  // from dataCopy, so that no one question has duplicate answer
  //choices.
  // but the same answer choices can appear across many questions,
  // so we don't want to remove these from our original data array for //when our recursive function runs again.
  const dataCopy = [...data];
  for (let i = 1; i <= quantity; i++) {
    const index = getRandomIndex(0, dataCopy.length - 1);
    const country = dataCopy[index];
    result.push(country.name);
    dataCopy.splice(index, 1);
  }
};

export { retrieveQuestions, addToMissedQuestions };
