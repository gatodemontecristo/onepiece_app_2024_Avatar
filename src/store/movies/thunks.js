import { getMovieDetail, getMovies } from "./helpers";
import {
    addMovieDetail,
  addMoviesCollection,
  loadMovies,
  sortByDuration,
  sortByYear,
} from "./movieSlice";

export const loadMoviesCollection = (order = true) => {
  return async (dispatch) => {
    dispatch(loadMovies());
    const result = await getMovies();
    await dispatch(addMoviesCollection(result));
    if (order) {
      dispatch(sortByYear());
    } else {
      dispatch(sortByDuration());
    }
  };
};

export const loadMovieDetail = (mal_id=459) => {
  return async (dispatch) => {
    dispatch(loadMovies());
    const result = await getMovieDetail(mal_id);
    await dispatch(addMovieDetail(result));
  };
};
