import { createSlice } from "@reduxjs/toolkit";

const geminiRes = createSlice({
  name: "gemini",
  initialState: {
    geminiRespose: null,
  },
  reducers: {
    setGeminiResponse: (state, action) => {
      state.geminiRespose = action.payload;
    },
  },
});

export const { setGeminiResponse } = geminiRes.actions;
export default geminiRes.reducer;
