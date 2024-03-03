"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({videoSrc}) => {

  // Style for the container to maintain aspect ratio
  const playerWrapperStyle = {
    position: 'relative',
    paddingTop: '56.25%' // This represents an aspect ratio of 16:9
  };

  const reactPlayerStyle = {
    position: 'absolute',
    top: 0,
    left: 0
  };

  return (
    <div>
      <div style={playerWrapperStyle}>
        <ReactPlayer
          url={videoSrc}
          controls={true}
          light={false}
          pip={true}
          width="100%"
          height="100%"
          style={reactPlayerStyle}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
