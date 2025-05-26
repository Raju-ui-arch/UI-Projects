import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <span className="nav-link">Home</span>
        <span className="nav-link">Browse</span>
        <span className="nav-link">Radio</span>
      </div>

      <div className="header-right">
        <input type="text" placeholder="Search" className="search-input" />
        <div className="profile">
          <img
            src="https://wallpapercave.com/wp/wp1978998.jpg"
            alt="profile"
            className="profile-pic"
          />
          <span className="profile-name">NEIGHBOURHOOD</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
