import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import loaderSlice from "./slices/loaderSlice";
import movieReducer from "./slices/movieSlice";
import geminiResSlice from "./slices/geminiResSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    loader: loaderSlice,
    nowPlayingMovies: movieReducer,
    geminiRespose: geminiResSlice,
  },
});
export default store;
