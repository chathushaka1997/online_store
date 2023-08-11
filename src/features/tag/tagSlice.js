import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  isInitialLoaded:false
};

const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    addTag: (state, action) => {
      state.tags = action.payload;
    },
    toggleInitalLoading:(state,action)=>{
        state.isInitialLoaded = action.payload
    }
  },
});

export default tagSlice.reducer;
export const { addTag,toggleInitalLoading } = tagSlice.actions;
