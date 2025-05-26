import React, { useState } from "react";
import "./Player.css";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleFollowUnfollow = () => {
    setIsFollowed((prev) => !prev);
  };

  return (
      <div className="overlay-content">
        <div className="button-group">
          <button className="play-button" onClick={togglePlayPause}>
            {isPlaying ? "PAUSE" : "PLAY"}
          </button>
          <button className="follow-button" onClick={toggleFollowUnfollow}>
            {isFollowed ? "FOLLOWING" : "FOLLOW"}
          </button>
          <button className="dot-button">•••</button>
        </div>

        <div className="nav-link-group">
          <span className="nav-link">OVERVIEW</span>
          <span className="nav-link">BROWSE</span>
          <span className="nav-link">RADIO</span>
        </div>
      </div>
  );
};

export default Player;
