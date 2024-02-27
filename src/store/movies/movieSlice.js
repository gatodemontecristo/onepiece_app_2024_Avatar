import { createSlice } from "@reduxjs/toolkit";


export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    isLoading: false,
    navBarColour: false,
    messageSaved: "",
    moviesCollection: [],
    movieDetail: {},
    characterDetail: {},
  },
  reducers: {
    loadMovies: (state) => {
      state.isLoading = true;
    },
    addMoviesCollection: (state, action) => {
      state.moviesCollection = action.payload;
      state.isLoading = false;
    },
    addMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
      state.isLoading = false;
    },
    addCharacterDetail: (state, action) => {
      state.characterDetail = action.payload;
      state.isLoading = false;
    },
    sortByYear: (state) => {
      state.moviesCollection = state.moviesCollection.sort((a, b) => b.date_aired - a.date_aired);
      state.isLoading = false;
    },
    sortByDuration: (state) => {
      state.moviesCollection = state.moviesCollection.sort((a, b) => b.realDuration - a.realDuration);
      state.isLoading = false;
    },
  },
});

export const {
    loadMovies,
    addMoviesCollection,
    addMovieDetail,
    addCharacterDetail,
    sortByYear,
    sortByDuration
} = movieSlice.actions;
