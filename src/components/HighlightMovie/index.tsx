import React, { forwardRef } from "react";
import styled from "styled-components";

type BackgroundImageComponentProps = {
  background: string;
};

type DescriptionElementProps = {
  fontSize: string;
};

type ContainerDivProps = {
  scale: boolean;
};

const ContainerDiv = styled.div<ContainerDivProps>`
  width: 850px;
  flex-shrink: 0;
  height: 400px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transform: ${(props) => (props.scale ? "scale(1.2)" : "scale(0.7) ")};
  &:hover {
    cursor: pointer;
  }
  transition: 0.5s all ease;
`;
const MovieDescriptionDiv = styled.div`
  height: 100%;
  //width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  position: relative;
`;
const DescriptionElement = styled.p<DescriptionElementProps>`
  font-size: ${(props) => props.fontSize};
  color: white;
  text-align: justify;
`;
const MovieBackgroundImage = styled.img`
  object-fit: contain;
  height: 100%;
  max-width: 50%;
  border-radius: 10px 20px 20px 10px;
`;

const DescriptionAndImageDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const DescriptionsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
`;

const MovieImageBackground = styled.div<BackgroundImageComponentProps>`
  height: 100%;
  width: 100%;
  background: url(${(props) => props.background});
  filter: blur(30px) brightness(50%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

type HighLightMovieProps = {
  movie: any;
  doesItScale: boolean;
};

const HighLightMovie = forwardRef<HTMLDivElement, HighLightMovieProps>(
  ({ movie, doesItScale }, ref) => (
    <ContainerDiv ref={ref} scale={doesItScale}>
      <DescriptionAndImageDiv>
        <MovieDescriptionDiv>
          <MovieImageBackground
            background={movie.large_cover_image}
          ></MovieImageBackground>
          <DescriptionsDiv>
            <DescriptionElement fontSize={"40px"}>
              {movie.title}
            </DescriptionElement>
            <DescriptionElement fontSize={"20px"}>
              {movie.year}
            </DescriptionElement>
            <DescriptionElement fontSize={"20px"}>
              {movie.genres[0]}
            </DescriptionElement>
            <DescriptionElement fontSize={"20px"}>
              {`${movie.synopsis.slice(0, 250)}...`}
            </DescriptionElement>
          </DescriptionsDiv>
        </MovieDescriptionDiv>
        <MovieBackgroundImage
          src={movie.large_cover_image}
          alt={`wallpaper of the movie ${movie.title}`}
        />
      </DescriptionAndImageDiv>
    </ContainerDiv>
  )
);

export default HighLightMovie;
