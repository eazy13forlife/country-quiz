import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AnswerChoice from "../AnswerChoice/AnswerChoice";
import { markWrong, markCorrect, provideAnswer } from "../../actions/";
import { ReactComponent as ReactLogo } from "../../images/undraw_adventure_4hum 1.svg";
import "./QuestionCard.scss";

const QuestionCard = ({ cardTitle, countryInfo }) => {
  const dispatch = useDispatch();

  const { name, isCorrect, userAnswer } = useSelector((state) => {
    return state.currentQuestion;
  });

  let renderedAnswerChoices;

  const onAnswerClick = (answerChoice) => {
    if (answerChoice === name) {
      dispatch(markCorrect());
      dispatch(provideAnswer(answerChoice));
    } else {
      dispatch(markWrong());
      dispatch(provideAnswer(answerChoice));
    }
  };

  const renderErrorOrSuccessClass = (answerChoice) => {
    if (isCorrect === true && userAnswer === answerChoice) {
      return "AnswerChoice--success";
    } else if (isCorrect === false && userAnswer === answerChoice) {
      return "AnswerChoice--error";
    }
  };

  if (countryInfo.answerChoices) {
    renderedAnswerChoices = countryInfo.answerChoices.map(
      (answerChoice, index) => {
        const letter = String.fromCharCode(64 + (index + 1));

        return (
          <AnswerChoice
            key={index}
            letter={letter}
            answerChoice={answerChoice}
            onAnswerClick={onAnswerClick}
            error={renderErrorOrSuccessClass(answerChoice)}
          />
        );
      }
    );
  } else {
    renderedAnswerChoices = null;
  }

  const getHeading = () => {
    if (countryInfo.index % 2 === 0) {
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

  const renderNextButton = () => {
    if (isCorrect) {
      return (
        <div className="u-align-left">
          <button className="button-primary">Next</button>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="QuestionCard">
      <h1 className="primary-heading">{cardTitle}</h1>
      <ReactLogo className="QuestionCard__svg" />
      <div className="QuestionCard__contents">
        {getHeading()}
        {renderedAnswerChoices}
        {renderNextButton()}
      </div>
    </div>
  );
};

export default QuestionCard;
