export const ADD_JOB = "ADD_JOB";
export const REMOVE_JOB = "REMOVE_JOB";
export const SET_ADMIN = "SET_ADMIN";
export const GET_MAIN = "GET_MAIN";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const getFetch = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=10");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_MAIN, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
