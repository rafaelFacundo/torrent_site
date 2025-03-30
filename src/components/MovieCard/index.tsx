import React from "react";
import styled, { keyframes, css } from "styled-components";

type MovieCardProps = {
  movieInfos: any;
};

const containerWidthGrowAnimation = keyframes`
  0% {
    width: 300px;
  }
  50% {
    width: 450px;
  }
  100% {
    width: 600px;
  }
`;

const containerWidthDecreaseAnimation = keyframes`
  0% {
    width: 600px;
  }
  50% {
    width: 450px;
  }
  100% {
    width: 300px;
  }
`;

const Container = styled.div`
  height: 400px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  border-radius: 10px;
  transition: 0.5s all ease-in-out;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    animation: ${containerWidthGrowAnimation} 0.5s linear forwards;
  }
  &:not(:hover) {
    animation: ${containerWidthDecreaseAnimation} 0.5s linear forwards;
  }
`;
const MovieImage = styled.img`
  height: 100%;
  max-width: 300px;
  object-fit: cover;
  border-radius: 10px;
  aspect-ratio: 1/1;
`;
const MovieInfosContainer = styled.div`
  background-color: black;
  width: 300px;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 15px;
  flex-shrink: 0;
  overflow: hidden;
`;
const Text = styled.p`
  color: white;
  font-size: 20px;
  margin: 0;
`;
const MoviesGenresDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
`;

const MovieCard: React.FC<MovieCardProps> = ({ movieInfos }) => {
  return (
    <Container>
      <MovieImage src={movieInfos.large_cover_image} />
      <MovieInfosContainer>
        <Text>{movieInfos.title}</Text>
        <Text>{movieInfos.year}</Text>
        <Text>{movieInfos.rating}</Text>
        <MoviesGenresDiv>
          {movieInfos.genres.map((genre: string) => (
            <Text>{genre}, </Text>
          ))}
        </MoviesGenresDiv>
      </MovieInfosContainer>
    </Container>
  );
};

export default MovieCard;
