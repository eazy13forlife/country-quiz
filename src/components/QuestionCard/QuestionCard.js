import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AnswerChoice from "../AnswerChoice/AnswerChoice";
import { ReactComponent as ReactLogo } from "../../images/undraw_adventure_4hum 1.svg";
import {
  getNextQuestion,
  addToQuestionsHistory,
  incrementQuestionIndex,
  decrementQuestionIndex,
  viewResults,
} from "../../actions/";

import "./QuestionCard.scss";

const QuestionCard = ({ cardTitle, countryInfo }) => {
  console.log("refresh");
  const dispatch = useDispatch();

  const questionAskedIndex = useSelector((state) => {
    return state.questionAskedIndex;
  });

  const questionsAsked = useSelector((state) => {
    return state.questionsAsked;
  });

  const totalQuestions = useSelector((state) => {
    return state.allQuestions.length;
  });

  const currentQuestion = questionsAsked[questionAskedIndex]
    ? questionsAsked[questionAskedIndex]
    : {};

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
          <figure className="QuestionCard__image-container u-margin-bottom-small">
            <img
              src={countryInfo.flagImg}
              alt="Flag"
              className="QuestionCard__image"
            />
          </figure>
          <span>Which country does this flag belong to?</span>
        </h2>
      );
    }
  };

  const onNextClick = () => {
    //if questionAskedIndex is less than length of our questionsHistoryy, then we will just increment to get to the number we want. We wont get a new question yet
    if (questionAskedIndex <= questionsAsked.length - 2) {
      dispatch(incrementQuestionIndex());
    } else {
      //we only get a new question when we are on the last question in our questionsHistory
      dispatch(getNextQuestion());
      dispatch(incrementQuestionIndex());
    }
  };

  const onPreviousClick = () => {
    if (questionAskedIndex >= 1) {
      dispatch(decrementQuestionIndex());
    }
  };

  const onReviewQuestionsClick = () => {
    dispatch(viewResults());
  };

  const renderButtons = () => {
    if (
      currentQuestion.isCorrect === true &&
      questionAskedIndex === totalQuestions - 1
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
    } else if (currentQuestion.isCorrect) {
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
          questionAskedIndex + 1
        }/${totalQuestions}`}</p>
        {getHeading()}
        {renderedAnswerChoices}
        {renderButtons()}
      </div>
    </div>
  );
};

export default QuestionCard;
