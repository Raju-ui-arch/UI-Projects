import React from "react"; 
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
    return (
        <div className="app">
            <SideBar />
            <div className="content">
                <h1>Welcome to the Dribble UI Clone!</h1>
            </div>
        </div>
    )
}

export default App;