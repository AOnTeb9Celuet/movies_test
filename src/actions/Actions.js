import axios from "axios";
import {
  MOVIES_INFO_REQUEST,
  MOVIES_INFO_SUCCESS,
  MOVIES_INFO_FAIL,
} from "../constants/constants";

export const getMoviesInfo = () => dispatch => {
  dispatch({
    type: MOVIES_INFO_REQUEST
  });

  axios
    .get(
      `http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c`
    )
    .then(response => {
      dispatch({ type: MOVIES_INFO_SUCCESS, payload: response });
    })
    .catch(err => {
      dispatch({ type: MOVIES_INFO_FAIL, payload: err });
    });
};

export const getMovieDetails = (pathname) => dispatch => {
  dispatch({
    type: MOVIES_INFO_REQUEST
  });

  axios
    .get(
      `http://api.themoviedb.org/3/movie${pathname}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c`
    )
    .then(response => {
      dispatch({ type: MOVIES_INFO_SUCCESS, payload: response });
    })
    .catch(err => {
      dispatch({ type: MOVIES_INFO_FAIL, payload: err });
    });
};
