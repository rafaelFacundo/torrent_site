import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export type MoviesState = {
    data: any[],
    numberOfMovies: number,
    totalOfPages: number,
    availableGenres: string[]
}

export type MoviesPayloadAction = {
    data: any[],
    numberOfMovies: number,
    totalOfPages: number,
}

const initialState: MoviesState = {
    data: [],
    numberOfMovies: 0,
    totalOfPages: 0,
    availableGenres: [
        'Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 
        'Documentary', 'Drama', 'Family', 'Fantasy', 'Film-Noir', 'History', 
        'Horror', 'Music', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Short', 
        'Sport', 'Thriller', 'War', 'Western',
      ]
}

export const moviesSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        setMoviesData: (state, action: PayloadAction<MoviesPayloadAction>) => {
            state.data = action.payload.data,
            state.numberOfMovies = action.payload.numberOfMovies,
            state.totalOfPages = action.payload.totalOfPages
        }
    }
})

export const {setMoviesData} = moviesSlice.actions;

export const selectMoviesData = (state: RootState) => state.movies.data;
export const selectMoviesTotalOfPages = (state: RootState) => state.movies.totalOfPages;
export const selectMoviesNumberOfMovies = (state: RootState) => state.movies.numberOfMovies;
export const selectMoviesAvailableGenres = (state: RootState) => state.movies.availableGenres;
export const selectMoviesState = (state: RootState) => state.movies;

export default moviesSlice.reducer;

