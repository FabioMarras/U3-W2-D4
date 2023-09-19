import { useSelector } from "react-redux";
import { GET_MAIN, LOADING_ERROR_OFF, LOADING_ERROR_ON, LOADING_MAIN_OFF, LOADING_MAIN_ON } from "../actions";

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
    case LOADING_MAIN_ON:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_MAIN_OFF:
      return {
        ...state,
        isLoading: false,
      };
    case LOADING_ERROR_ON:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };
    case LOADING_ERROR_OFF:
      return {
        ...state,
        hasError: false,
        errorMessage: "",
      };
    default:
      return state;
  }
};

export default booksReducer;
