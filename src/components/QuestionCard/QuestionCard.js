import React from "react";

import AnswerChoice from "../AnswerChoice/AnswerChoice";
import { getRandomizedArray } from "../../helperFunctions";

const QuestionCard = ({ cardTitle, question, answerChoices }) => {
  const renderedAnswerChoices = answerChoices.map((answerChoice, index) => {
    const letter = String.fromCharCode(64 + (index + 1));
    return (
      <AnswerChoice key={index} letter={letter} answerChoice={answerChoice} />
    );
  });

  return (
    <div className="QuestionCard">
      <h1 className="primary-heading">{cardTitle}</h1>
      <div className="QuestionCard__contents">
        <h2 className="secondary-heading">{question}</h2>
        {renderedAnswerChoices}
        <button className="button-primary">Next</button>
      </div>
    </div>
  );
};
