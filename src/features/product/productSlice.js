import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: undefined,
  isInitialLoaded:false
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload;
    },
    toggleInitalLoading:(state,action)=>{
        state.isInitialLoaded = action.payload
    }
  },
});

export default productSlice.reducer;
export const { addProduct,toggleInitalLoading } = productSlice.actions;
