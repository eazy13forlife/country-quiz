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

  const questionsAsked = useSelector((state) => {
    return state.questionsAsked;
  });

  const questionAskedIndex = useSelector((state) => {
    return state.questionAskedIndex;
  });

  const currentQuestion = questionsAsked[questionAskedIndex]
    ? questionsAsked[questionAskedIndex]
    : {};

  //so for each AnswerChoice component, I want to know what class to give it. If
  //correct answer is chosen, I give it a success class. If wrong answer is chosen
  //(whether isCorrect is true or false), I give it an errorClass. If answer
  //hasn't been chosen, i give it a class of normal.
  const renderErrorOrSuccessClass = () => {
    if (
      currentQuestion.isCorrect === true &&
      currentQuestion.userAnswers[currentQuestion.userAnswers.length - 1] ===
        answerChoice
    ) {
      return "AnswerChoice--success";
    } else if (currentQuestion.userAnswers.includes(answerChoice)) {
      return "AnswerChoice--error";
    } else {
      return "AnswerChoice--normal";
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

  const onAnswerClick = () => {
    if (answerChoice === currentQuestion.name) {
      dispatch(markCorrect());
      dispatch(provideAnswer(answerChoice));
    } else {
      dispatch(markWrong());
      dispatch(provideAnswer(answerChoice));
      dispatch(addToMissedQuestions(currentQuestion));
    }
  };

  return (
    <div
      className={`AnswerChoice u-margin-bottom-small ${renderErrorOrSuccessClass()}`}
      onClick={currentQuestion.isCorrect === true ? null : onAnswerClick}
    >
      <p className="text">{letter}</p>
      <p className="text AnswerChoice__answer">{answerChoice}</p>
      {renderSuccessOrErrorIcons()}
    </div>
  );
};

export default AnswerChoice;
