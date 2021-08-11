import types from "../actions/types";

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case types.RETRIEVE_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
};

export default questionsReducer;
