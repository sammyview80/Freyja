import { EVALUATE_QUESTION } from "../actions/types";

const initialState = {
  result: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case EVALUATE_QUESTION:
      return action.payload;
    default:
      return state;
  }
}