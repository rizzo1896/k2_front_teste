import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import moviesSlice from "../features/movies/movies";

export const store = configureStore({
  reducer: {
    movie: moviesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
