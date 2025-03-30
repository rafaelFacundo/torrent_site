import React from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard";

type CategorySliderProps = {
  movies: any[];
  categoryName: string;
};

const Container = styled.div`
  width: 100%;
  height: 500px;
  padding-top: 40px;
  padding-top: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-color: black;
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  overflow-x: clip;
  padding-left: 50px;
  position: relative;
`;

const CategoryTitle = styled.h3`
  margin-bottom: 20px;
  color: white;
  font-size: 30px;
`;

const CategorySlider: React.FC<CategorySliderProps> = ({
  movies,
  categoryName,
}) => {
  return (
    <Container>
      <CategoryTitle>{categoryName}</CategoryTitle>
      <SliderContainer>
        {movies.map((movie) => (
          <MovieCard movieInfos={movie} />
        ))}
      </SliderContainer>
    </Container>
  );
};

export default CategorySlider;
