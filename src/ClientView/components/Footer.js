import React from "react";
import {RiGithubFill, RiLinkedinFill, RiLinksFill} from 'react-icons/ri'
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-buttons">
        <a href="#">
          <RiGithubFill/>
        </a>
        <a href="#">
          <RiLinkedinFill />
        </a>
        <a href="#">
          <RiLinksFill />
        </a>
      </div>
      <div className="footer-legend">Conoce más de mi</div>
    </footer>
  );
}
