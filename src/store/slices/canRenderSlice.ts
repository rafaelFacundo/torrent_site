import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface CanRenderState {
    value: boolean
} 

const initialState: CanRenderState = {
    value: false
}

export const canRenderSlice = createSlice({
    name: 'canRender',
    initialState: initialState,
    reducers: {
        setCanRenderValue: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
})

export const {setCanRenderValue} = canRenderSlice.actions;

export const selectCanRenderValue = (state: RootState) => state.canRender.value;

export default canRenderSlice.reducer;

