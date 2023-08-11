import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  isInitialLoaded:false
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories = action.payload;
    },
    toggleInitalLoading:(state,action)=>{
        state.isInitialLoaded = action.payload
    }
  },
});

export default categorySlice.reducer;
export const { addCategory,toggleInitalLoading } = categorySlice.actions;
