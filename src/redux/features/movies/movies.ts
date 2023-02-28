import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../../../services";
import { MovieState } from "./types";

const initialState: MovieState = {
  value: {
    Title: "",
    Poster: "",
    Plot: "",
    Actors: "",
    Metascore: "",
  },
  status: "idle",
};

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovie",
  async (title: string) => {
    return await getMovies(title);
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = "loading";
      });
  },
});

export default moviesSlice.reducer;
