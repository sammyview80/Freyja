import { EVALUATE_ANSWER } from "../actions/types";

const initialState = {
  result: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case EVALUATE_ANSWER:
      return action.payload;
    default:
      return state;
  }
}