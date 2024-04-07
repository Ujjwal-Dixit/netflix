import React, { useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <video
        ref={videoRef}
        className="w-full h-full"
        controls
        onClick={togglePlay}
      >
        <source
          src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;