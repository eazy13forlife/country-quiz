import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  retrieveAllQuestions,
  getNextQuestion,
  incrementQuestionNumber,
} from "../../actions/";
import QuestionCard from "../QuestionCard/QuestionCard";
import Results from "../Results/Results.js";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  const seeResults = useSelector((state) => {
    return state.seeResults;
  });

  const missedQuestions = useSelector((state) => {
    return state.missedQuestions;
  });

  const questionsAsked = useSelector((state) => {
    return state.questionsAsked;
  });

  const questionAskedIndex = useSelector((state) => {
    return state.questionAskedIndex;
  });
  const currentQuestion = questionsAsked[questionAskedIndex]
    ? questionsAsked[questionAskedIndex]
    : {};

  useEffect(() => {
    const onLoad = async () => {
      await dispatch(retrieveAllQuestions());
      dispatch(getNextQuestion());
    };
    onLoad();
  }, []);

  const renderBody = () => {
    if (seeResults) {
      return (
        <div className="CountryQuiz">
          <Results missedQuestions={missedQuestions} />
        </div>
      );
    } else {
      return (
        <div className="CountryQuiz">
          <QuestionCard
            cardTitle="Country Quiz"
            countryInfo={currentQuestion}
          />
        </div>
      );
    }
  };
  return renderBody();
};

export default App;
