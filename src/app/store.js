import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import BrandReducer from "../features/brand/brandSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    brand: BrandReducer,
  },
});

export default store;
