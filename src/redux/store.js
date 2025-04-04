import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import loaderSlice from "./slices/loaderSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    loader: loaderSlice,
  },
});
export default store;
