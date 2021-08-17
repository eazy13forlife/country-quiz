import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { retrieveAllQuestions, getNextQuestion } from "../../actions/";
import QuestionCard from "../QuestionCard/QuestionCard";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  const questionsHistory = useSelector((state) => {
    return state.questionsHistory;
  });

  const questionNumber = useSelector((state) => {
    return state.questionNumber;
  });
  const currentQuestion = questionsHistory[questionNumber]
    ? questionsHistory[questionNumber]
    : {};

  useEffect(() => {
    const onLoad = async () => {
      await dispatch(retrieveAllQuestions());
      dispatch(getNextQuestion());
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
