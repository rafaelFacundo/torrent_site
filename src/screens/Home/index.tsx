import styled from "styled-components";
import HighLightMovie from "src/components/HighlightMovie";
import HighlightSlider from "src/components/HighlightSlider";

const mockList = [
  {
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
    synopsis: "",
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
  },
  {
    id: 65755,
    url: "https://yts.mx/movies/paper-dream-2022",
    imdb_code: "tt13876034",
    title: "Paper Dream",
    title_english: "Paper Dream",
    title_long: "Paper Dream (2022)",
    slug: "paper-dream-2022",
    year: 2022,
    rating: 5.6,
    runtime: 98,
    genres: ["Drama"],
    summary: "",
    description_full: "",
    synopsis: "",
    yt_trailer_code: "YwDNIr52R14",
    language: "fa",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/paper_dream_2022/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/paper_dream_2022/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/paper_dream_2022/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/paper_dream_2022/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/paper_dream_2022/large-cover.jpg",
    state: "ok",
    torrents: [
      {
        url: "https://yts.mx/torrent/download/C9E362102A41E6AC8439233F3396CA8D8C7977E0",
        hash: "C9E362102A41E6AC8439233F3396CA8D8C7977E0",
        quality: "720p",
        type: "web",
        is_repack: "0",
        video_codec: "x264",
        bit_depth: "8",
        audio_channels: "2.0",
        seeds: 0,
        peers: 0,
        size: "909.45 MB",
        size_bytes: 953627443,
        date_uploaded: "2024-12-31 00:35:24",
        date_uploaded_unix: 1735601724,
      },
      {
        url: "https://yts.mx/torrent/download/D155779C5833C2091F6DCDD4DFA196E887D030F9",
        hash: "D155779C5833C2091F6DCDD4DFA196E887D030F9",
        quality: "1080p",
        type: "web",
        is_repack: "0",
        video_codec: "x264",
        bit_depth: "8",
        audio_channels: "2.0",
        seeds: 0,
        peers: 0,
        size: "1.65 GB",
        size_bytes: 1771674010,
        date_uploaded: "2024-12-31 01:38:50",
        date_uploaded_unix: 1735605530,
      },
    ],
    date_uploaded: "2024-12-31 00:35:24",
    date_uploaded_unix: 1735601724,
  },
  {
    id: 65754,
    url: "https://yts.mx/movies/ghosts-of-cite-soleil-2006",
    imdb_code: "tt0479046",
    title: "Ghosts of Cité Soleil",
    title_english: "Ghosts of Cité Soleil",
    title_long: "Ghosts of Cité Soleil (2006)",
    slug: "ghosts-of-cite-soleil-2006",
    year: 2006,
    rating: 6.9,
    runtime: 85,
    genres: ["Action", "Documentary", "Drama", "Music", "Romance", "War"],
    summary: "",
    description_full: "",
    synopsis: "",
    yt_trailer_code: "",
    language: "en",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/ghosts_of_cite_soleil_2006/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/ghosts_of_cite_soleil_2006/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/ghosts_of_cite_soleil_2006/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/ghosts_of_cite_soleil_2006/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/ghosts_of_cite_soleil_2006/large-cover.jpg",
    state: "ok",
    torrents: [
      {
        url: "https://yts.mx/torrent/download/BBE371962534EFD643F922208DF5174906AA815E",
        hash: "BBE371962534EFD643F922208DF5174906AA815E",
        quality: "720p",
        type: "web",
        is_repack: "0",
        video_codec: "x264",
        bit_depth: "8",
        audio_channels: "2.0",
        seeds: 0,
        peers: 0,
        size: "785.84 MB",
        size_bytes: 824012964,
        date_uploaded: "2024-12-30 17:29:17",
        date_uploaded_unix: 1735576157,
      },
      {
        url: "https://yts.mx/torrent/download/D22E1352503290088DDC524C59142C33F237444B",
        hash: "D22E1352503290088DDC524C59142C33F237444B",
        quality: "1080p",
        type: "web",
        is_repack: "0",
        video_codec: "x264",
        bit_depth: "8",
        audio_channels: "5.1",
        seeds: 0,
        peers: 0,
        size: "1.58 GB",
        size_bytes: 1696512082,
        date_uploaded: "2024-12-30 18:36:37",
        date_uploaded_unix: 1735580197,
      },
    ],
    date_uploaded: "2024-12-30 17:29:17",
    date_uploaded_unix: 1735576157,
  },
  {
    id: 65753,
    url: "https://yts.mx/movies/ayakta-kal-2009",
    imdb_code: "tt1278005",
    title: "Ayakta Kal",
    title_english: "Ayakta Kal",
    title_long: "Ayakta Kal (2009)",
    slug: "ayakta-kal-2009",
    year: 2009,
    rating: 2.3,
    runtime: 98,
    genres: ["Comedy", "Drama"],
    summary: "",
    description_full: "",
    synopsis: "",
    yt_trailer_code: "",
    language: "tr",
    mpa_rating: "",
    background_image:
      "https://yts.mx/assets/images/movies/ayakta_kal_2009/background.jpg",
    background_image_original:
      "https://yts.mx/assets/images/movies/ayakta_kal_2009/background.jpg",
    small_cover_image:
      "https://yts.mx/assets/images/movies/ayakta_kal_2009/small-cover.jpg",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/ayakta_kal_2009/medium-cover.jpg",
    large_cover_image:
      "https://yts.mx/assets/images/movies/ayakta_kal_2009/large-cover.jpg",
    state: "ok",
    torrents: [
      {
        url: "https://yts.mx/torrent/download/BDA3915EE50360661238B179512A64892F38695B",
        hash: "BDA3915EE50360661238B179512A64892F38695B",
        quality: "720p",
        type: "web",
        is_repack: "0",
        video_codec: "x264",
        bit_depth: "8",
        audio_channels: "2.0",
        seeds: 36,
        peers: 6,
        size: "901.54 MB",
        size_bytes: 945333207,
        date_uploaded: "2024-12-30 15:13:33",
        date_uploaded_unix: 1735568013,
      },
      {
        url: "https://yts.mx/torrent/download/A9D8E7C46E07B4128244BB0B946C3B172F3AAFBD",
        hash: "A9D8E7C46E07B4128244BB0B946C3B172F3AAFBD",
        quality: "1080p",
        type: "web",
        is_repack: "0",
        video_codec: "x264",
        bit_depth: "8",
        audio_channels: "5.1",
        seeds: 40,
        peers: 12,
        size: "1.81 GB",
        size_bytes: 1943472701,
        date_uploaded: "2024-12-30 16:18:18",
        date_uploaded_unix: 1735571898,
      },
    ],
    date_uploaded: "2024-12-30 15:13:33",
    date_uploaded_unix: 1735568013,
  },
];

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <HighlightSlider moviesList={mockList} />
      {/* <HighLightMovie /> */}
    </Container>
  );
};

export default Home;
