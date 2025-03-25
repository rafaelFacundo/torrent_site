import styled from "styled-components";
import HighLightMovie from "../HighlightMovie";
import { useEffect, useRef, useState } from "react";

type HighlightSliderProps = {
  moviesList: any[];
};

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  padding-top: 150px;
  padding-bottom: 100px;
  background-color: black;
  gap: 150px;
  position: relative;
  width: 100%;
  padding-left: 850px;
  padding-right: 850px;
`;

const IndexPointsContainer = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
`;

const IndexPointsElement = styled.button`
  height: 10px;
  width: 10px;
  background-color: pink;
  border-radius: 50%;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const HighlightSlider: React.FC<HighlightSliderProps> = ({ moviesList }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const movieCardsRef = useRef<HTMLElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {}, [movieCardsRef]);

  useEffect(() => {
    const slider = sliderRef.current;
    const moviesCardsRefs = movieCardsRef.current;
    if (slider && moviesCardsRefs) {
      slider.scrollTo({
        left: 850 - moviesCardsRefs[0].clientWidth / 2,
        behavior: "smooth",
      });
    }
    setCurrentIndex(0);
  }, [movieCardsRef]);

  const handleScroll = (movieIndex: number) => {
    const slider = sliderRef.current;
    const moviesCardsRefs = movieCardsRef.current;
    if (slider && moviesCardsRefs) {
      sliderRef.current.scrollTo({
        left: (movieIndex + 1) * 850 - moviesCardsRefs[0].clientWidth / 2,
        behavior: "smooth",
      });
      setCurrentIndex(movieIndex);
    }
  };

  return (
    <Container>
      <SliderContainer ref={sliderRef}>
        {moviesList.map((movie, index) => (
          <HighLightMovie
            doesItScale={index === currentIndex}
            movie={movie}
            ref={(el: HTMLDivElement) => (movieCardsRef.current[index] = el)}
          />
        ))}
      </SliderContainer>
      <IndexPointsContainer>
        {moviesList.map((_, index) => (
          <IndexPointsElement
            onClick={() => handleScroll(index)}
          ></IndexPointsElement>
        ))}
      </IndexPointsContainer>
    </Container>
  );
};

export default HighlightSlider;
