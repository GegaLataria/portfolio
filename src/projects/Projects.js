import React from "react";
import forwarder from "../photos/forwarder.png";
import shop from "../photos/online-shop.png";
import optimo from "../photos/optimo.png";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="about-container__title">Projects</h1>
      <div>
        <div className="project-container__flex">
          <div className="project-input-container">
            <h2 className="project-title">Forwarder Web</h2>
            <ul className="project-description">
              <li>Worked on Front-end using React.js</li>
              <li>Responsive on all screen sizes using CSS</li>
              <li>Used React Context to share data to all components</li>
              <li>Used Axios to fetch data from server</li>
              <li>Used React Router to configure routes</li>
              <li>Used Google Maps API to load company address</li>
              <li>Used iframe to load YouTube video on a website</li>
              <li>
                Implemented Login and Register by saving data in local storage
              </li>
            </ul>
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
          <div className="project-input-container">
            <h2 className="project-title">Online Shop</h2>
            <ul className="project-description">
              <li>Worked on Front-end using React.js</li>
              <li>Used React Context to share data to all components</li>
              <li>Used React Router to configure routes</li>
              <li>Implemented Cart by saving data in local storage</li>
              <li>Used setTimeout to implement auto-updating slideshow</li>
              <li>Responsive on all screen sizes using CSS</li>
            </ul>
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
          <div className="project-input-container">
            <h2 className="project-title">Optimo Group</h2>
            <ul className="project-description">
              <li>Worked on Front-end using Next.js</li>
              <li>Used server to fetch info about employees</li>
              <li>App can filter employees by location and job position</li>
              <li>
                Used getStaticPaths to pre-render pages that use dynamic routes
              </li>
              <li>Used getStaticProps to fetch data</li>
            </ul>
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
          <img src={optimo} alt="project" className="project-image"></img>
        </div>
      </div>
    </div>
  );
}
