import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { retrieveCountries, getNextCountry } from "../../actions/";
import QuestionCard from "../QuestionCard/QuestionCard";
import Results from "../Results/Results.js";
import Footer from "../Footer/Footer.js";
import Container from "../Container/Container.js";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  const seeResults = useSelector((state) => {
    return state.seeResults;
  });

  const missedCountries = useSelector((state) => {
    return state.missedCountries;
  });

  const countriesAsked = useSelector((state) => {
    return state.countriesAsked;
  });

  const countryAskedIndex = useSelector((state) => {
    return state.countryAskedIndex;
  });

  const currentCountry = countriesAsked[countryAskedIndex]
    ? countriesAsked[countryAskedIndex]
    : {};

  useEffect(() => {
    const onLoad = async () => {
      await dispatch(retrieveCountries());
      dispatch(getNextCountry());
    };
    onLoad();
  }, []);

  const renderBody = () => {
    if (seeResults) {
      return (
        <div className="CountryQuiz">
          <Results missedCountries={missedCountries} />
          <Footer />
        </div>
      );
    } else {
      return (
        <Container>
          <div className="CountryQuiz">
            <QuestionCard
              cardTitle="Country Quiz"
              countryInfo={currentCountry}
              currentCountry={currentCountry}
              countriesAsked={countriesAsked}
              countryAskedIndex={countryAskedIndex}
            />
          </div>
          <Footer />
        </Container>
      );
    }
  };
  return renderBody();
};

export default App;
