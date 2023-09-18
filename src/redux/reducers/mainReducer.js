import { GET_MAIN } from "../actions";

const initialState = {
  content: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAIN:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default booksReducer;
