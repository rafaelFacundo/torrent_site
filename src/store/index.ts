import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/loadingSlice"
import canRenderReducer from "./slices/canRenderSlice";
import moviesReducer from "./slices/moviesSlice";
import movieFilterReducer from "./slices/movieFilterSlice";

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        canRender: canRenderReducer,
        movies: moviesReducer,
        movieFilter: movieFilterReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;