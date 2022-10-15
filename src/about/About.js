import React from "react";
import profile from "../photos/profile.jpg";
import Pdf from "../photos/Lataria-Gega.pdf";

export default function About() {
  return (
    <div className="about-container">
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
  );
}
