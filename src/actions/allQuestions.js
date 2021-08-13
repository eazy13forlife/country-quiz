import axios from "axios";

import types from "./types";
import { getRandomIndex, swap, randomizeArray } from "../helperFunctions";

//payload is an array of 20 random country objects(along with answer choices for each country) in order to be used as the basis for our questions.
const retrieveAllQuestions = () => {
  return async (dispatch) => {
    const allCountries = await axios.get(
      "https://restcountries.eu/rest/v2/all"
    );
    const questions = [];
    createQuestionsArray(questions, allCountries.data, 20);

    dispatch({
      type: types.RETRIEVE_ALL_QUESTIONS,
      payload: questions,
    });
  };
};

////////////////HELPER FUNCTIONS////////////////////

const createQuestionsArray = (result, data, quantity) => {
  //if we want "quantity" of random items, shuffle the last "quantity" items in our data first
  for (let i = data.length - 1; i > data.length - 1 - quantity; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(data, randomIndex, i);
  }

  //then push the last "quantity" items into our result.
  //since we will be manipulating data array via pop() and getting new length
  //values, we save our endIndex
  const endIndex = data.length - 1 - quantity;
  for (let i = data.length - 1; i > endIndex; i--) {
    const country = data[i];
    result.push({
      name: country.name,
      capital: country.capital,
      flagImg: country.flag,
      answerChoices: [country.name],
    });

    // we remove the last country object so its not available as an answer choice
    //in next iteration
    data.pop();

    //we add "quantity" number of answer choices to the most recent country object we just pushed in.
    addAnswerChoices(result[result.length - 1].answerChoices, data, 3);
  }
};

const addAnswerChoices = (result, data, quantity) => {
  const dataCopy = [...data];
  //we shuffle the last "quantity" items and push them in as answer choices
  //we shuffle for extra randomness across answer choices. Don't necessarily need ///to
  for (let i = dataCopy.length - 1; i > dataCopy.length - 1 - quantity; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(dataCopy, randomIndex, i);
    result.push(dataCopy[i].name);
  }
  randomizeArray(result);
};

/*
//recursive function that adds a specific amount of random country
//objects from our api data to our questions array
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
  //when recursive function is called.
  //data array should only contain the questions that havent yet been selected
  data.splice(index, 1);

  // result[result.length - 1] is the current country object we are
  //working on. We want to add answer choices to this object.
  addAnswerChoices(result[result.length - 1].answerChoices, data, 3);
  createQuestionsArray(result, data, quantity - 1);
};

//adds answer choices to the answerChoices property in a  country object in our questions array.
const addAnswerChoices = (result, data, quantity) => {
  //we want to remove answer choices that have already been selected
  // from dataCopy, so that no one question has duplicate answer
  //choices.
  // but the same answer choices can appear across many questions,
  // so we don't want to remove these answer choices from our original data array
  const dataCopy = [...data];
  for (let i = 1; i <= quantity; i++) {
    const index = getRandomIndex(0, dataCopy.length - 1);
    const country = dataCopy[index];
    result.push(country.name);
    dataCopy.splice(index, 1);
  }
};
*/
export { retrieveAllQuestions };
