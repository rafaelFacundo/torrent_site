import { useState } from "react";

type VideoComponentProps = {
  source: string;
};

const VideoComponent: React.FC<VideoComponentProps> = ({ source }) => {
  return (
    <video width="650" controls autoPlay>
      <source type="video/mp4" src={source} />
    </video>
  );
};

export default VideoComponent;
