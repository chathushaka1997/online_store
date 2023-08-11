import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import BrandReducer from "../features/brand/brandSlice";
import TagReducer from "../features/tag/tagSlice";
import CategoryReducer from "../features/category/categorySlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    brand: BrandReducer,
    tag:TagReducer,
    category:CategoryReducer
  },
});

export default store;
