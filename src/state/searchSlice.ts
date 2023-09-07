import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/state/store";

// Define a type for the slice state
interface SearchState {
  query: string;
  results: any[];
}

// Define the initial state using that type
const initialState: SearchState = {
  query: "",
  results: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getQuery = (state: RootState) => state.search.query;

export default searchSlice.reducer;
