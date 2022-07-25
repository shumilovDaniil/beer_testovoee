import { configureStore } from "@reduxjs/toolkit";
import beersReducer from "./features/beersReducer";

export const store = configureStore({
  reducer: {
    beers: beersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch