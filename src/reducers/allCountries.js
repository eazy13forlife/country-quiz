import types from "../actions/types";

const questionsListReducer = (state = [], action) => {
  switch (action.type) {
    case types.RETRIEVE_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default questionsListReducer;
