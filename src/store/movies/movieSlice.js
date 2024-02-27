import { createSlice } from "@reduxjs/toolkit";


export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    isLoading: false,
    navBarColour: false,
    messageSaved: "",
    moviesCollection: [],
  },
  reducers: {
    loadMovies: (state) => {
      state.isLoading = true;
    },
    addMoviesCollection: (state, action) => {
      state.moviesCollection = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
    loadMovies,
    addMoviesCollection
} = movieSlice.actions;
