import React from "react";
import "./Footer.css";
import linkedin from "../photos/linkedin.png";
import github from "../photos/github.png";
import facebook from "../photos/facebook.png";

export default function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <div>
          <div className="footer-logos-container">
            <a
              href="https://github.com/GegaLataria"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" className="footer-image"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/gega-lataria-ba28a4220/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="footer-image"></img>
            </a>
            <a
              href="https://www.facebook.com/gega.lataria"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" className="footer-image"></img>
            </a>
          </div>
          <p className="footer-text">Developed by Gega Lataria</p>
        </div>
      </footer>
    </div>
  );
}
