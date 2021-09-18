import React from "react";
import SearchBar from "./SearchBar"
import "./Header.css"
import { RiMenuFill } from "react-icons/ri"
import logo from "../../images/logo.png"

const Header = () => {
  return (
    <header className="header"> 
      <button className="header-menu">
        <RiMenuFill />
      </button>
      <div className="header-logo">
        <img src={logo} alt="Logo MoviesPls"/>
      </div>
      <SearchBar />
    </header>
  )
}

export default Header