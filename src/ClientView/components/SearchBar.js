import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri"
import "./SearchBar.css"

const SearchBar = () => {
  const [name, setName] = useState("")

  return (
    <form className="search-bar">
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