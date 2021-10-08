import React, { useEffect } from "react";
import SearchBar from "./SearchBar"
import "./Header.css"
import { RiMenuFill } from "react-icons/ri"
import logo from "../../images/logo.png"
import { menuHandler, sexo } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import Switch from "./Switch";

const Header = () => {
  const dispatch = useDispatch()
  const menuHandlerFn = () => dispatch(menuHandler());
  const menuSider = useSelector( state => state.menuSider)

  return (
    <header className={`header ${menuSider ? "active" : ""}`}> 
      <button onClick={menuHandlerFn} className="header-menu" >
        <RiMenuFill />
      </button>
      <Link to="/" className="header-logo">
        <img src={logo} alt="Logo MoviesPls"/>
      </Link>
      <Switch display={window.location.pathname !== "/" ? {display: "none"} : {}}/>
      <SearchBar />
    </header>
  )
}

export default Header