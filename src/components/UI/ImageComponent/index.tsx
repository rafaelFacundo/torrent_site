import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

type ImageComponentProps = {
  alt: string;
  styles?: React.CSSProperties;
  source: string;
};

const ImageComponent: React.FC<ImageComponentProps> = ({
  alt,
  styles,
  source,
}) => {
  return (
    <Div style={styles}>
      <Image alt={alt} src={source} />
    </Div>
  );
};

export default ImageComponent;
