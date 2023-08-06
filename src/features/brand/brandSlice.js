import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
  isInitialLoaded:false
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    addBrand: (state, action) => {
      state.brands = action.payload;
    },
    toggleInitalLoading:(state,action)=>{
        state.isInitialLoaded = action.payload
    }
  },
});

export default brandSlice.reducer;
export const { addBrand,toggleInitalLoading } = brandSlice.actions;
