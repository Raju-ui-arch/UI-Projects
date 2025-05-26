import React from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Player from "./components/Player";
import "./App.css";

function App() {
  return (
        <div
      className="player-section"
      style={{
        backgroundImage: `url(${"https://wallpapercave.com/wp/wp1978998.jpg"})`,
      }}
    >

    <div className="app">
      <SideBar />
      <div className="main-content">
        <Header />
        <h1 className="Artist-Name">THE NEIGHBOURHOOD</h1>
        <Player />
      </div>
    </div>
    </div>
  );
}

export default App;
