import React from "react"
import Iframe from "react-iframe"

const Trailer = ({source, name, description}) => {
  return (
    <div className="trailer">
    <Iframe className="trailer-iframe" src={source} ></Iframe>
    <div className="trailer-text opened">
      <span>{name}</span>
        <p>{description}</p>
      <button>Ver Más...</button>
    </div>
  </div>
  )
}

export default Trailer