import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from './movies'

export const store = configureStore({
  reducer: {
    movie:movieSlice.reducer
  },
})