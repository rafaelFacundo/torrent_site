import "./App.css";
import styled from "styled-components";
import Header from "src/components/Header";
import YTSApiInstance from "./services/YTSApi";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { setLoadingValue } from "./store/slices/loadingSlice";
import { MoviesPayloadAction, setMoviesData } from "./store/slices/moviesSlice";
import { mockdata } from "./mock";

import { RouterProvider } from "react-router-dom";
import router from "./routes";

const Content = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin: 0;
`;

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getMoviesData = async () => {
      /* const data = await YTSApiInstance.get("list_movies.json");
      console.log("DATA FROM REQUEST");
      console.log(data); */
      await setTimeout(() => {}, 3000);
      const data = mockdata;
      const moviesSlicePayload: MoviesPayloadAction = {
        data,
        numberOfMovies: 20,
        totalOfPages: 1,
      };
      dispatch(setMoviesData(moviesSlicePayload));
      dispatch(setLoadingValue(false));
    };

    getMoviesData();
  }, []);

  return (
    <Content>
      <Header />
      <RouterProvider router={router} />
    </Content>
  );
}

export default App;
