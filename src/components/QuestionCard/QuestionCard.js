import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useDispatch, useSelector } from "react-redux";

import AnswerChoice from "../AnswerChoice/AnswerChoice";
import { ReactComponent as ReactLogo } from "../../images/undraw_adventure_4hum 1.svg";
import {
  getNextCountry,
  incrementCountryIndex,
  decrementCountryIndex,
  viewResults,
} from "../../actions/";

import "./QuestionCard.scss";

const QuestionCard = ({
  cardTitle,
  countryInfo,
  currentCountry,
  countriesAsked,
  countryAskedIndex,
}) => {
  const dispatch = useDispatch();
  const totalQuestions = useSelector((state) => {
    return state.allCountries.length;
  });

  let renderedAnswerChoices;

  if (countryInfo.answerChoices) {
    renderedAnswerChoices = countryInfo.answerChoices.map(
      (answerChoice, index) => {
        const letter = String.fromCharCode(64 + (index + 1));
        return (
          <AnswerChoice
            key={index}
            letter={letter}
            answerChoice={answerChoice}
            currentCountry={currentCountry}
          />
        );
      }
    );
  } else {
    renderedAnswerChoices = null;
  }

  const getHeading = () => {
    if (countryInfo.indexInAllQuestions % 2 === 0) {
      return (
        <h2 className="secondary-heading  u-margin-bottom-medium u-text-align-center">
          {`${countryInfo.capital} is the capital of`}
        </h2>
      );
    } else {
      return (
        <h2 className="secondary-heading  u-margin-bottom-medium u-text-align-center">
          <div className="QuestionCard__image-container u-margin-bottom-small">
            <ReactCountryFlag
              style={{
                fontSize: "15rem",
              }}
              className="QuestionCard__image"
              countryCode={currentCountry.countryCode}
            ></ReactCountryFlag>
          </div>
          <span>Which country does this flag belong to?</span>
        </h2>
      );
    }
  };

  const onNextClick = () => {
    //if countryAskedIndex is less than length of our questionsAsked state then we will just increment to get to the next index. We wont get a new question yet
    if (countryAskedIndex <= countriesAsked.length - 2) {
      dispatch(incrementCountryIndex());
    } else {
      //we only get a new question when we are on the last question in our
      // questionsAsked state
      dispatch(getNextCountry());
      dispatch(incrementCountryIndex());
    }
  };

  const onPreviousClick = () => {
    dispatch(decrementCountryIndex());
  };

  const onReviewQuestionsClick = () => {
    dispatch(viewResults());
  };

  const renderButtons = () => {
    if (
      currentCountry.isCorrect === true &&
      countryAskedIndex === totalQuestions - 1
    ) {
      return (
        <div className="u-space-between">
          <button className="button-primary" onClick={onPreviousClick}>
            Previous
          </button>
          <button className="button-primary" onClick={onReviewQuestionsClick}>
            Review Missed ?s
          </button>
        </div>
      );
    } else if (currentCountry.isCorrect) {
      return (
        <div className="u-space-between">
          <button className="button-primary" onClick={onPreviousClick}>
            Previous
          </button>
          <button className="button-primary" onClick={onNextClick}>
            Next
          </button>
        </div>
      );
    } else {
      return (
        <div className="u-align-left">
          <button className="button-primary" onClick={onPreviousClick}>
            Previous
          </button>
        </div>
      );
    }
  };

  return (
    <div className="QuestionCard">
      <h1 className="primary-heading">{cardTitle}</h1>
      <ReactLogo className="QuestionCard__svg" />
      <div className="QuestionCard__contents">
        <p className="text u-margin-bottom-small">{`${
          countryAskedIndex + 1
        }/${totalQuestions}`}</p>
        {getHeading()}
        {renderedAnswerChoices}
        {renderButtons()}
      </div>
    </div>
  );
};

export default QuestionCard;
