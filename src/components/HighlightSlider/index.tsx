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
  justify-content: space-around;
  overflow-x: hidden;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: black;
  gap: 150px;
  position: relative;
  width: 100%;
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
  const [centerindex, setCenterIndex] = useState(0);

  /* useEffect(() => {
    const handleScroll = () => {
      console.log("LAKSDjlskj");
      const slider = sliderRef.current;
      if (!slider) return;

      const { scrollLeft, offsetWidth } = slider;
      const centerPosition = scrollLeft + offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      slider.childNodes.forEach((child, index) => {
        const element = child as HTMLElement;
        const elementCenter = element.offsetLeft + element.offsetWidth / 2;
        const distance = Math.abs(centerPosition - elementCenter);

        if (distance - closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }

        setCenterIndex(closestIndex);
      });
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
    }
    () => {
      slider?.removeEventListener("scroll", handleScroll);
    };
  }, []); */

  const handleScroll = () => {
    console.log("AAAAAAAAA");
  };

  return (
    <Container>
      <SliderContainer ref={sliderRef} onScroll={handleScroll}>
        {moviesList.map((movie) => (
          <HighLightMovie movie={movie} />
        ))}
      </SliderContainer>
      <IndexPointsContainer>
        {moviesList.map((_, index) => (
          <IndexPointsElement></IndexPointsElement>
        ))}
      </IndexPointsContainer>
    </Container>
  );
};

export default HighlightSlider;
