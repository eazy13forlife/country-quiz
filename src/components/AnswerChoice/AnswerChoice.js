import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { markWrong, markCorrect, provideAnswer } from "../../actions/";
import "./AnswerChoice.scss";

const AnswerChoice = ({ answerChoice, letter }) => {
  const dispatch = useDispatch();

  const { name, isCorrect, userAnswer } = useSelector((state) => {
    return state.currentQuestion;
  });

  const renderErrorOrSuccessClass = () => {
    if (isCorrect === true && userAnswer === answerChoice) {
      return "AnswerChoice--success";
    } else if (isCorrect === false && userAnswer === answerChoice) {
      return "AnswerChoice--error";
    }
  };
  const onAnswerClick = () => {
    if (answerChoice === name) {
      dispatch(markCorrect());
      dispatch(provideAnswer(answerChoice));
    } else {
      dispatch(markWrong());
      dispatch(provideAnswer(answerChoice));
    }
  };
  const onMouseOver=()=>{
    
  }
  return (
    <div
      className={`AnswerChoice u-margin-bottom-small ${renderErrorOrSuccessClass()}`}
      onClick={onAnswerClick}
      onMouseOver={}
    >
      <p className="text">{letter}</p>
      <p className="text AnswerChoice__answer">{answerChoice}</p>
    </div>
  );
};

export default AnswerChoice;
