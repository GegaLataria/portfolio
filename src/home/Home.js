import React from "react";
import { useRef } from "react";
import "./Home.css";

export default function Home() {
  const ref = useRef(null);
  const name = "Gega Lataria";
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="home-page">
        <div className="name-container">
          <h1>
            Hi, My name is <span className="name-container__input">{name}</span>
          </h1>
          <h1>I'm a React Developer</h1>
          <button className="name-container__button" onClick={handleClick}>
            Know More
          </button>
        </div>
      </div>
      <div className="about-container" ref={ref}>
        About
      </div>
      <div className="projects-container">projects</div>
    </div>
  );
}
