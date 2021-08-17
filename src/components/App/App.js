import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  retrieveAllQuestions,
  getNextQuestion,
  incrementQuestionNumber,
} from "../../actions/";
import QuestionCard from "../QuestionCard/QuestionCard";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  const questionsAsked = useSelector((state) => {
    return state.questionsAsked;
  });

  const questionNumber = useSelector((state) => {
    return state.questionNumber;
  });
  const currentQuestion = questionsAsked[questionNumber]
    ? questionsAsked[questionNumber]
    : {};

  useEffect(() => {
    const onLoad = async () => {
      await dispatch(retrieveAllQuestions());
      dispatch(getNextQuestion());
      dispatch(incrementQuestionNumber());
    };
    onLoad();
  }, []);

  return (
    <div className="CountryQuiz">
      <QuestionCard cardTitle="Country Quiz" countryInfo={currentQuestion} />
    </div>
  );
};

export default App;
