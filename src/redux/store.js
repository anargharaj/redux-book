import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice"


const productStore=configureStore({
    reducer:{
productReducer:productSlice
    }
})

export default productStore