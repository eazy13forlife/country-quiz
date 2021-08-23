import React from "react";
import { useDispatch } from "react-redux";

import { ReactComponent as ReactLogo } from "../../images/undraw_adventure_4hum 1.svg";
import "./Results.scss";
import {
  resetRemainingCountries,
  resetMissedCountries,
  resetCountriesAsked,
  hideResults,
  resetCountryIndex,
  getNextCountry,
  retrieveCountries,
} from "../../actions/";

const Results = ({ missedCountries }) => {
  const dispatch = useDispatch();

  const onTryAgainClick = () => {
    dispatch(resetRemainingCountries());
    dispatch(resetMissedCountries());
    dispatch(resetCountriesAsked());
    dispatch(hideResults());
    dispatch(resetCountryIndex());
    dispatch(getNextCountry());
  };

  const onTryNewQuestionsClick = async () => {
    await dispatch(retrieveCountries());
    dispatch(resetMissedCountries());
    dispatch(resetCountriesAsked());
    dispatch(hideResults());
    dispatch(resetCountryIndex());
    dispatch(getNextCountry());
  };

  const getQuestion = (country) => {
    if (country.indexInAllQuestions % 2 === 0) {
      return (
        <h2 className="secondary-heading">
          {`${country.capital} is the capital of : `}
        </h2>
      );
    } else {
      return (
        <h2 className="secondary-heading">
          <figure className="Results__image-container">
            <img src={country.flagImg} alt="Flag" className="Results__image" />
          </figure>
          <span>Which country does this flag belong to?</span>
        </h2>
      );
    }
  };

  const renderedMissedCountries = missedCountries.map((country, index) => {
    return (
      <div
        className="Result__missed-question u-margin-bottom-small"
        key={index}
      >
        <span className="text">{index + 1}.</span>
        <div className="Result__question-info">
          {getQuestion(country)}
          <p className="text u-margin-bottom-small">{country.name}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="Results">
      <h1 className="primary-heading">Country Quiz</h1>
      <ReactLogo className="Results__svg" />
      <div className="Results__contents">
        <h2 className="secondary-heading u-text-align-center u-margin-bottom-medium u-underline">
          Missed Questions
        </h2>
        {missedCountries.length ? (
          renderedMissedCountries
        ) : (
          <p className="text u-text-align-center u-margin-bottom-medium">
            You got everything right!
          </p>
        )}
        <div className="u-space-between">
          <button className="button-secondary" onClick={onTryAgainClick}>
            Try Again
          </button>
          <button className="button-secondary" onClick={onTryNewQuestionsClick}>
            Try New Questions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
