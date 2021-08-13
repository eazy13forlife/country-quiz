import React from "react";

const AnswerChoice = ({ answerChoice, letter }) => {
  return (
    <div className="AnswerChoice">
      <p className="text">{letter}</p>
      <p className="text">{answerChoice}</p>
    </div>
  );
};

export default AnswerChoice;
