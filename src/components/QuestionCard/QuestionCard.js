import React from "react";

import AnswerChoice from "../AnswerChoice/AnswerChoice";
import { getRandomizedArray } from "../../helperFunctions";

const QuestionCard = ({ cardTitle, countryInfo }) => {
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
    if (countryInfo.index % 2 === 0) {
      return (
        <h2 className="secondary-heading">
          {`${countryInfo.name} is the capital of`}
        </h2>
      );
    } else {
      return (
        <h2 className="secondary-heading">
          <figure className="QuestionCard__image-container">
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

  return (
    <div className="QuestionCard">
      <h1 className="primary-heading">{cardTitle}</h1>
      <div className="QuestionCard__contents">
        {getHeading()}
        {renderedAnswerChoices}
        <button className="button-primary">Next</button>
      </div>
    </div>
  );
};

export default QuestionCard;
