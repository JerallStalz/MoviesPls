import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Trailer from "./Trailer";
import "./TrailerSlider.css"
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri"
import {  useEffect, useState } from "react";
import { getTrailersData } from "../../redux/action";


const TrailerSlider = () => {
  const ref = useRef(null)
  const trailerRef = useRef(null)
  const trailerData = useSelector( state => state.trailerData)
  const homeType = useSelector( state => state.homeType)
  const dispatch = useDispatch()
  const getTrailersDataFn = (type, limit) => dispatch(getTrailersData(type, limit))
  const [scroll, setScroll] = useState(0)

  useEffect(()=> {
    ref.current.scroll({left: scroll, top: 0 , behavior: "smooth"})
},[scroll, homeType])
  useEffect(()=> {
    getTrailersDataFn(homeType ? "movie": "serie", 4)
  }, [homeType])


  const moveSlider = (type) => {
    if( ref.current.scrollWidth ) {
    if( type === "next") {
      if( scroll >= ref.current.scrollWidth - ref.current.offsetWidth) {
        setScroll( ref.current.scrollWidth - ref.current.offsetWidth )
        } else {
          setScroll(scroll + ref.current.offsetWidth )
        }
    }
    if(type === "prev") {
      if( scroll <= 0 ) {
        setScroll(0)
      } else {
        setScroll(scroll - ref.current.offsetWidth)
      }
    }
  }}

  return (
    <div ref={trailerRef} className="trailer-slider__container">
          <button onClick={() => moveSlider("prev")} className="arrow arrow-left">
            <RiArrowLeftSLine />
          </button>
          <button onClick={() => moveSlider("next")}  className="arrow arrow-right" >
            <RiArrowRightSLine />
          </button>
      <div  className="trailer-slider" ref={ref}>
            {trailerData.map((data, index) => (
              <Trailer  key={index} data={data} />
            ))}
      </div>
    </div>
  )
}

export default TrailerSlider