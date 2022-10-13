import React from "react";
import "./Home.css";

export default function Home() {
  const name = "Gega Lataria";
  return (
    <div>
      <div className="home-page">
        <div className="name-container">
          <h1>
            Hi, My name is <span className="name-container__input">{name}</span>
          </h1>
          <h1>I'm a React Developer</h1>
        </div>
      </div>
    </div>
  );
}
