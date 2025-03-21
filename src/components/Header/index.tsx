import styled, { keyframes, css } from "styled-components";
import SiteLogo from "src/assets/lumiereFlixLogo.png";
import { useAppSelector, useAppDispatch } from "src/store/hooks";
import { setLoadingValue } from "src/store/slices/loadingSlice";
import { useEffect, useRef, useState } from "react";

type HeaderStyleProps = {
  isloading: boolean;
};

type ImageLogoStyleProps = {
  isloading: boolean;
};

const DivContainer = styled.div<HeaderStyleProps>`
  transition: all 1s;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isloading ? "center" : "flex-start")};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: ${(props) => (props.isloading ? "100vh" : "100px")};
  padding: 5px;
  z-index: 10;
`;

const OptionsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;
`;
const Option = styled.li`
  margin-left: 15px;
  color: white;
`;

const imageLogoAnimation = keyframes`
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0.5);
  }
`;

const ImageLogo = styled.img<ImageLogoStyleProps>`
  width: ${(props) => (props.isloading ? "400px" : "200px")};
  height: ${(props) => (props.isloading ? "400px" : "200px")};
  animation: ${(props) =>
    props.isloading
      ? css`
          ${imageLogoAnimation} 1s linear infinite
        `
      : "none"};
  object-fit: contain;
`;

const Header: React.FC = () => {
  const headerContainerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const loadingValue: boolean = useAppSelector((state) => state.loading.value);
  const [headerContainerHeight, setHeaderContainerHeight] = useState<number>(0);

  useEffect(() => {
    const element = headerContainerRef.current;

    if (!element) return;

    const updateHeight = () => {
      setHeaderContainerHeight(element.offsetHeight);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(element);

    updateHeight();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {}, [headerContainerHeight]);

  return (
    <DivContainer
      ref={headerContainerRef}
      isloading={loadingValue}
      onClick={() => dispatch(setLoadingValue(!loadingValue))}
    >
      <ImageLogo
        src={SiteLogo}
        alt={"Logo of the site"}
        isloading={loadingValue}
      />
      {headerContainerHeight === 100 && (
        <OptionsList>
          <Option>Search by year</Option>
          <Option>Search by genres</Option>
          <Option>Search by name</Option>
          <Option>All movies</Option>
        </OptionsList>
      )}
    </DivContainer>
  );
};

export default Header;
