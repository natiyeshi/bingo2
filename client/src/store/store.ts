import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./features/admin/adminSlice";
import dealerSlice from "./features/dealer/dealerSlice";

export const store = configureStore({
    reducer : {
        dealer : dealerSlice,
        admin : adminSlice,
    },
})