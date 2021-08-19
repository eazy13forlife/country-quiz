import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as ReactLogo } from "../../images/undraw_adventure_4hum 1.svg";
import "./Results.scss";
import {
  resetRemainingQuestions,
  resetMissedQuestions,
  resetQuestionsAsked,
  hideResults,
  resetQuestionIndex,
  getNextQuestion,
  retrieveAllQuestions,
} from "../../actions/";
const Results = ({ missedQuestions }) => {
  const dispatch = useDispatch();

  const onTryAgainClick = () => {
    dispatch(resetRemainingQuestions());
    dispatch(resetMissedQuestions());
    dispatch(resetQuestionsAsked());
    dispatch(hideResults());
    dispatch(resetQuestionIndex());
    dispatch(getNextQuestion());
  };

  const onTryNewQuestionsClick = async () => {
    await dispatch(retrieveAllQuestions());
    dispatch(resetMissedQuestions());
    dispatch(resetQuestionsAsked());
    dispatch(hideResults());
    dispatch(resetQuestionIndex());
    dispatch(getNextQuestion());
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

  const renderedMissedQuestions = missedQuestions.map((country, index) => {
    return (
      <div
        className="Result__missed-question u-margin-bottom-small"
        key={index}
      >
        <span className="text">{index + 1}.</span>
        <div className="Result__question-info">
          {getQuestion(country)}
          <p className="text">{country.name}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="Results">
      <h1 className="primary-heading">Country Quiz</h1>
      <ReactLogo className="Results__svg" />
      <div className="Results__contents">
        <h2 className="secondary-heading u-text-align-center u-margin-bottom-medium">
          Missed Questions
        </h2>
        {missedQuestions.length
          ? renderedMissedQuestions
          : `You got everything right!`}
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
