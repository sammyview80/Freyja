import { GET_QUESTIONS } from "../actions/types";

const initalState = {
  questions: {}
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        questions: action.payload,
      };
    default:
      return {
        ...state
      };
  }
};