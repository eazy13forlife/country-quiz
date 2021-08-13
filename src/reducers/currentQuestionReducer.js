import types from "../actions/types";

const currentQuestionReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_NEXT_QUESTION:
      return action.payload;
    default:
      return state;
  }
};

export default currentQuestionReducer;
