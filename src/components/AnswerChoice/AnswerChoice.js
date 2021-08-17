import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { VscError } from "react-icons/vsc";

import {
  markWrong,
  markCorrect,
  provideAnswer,
  addToMissedQuestions,
} from "../../actions/";
import "./AnswerChoice.scss";

const AnswerChoice = ({ answerChoice, letter }) => {
  const dispatch = useDispatch();

  const { name, isCorrect, userAnswers } = useSelector((state) => {
    return state.currentQuestion;
  });

  const currentQuestion = useSelector((state) => {
    return state.currentQuestion;
  });
  //so for each AnswerChoice component, i want to know what class to give it. If correct answer is chosen, i give it a success class. If wrong asnwer is chosen(whether isCorrect is true or false), i give it an errorClass. if answer hasn't been chosen, i give it a class of normal.
  const renderErrorOrSuccessClass = () => {
    if (
      isCorrect === true &&
      userAnswers[userAnswers.length - 1] === answerChoice
    ) {
      return "AnswerChoice--success";
    } else if (userAnswers.includes(answerChoice)) {
      return "AnswerChoice--error";
    } else {
      return "AnswerChoice--normal";
    }
  };

  const onAnswerClick = () => {
    if (answerChoice === name) {
      dispatch(markCorrect());
      dispatch(provideAnswer(answerChoice));
    } else {
      dispatch(markWrong());
      dispatch(provideAnswer(answerChoice));
      dispatch(addToMissedQuestions(currentQuestion));
    }
  };

  const renderSuccessOrErrorIcons = () => {
    if (renderErrorOrSuccessClass() === "AnswerChoice--success") {
      return <IoIosCheckmarkCircleOutline className="AnswerChoice__icon" />;
    } else if (renderErrorOrSuccessClass() === "AnswerChoice--error") {
      return <VscError className="AnswerChoice__icon" />;
    } else {
      return null;
    }
  };

  return (
    <div
      className={`AnswerChoice u-margin-bottom-small ${renderErrorOrSuccessClass()}`}
      onClick={isCorrect === true ? null : onAnswerClick}
    >
      <p className="text">{letter}</p>
      <p className="text AnswerChoice__answer">{answerChoice}</p>
      {renderSuccessOrErrorIcons()}
    </div>
  );
};

export default AnswerChoice;
