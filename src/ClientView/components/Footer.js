import React from "react";
import {RiGithubFill, RiLinkedinFill, RiLinksFill} from 'react-icons/ri'
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-buttons">
        <a href="https://github.com/JerallStalz" rel="noreferrer">
          <RiGithubFill/>
        </a>
        <a href="https://juanperezdev.netlify.app" target='_blank' rel="noreferrer">
          <RiLinksFill />
        </a>
        <a href="https://www.linkedin.com/in/juan-simon-perez-castillo/" target='_blank' rel="noreferrer">
          <RiLinkedinFill />
        </a>
      </div>
      <div className="footer-legend">Conoce más de mi</div>
    </footer>
  );
}
