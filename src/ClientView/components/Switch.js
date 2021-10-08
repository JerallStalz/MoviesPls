import React from "react"
import "./Switch.css"
import { useSelector, useDispatch } from "react-redux"
import { switchHandler } from "../../redux/action"

const Switch = ({display}) => {
  const dispatch = useDispatch()
  const homeType = useSelector( state => state.homeType)
  const switchHandlerFn = (bool) => dispatch(switchHandler(bool))

  return (
    <div style={display} className={`switch-container ${homeType ? "movies" : "series"}`}>
      <button className="switch">
        <p onClick={ () => switchHandlerFn(true) }>Peliculas</p>
        <p onClick={ () => switchHandlerFn(false) }>Series</p>
      </button>
    </div>
  )
}

export default Switch