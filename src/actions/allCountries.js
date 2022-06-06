import types from "./types";
import { swap, randomizeArray } from "../helperFunctions";
import allCountries from "../allCountries.js";

//fetches a specific amount of country objects from our api, in order to be used
//as the basis for our questions. *I need cors access so I saved API data*
const retrieveCountries = () => {
  const countries = [];
  createCountriesArray(countries, allCountries, 15);

  return {
    type: types.RETRIEVE_COUNTRIES,
    payload: countries,
  };
};

////////////////HELPER FUNCTIONS////////////////////

const createCountriesArray = async (result, data, quantity) => {
  //if we want "quantity" random items, shuffle the last "quantity" items in our data first
  for (let i = data.length - 1; i > data.length - 1 - quantity; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(data, randomIndex, i);
  }

  //then push the last "quantity" items that are random into our result.
  //since we will be manipulating data array via pop() for every iteration and
  // getting new length values, we save our initial endIndex
  const endIndex = data.length - 1 - quantity;

  for (let i = data.length - 1; i > endIndex; i--) {
    const country = data[i];
    let capital;

    if (!country.capital) {
      capital = "";
    } else {
      capital = country.capital[0];
    }

    result.push({
      name: country.name.common,
      capital: capital,
      flagImg: country.flags[0],
      countryCode: country.cca2,
      answerChoices: [country.name.common],
      indexInAllQuestions: i,
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
  //we shuffle for extra randomness across answer choices. Don't necessarily need
  //to
  for (let i = dataCopy.length - 1; i > dataCopy.length - 1 - quantity; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(dataCopy, randomIndex, i);
    result.push(dataCopy[i].name.common);
  }
  randomizeArray(result);
};

export { retrieveCountries };
