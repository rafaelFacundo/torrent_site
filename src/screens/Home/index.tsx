import styled from "styled-components";
import HighLightMovie from "src/components/HighlightMovie";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <HighLightMovie />
    </Container>
  );
};

export default Home;
