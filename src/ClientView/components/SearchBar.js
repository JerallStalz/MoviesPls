import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri"
import { useHistory } from "react-router";
import "./SearchBar.css"
import { search, menuHandler } from "../../redux/action";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [name, setName] = useState("")
  const history = useHistory()
  const dispatch = useDispatch()
  const searchFn = (actualSearch) => dispatch(search(actualSearch))
  const menuHandlerFn = (bool) => dispatch(menuHandler(bool))

  const sendSubmit = (e) => {
    e.preventDefault()
    if(name.length > 1) {
      searchFn(name.toLocaleLowerCase())
      history.push("/search")
      menuHandlerFn(false)
    }
  }
  return (
    <form className="search-bar" onSubmit={sendSubmit}>
      <input 
      type="text" 
      placeholder="Buscar Pelicula" 
      value={name}
      onChange={e => setName(e.target.value)}
      />
      <button type="submit" >
        <RiSearch2Line />
      </button>
    </form>
  )
}

export default SearchBar