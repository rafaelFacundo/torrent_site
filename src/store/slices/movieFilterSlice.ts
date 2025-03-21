import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export type MovieFilter = {
    genre: string | null,
    year: string | null,
    name: string | null,
    page: number,
    limit: number
}

const initialState: MovieFilter = {
    genre: null,
    year: null,
    name: null,
    page: 1,
    limit: 20
}

export const movieFilterSlice = createSlice({
    name: "movieFilter",
    initialState: initialState,
    reducers: {
        setGenreFilter: (state, action: PayloadAction<string>) => {
            state.genre = action.payload;
        },
        setYearFilter: (state, action: PayloadAction<string>) => {
            state.year = action.payload;
        },
        setNameFilter: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setPageFilter: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    }
})

export const {setGenreFilter, setNameFilter, setPageFilter, setYearFilter} = movieFilterSlice.actions;

export const selectYearFilter = (state: RootState) => state.movieFilter.year;
export const selectGenreFilter = (state: RootState) => state.movieFilter.genre;
export const selectNameFilter = (state: RootState) => state.movieFilter.name;
export const selectPageFilter = (state: RootState) => state.movieFilter.page;

export default movieFilterSlice.reducer;