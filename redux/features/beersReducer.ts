import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BeerItem, BeerSearch } from "../../types/types";

interface BeersState {
  beers: BeerItem[],
  status: "loading" | "succeeded" | "failed" | "idle",
  error: null | string | undefined
}

const initialState: BeersState = {
  beers: [],
  status: "idle",
  error: null
};

export const fetchBeers = createAsyncThunk(
  "beers/fetchBeers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.punkapi.com/v2/beers`);
      if (!response.ok) {
        throw new Error("error in fetchCars function");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      let message = "Unknown Error";
      if (err instanceof Error) message = err.message;
      return rejectWithValue({ message });
    }
  }
);

export const fetchSingleBeer = createAsyncThunk(
  "beers/fetchSingleBeer",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      if (!response.ok) {
        throw new Error("error in fetchCars function");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      let message = "Unknown Error";
      if (err instanceof Error) message = err.message;
      return rejectWithValue({ message });
    }
  }
);

export const searchBeers = createAsyncThunk(
  "beers/fetchBeers",
  async (data: BeerSearch, { rejectWithValue }) => {
    const { page, text } = data;
    try {
      const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&beer_name=${text}`);
      if (!response.ok) {
        throw new Error("error in fetchCars function");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      let message = "Unknown Error";
      if (err instanceof Error) message = err.message;
      return rejectWithValue({ message });
    }
  }
);

export const beersSlice = createSlice({
  name: "beers",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // fetchBeers -----------------------------------------
      .addCase(fetchBeers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBeers.fulfilled, (state: BeersState, action) => {
        state.status = "succeeded";
        state.beers = action.payload;
      })
      .addCase(fetchBeers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // fetchSingleBeer -----------------------------------------
      .addCase(fetchSingleBeer.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSingleBeer.fulfilled, (state: BeersState, action) => {
        state.status = "succeeded";
        state.beers = action.payload;
      })
      .addCase(fetchSingleBeer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

// export const { getBeersLength } = beersSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default beersSlice.reducer;


