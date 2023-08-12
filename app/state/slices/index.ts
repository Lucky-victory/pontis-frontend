import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  data: [] as any[],
  status: "loading" as 'loading'|'error'|'success',
  error: null,
};
export const bridgeCollectionSlice = createSlice({
  name: "bridge-collection",
  initialState,
  reducers: {
    addCollection(state,action) {
        state.data=[...state.data,action.payload]
    },
  },
});

export const { addCollection } = bridgeCollectionSlice.actions;
export default bridgeCollectionSlice.reducer;
