import { ADD_JOB, REMOVE_JOB } from "../actions";

const initialState = {
  content: [],
};

const addRemoveCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_JOB:
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default addRemoveCart;
