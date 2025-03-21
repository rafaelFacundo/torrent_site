import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

export interface LoadingState {
    value:  boolean
};

const initialState: LoadingState = {
    value: false
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: initialState,
    reducers: {
        setLoadingValue: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
})

export const {setLoadingValue} = loadingSlice.actions;

export const selectLoadingValue = (state: RootState) => state.loading.value;

export default loadingSlice.reducer;