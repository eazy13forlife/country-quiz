import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { retrieveAllQuestions, getNextQuestion } from "../../actions/";
import QuestionCard from "../QuestionCard/QuestionCard";

const App = () => {
  const dispatch = useDispatch();

  const currentQuestion = useSelector((state) => {
    return state.currentQuestion;
  });

  useEffect(() => {
    const onLoad = async () => {
      await dispatch(retrieveAllQuestions());
      dispatch(getNextQuestion());
    };
    onLoad();
  }, []);

  return (
    <QuestionCard cardTitle="Country Quiz" countryInfo={currentQuestion} />
  );
};

export default App;
