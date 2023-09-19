export const ADD_JOB = "ADD_JOB";
export const REMOVE_JOB = "REMOVE_JOB";
export const SET_ADMIN = "SET_ADMIN";
export const GET_MAIN = "GET_MAIN";
export const LOADING_MAIN_ON = "LOADING_MAIN_ON";
export const LOADING_MAIN_OFF = "LOADING_MAIN_OFF";
export const LOADING_ERROR_ON = "LOADING_ERROR_ON";
export const LOADING_ERROR_OFF = "LOADING_ERROR_OFF";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
const baseEndpoint2 = "https://url-non-valido.";

export const getFetch = (query) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_MAIN_ON });
      const response = await fetch(baseEndpoint + query + "&limit=10");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_MAIN, payload: data });
        dispatch({ type: LOADING_MAIN_OFF });
      } else {
        alert("Error fetching results");
        // dispatch({ type: LOADING_ERROR_ON });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: LOADING_ERROR_ON, payload: error.message });
    } finally {
      dispatch({ type: LOADING_MAIN_OFF });
    }
  };
};
