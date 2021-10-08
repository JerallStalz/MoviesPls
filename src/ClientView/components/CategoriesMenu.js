import React, { useState } from 'react';
import {RiArrowDownSLine} from "react-icons/ri"
import "./CategoriesMenu.css"

const CategoriesMenu = ({name, categories}) => {
  const [ fold, setFold ] = useState(false)

  return (
    <div className="categories-menu">
      <div 
        className="categories-menu__name"
        onClick={ e => setFold(!fold)}
      >
        <button>{name}</button>
      <RiArrowDownSLine style={fold ? {transform:"rotate(180deg)"} : {transform:"rotate(0)"} }/>
      </div>
      <div className={`categories-menu__categories ${ fold ? "categories-open" : ""}`}>
        {categories.map( (category, index ) => (
          <span key={index}>{category}</span>
        ))}
      </div>
    </div>
  )
}

export default CategoriesMenu