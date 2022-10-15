import React from "react";
import { useRef } from "react";
import profile from "../photos/profile.jpg";
import forwarder from "../photos/forwarder.png";
import shop from "../photos/online-shop.png";
import Pdf from "../photos/Lataria-Gega.pdf";
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
          <h1>I'm a React Developer🚀</h1>
          <button className="name-container__button" onClick={handleClick}>
            Know More
          </button>
        </div>
      </div>
      <div className="about-container" ref={ref}>
        <h1 className="about-container__title">About</h1>
        <div className="about-container__flex">
          <img
            src={profile}
            alt="profile"
            className="about-container__image"
          ></img>
          <div>
            <p className="about-container__input">
              I'm a self-starting, hard-working React Developer.
            </p>
            <br />
            <p className="about-container__input">
              To see my Resume, click the button below.
            </p>
            <a
              className="about-container__button"
              href={Pdf}
              rel="noreferrer"
              target="_blank"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <h1 className="about-container__title">Projects</h1>
        <div>
          <div className="project-container__flex">
            <div>
              <h2 className="project-title">Forwarder Web</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                a libero ornare, ornare lorem id, mollis ex. Nulla facilisi.
                Etiam placerat gravida quam quis iaculis. Duis mattis cursus
                elit, sit amet mollis augue feugiat sed. Donec lacus orci,
                eleifend a rutrum sit amet, volutpat et felis. Duis finibus
                volutpat lectus, at euismod ante rhoncus eu. Morbi ac auctor ex.
                Phasellus feugiat neque nunc, et aliquam magna posuere molestie.
                Nulla dignissim vitae ante ut tincidunt. Vivamus placerat a
                velit id semper.
              </p>
              <a
                className="see-live-button"
                target="_blank"
                rel="noreferrer"
                href="https://forwarder-web.vercel.app/main"
              >
                See Live
              </a>
              <a
                className="source-code-button"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/GegaLataria/forwarder-web"
              >
                Source Code
              </a>
            </div>
            <img src={forwarder} alt="project" className="project-image"></img>
          </div>
          <div className="project-container__flex">
            <div>
              <h2 className="project-title">Online Shop</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                a libero ornare, ornare lorem id, mollis ex. Nulla facilisi.
                Etiam placerat gravida quam quis iaculis. Duis mattis cursus
                elit, sit amet mollis augue feugiat sed. Donec lacus orci,
                eleifend a rutrum sit amet, volutpat et felis. Duis finibus
                volutpat lectus, at euismod ante rhoncus eu. Morbi ac auctor ex.
                Phasellus feugiat neque nunc, et aliquam magna posuere molestie.
                Nulla dignissim vitae ante ut tincidunt. Vivamus placerat a
                velit id semper.
              </p>
              <a
                className="see-live-button"
                target="_blank"
                rel="noreferrer"
                href="https://online-shop-five-beta.vercel.app/"
              >
                See Live
              </a>
              <a
                className="source-code-button"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/GegaLataria/online-shop"
              >
                Source Code
              </a>
            </div>
            <img src={shop} alt="project" className="project-image"></img>
          </div>
          <div className="project-container__flex">
            <div>
              <h2 className="project-title">Optimo Group</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                a libero ornare, ornare lorem id, mollis ex. Nulla facilisi.
                Etiam placerat gravida quam quis iaculis. Duis mattis cursus
                elit, sit amet mollis augue feugiat sed. Donec lacus orci,
                eleifend a rutrum sit amet, volutpat et felis. Duis finibus
                volutpat lectus, at euismod ante rhoncus eu. Morbi ac auctor ex.
                Phasellus feugiat neque nunc, et aliquam magna posuere molestie.
                Nulla dignissim vitae ante ut tincidunt. Vivamus placerat a
                velit id semper.
              </p>
              <a
                className="see-live-button"
                target="_blank"
                rel="noreferrer"
                href="https://optimo-task.vercel.app/"
              >
                See Live
              </a>
              <a
                className="source-code-button"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/GegaLataria/optimo-task-next.js"
              >
                Source Code
              </a>
            </div>
            <img src={shop} alt="project" className="project-image"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
