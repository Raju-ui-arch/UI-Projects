// src/components/Sidebar.js
import React from "react";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Your Library</h2>
      <ul className="nav-list">
        <li>Made For You</li>
        <li>Recently Played</li>
        <li>Liked Songs</li>
        <li>Albums</li>
        <li>Artists</li>
        <li>Podcasts</li>
      </ul>

      <h3 className="playlist-title">Playlists</h3>
      <ul className="nav-list">
        <li>+ New Playlist</li>
        <li>Everything I wanted</li>
      </ul>
    </div>
  );
};

export default Sidebar;
