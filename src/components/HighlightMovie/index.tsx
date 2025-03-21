import styled from "styled-components";

type BackgroundImageComponentProps = {
  background: string;
};

type DescriptionElementProps = {
  fontSize: string;
};

const ContainerDiv = styled.div`
  width: 50%;
  height: 400px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
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

const HighLightMovie: React.FC = () => {
  const movie = {
    id: 65758,
    url: "https://yts.mx/movies/family-gbese-2024",
    imdb_code: "tt34425033",
    title: "Family Gbese",
    title_english: "Family Gbese",
    title_long: "Family Gbese (2024)",
    slug: "family-gbese-2024",
    year: 2024,
    rating: 0,
    runtime: 0,
    genres: ["Comedy", "Drama"],
    summary: "",
    description_full: "",
    synopsis:
      "Mazi's life is on fire, he got engaged to his dream girl and landed a promotion at his high-powered investment firm. Everything is going perfectly, until his mentor drops a bombshell request that threatens to blow up all his carefully crafted plans.",
    yt_trailer_code: "",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/family_gbese_2024/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/family_gbese_2024/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/family_gbese_2024/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/family_gbese_2024/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/family_gbese_2024/large-cover.jpg",
    state: "ok",
    torrents: [
      {
        url: "https://yts.mx/torrent/download/3734F9EB640A9D9E1BD09E004FC07C0799FAB591",
        hash: "3734F9EB640A9D9E1BD09E004FC07C0799FAB591",
        quality: "720p",
        type: "web",
        is_repack: "0",
        video_codec: "x264",
        bit_depth: "8",
        audio_channels: "2.0",
        seeds: 100,
        peers: 60,
        size: "811.25 MB",
        size_bytes: 850657280,
        date_uploaded: "2024-12-31 04:03:40",
        date_uploaded_unix: 1735614220,
      },
      {
        url: "https://yts.mx/torrent/download/67330EDEE80E8A92EDBC27D67024A984C9F0F858",
        hash: "67330EDEE80E8A92EDBC27D67024A984C9F0F858",
        quality: "1080p",
        type: "web",
        is_repack: "0",
        video_codec: "x264",
        bit_depth: "8",
        audio_channels: "2.0",
        seeds: 0,
        peers: 0,
        size: "1.47 GB",
        size_bytes: 1578400481,
        date_uploaded: "2024-12-31 05:06:42",
        date_uploaded_unix: 1735618002,
      },
    ],
    date_uploaded: "2024-12-31 04:03:40",
    date_uploaded_unix: 1735614220,
  };

  return (
    <ContainerDiv>
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
  );
};

export default HighLightMovie;
