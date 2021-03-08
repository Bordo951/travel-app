import React from 'react';
import "video-react/dist/video-react.css";
import { Player } from 'video-react';

const VideoOfCountry: React.FC = () => {
  return (
    <div>
      <Player // выдает warning
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
    </div>
  )
}

export default VideoOfCountry;