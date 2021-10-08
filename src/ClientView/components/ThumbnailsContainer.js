import React, { useRef, useEffect, useState } from 'react'
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri"
import "./ThumbnailsContainer.css"
import { Link } from 'react-router-dom'
import { getThumbsData, selectFocus } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'

const ThumbnailsContainer = ({name, movies}) => {
  const dispatch = useDispatch()
  const thumbsData = useSelector(state => state.thumbsData)
  const homeType = useSelector( state => state.homeType)
  const selectFocusFn = (object) => dispatch(selectFocus(object))

  const [ sliderProperties, setSliderProperties ] = useState({
    actualScroll: 0,
    maxScroll: 0,
    moveDistance: 0,
    sliderWidth: 0,
    initialPosition: 0,
    sliderLeftPosition: "",
  })
  const [estado, setEstado] = useState(0)
  const { actualScroll, sliderWidth, moveDistance, maxScroll} = sliderProperties
  const sliderRef = useRef(null)
  let posX2 = 0
  const getThumbsDataFn = (type, limit) => dispatch(getThumbsData(type, limit))

  const handleProperties = scroll => {
    const stringScroll = `${scroll}px`
    setSliderProperties({
       ...sliderProperties,
      sliderLeftPosition: stringScroll ,
      actualScroll: scroll
    })
    sliderRef.current.style.left = stringScroll
  }
  useEffect(()=> {
    getThumbsDataFn(homeType ? "movie" : "serie", 40)
  },[homeType])

  const getStats = () => {
    setSliderProperties({
      ...sliderProperties,
      actualScroll: sliderRef.current.style.left.length === 0 ? 0 : parseInt(sliderRef.current.style.left.slice(0,-2)),
      maxScroll: sliderRef.current.scrollWidth,
      moveDistance: sliderRef.current.offsetWidth / 1.3 ,
      sliderWidth: sliderRef.current.offsetWidth,
      sliderLeftPosition: sliderRef.current.style.left,
      initialPosition: sliderRef.current.offsetLeft
    })
  }

  function switchSlide(arg) {
    sliderRef.current.style.transition = "200ms"
    if(arg === 'next') {
      if(actualScroll === -(maxScroll - sliderWidth)) {
      } else {
        const result = actualScroll - moveDistance
        handleProperties(result)
      }
    }
    if(arg === 'prev') {
      if( actualScroll >= 0 ) {
      } else {
        const result = actualScroll + moveDistance
        handleProperties(result)
      }
    }
  }

  const dragStart = (e) => {
    e.preventDefault()
    sliderRef.current.style.transition = '0ms'
    if(e.type === 'touchstart'){
      setEstado(e.touches[0].clientX) 
    }
  }

  const dragMove = (e) => {
    if( e.type === "touchmove" ) {
      posX2 = estado - e.touches[0].clientX;
      handleProperties(actualScroll - posX2)
      setEstado(e.touches[0].clientX)
    } 
  }
  
  const dragEnd = (e) => {
    sliderRef.current.style.transition = '200ms'
  }

  useEffect(()=> {
    if( sliderRef !== null ) { 
      getStats()
    }
    window.addEventListener('resize', getStats);
    return () => window.removeEventListener("resize", getStats);
  }, [sliderRef.current, thumbsData])
    
  useEffect(()=> {
    if(actualScroll < -(maxScroll - sliderWidth)) {
      handleProperties(-(maxScroll - sliderWidth))
      sliderRef.current.style.transition = '200ms'
    }
     if(actualScroll > 1) {
      sliderRef.current.style.transition = '200ms'
      handleProperties(0)
    }
  },[actualScroll, sliderWidth])

  return(
  <div className="thumbnails-container">
      <div className="thumbnails-name">
        <h4>{name}</h4>
      </div>
      <div className="thumbnails-billboard">
        <section 
        ref={sliderRef}
        onMouseDown={dragStart} 
        onTouchMove={dragMove} 
        onTouchStart={dragStart} 
        onTouchEnd={dragEnd}
        >
          {thumbsData.map(movie => (
                <Link to="/movie" key={movie._id} onClick={()=> selectFocusFn(movie)}>
                  <img src={movie.thumbnail} alt={`Pelicula: ${movie.name}`}/>
                </Link>
              ))}
        </section>
        <RiArrowRightSLine style={actualScroll === -(maxScroll - sliderWidth) ? {opacity: 0.3, fontSize:'38px'} : {}} onClick={() => switchSlide('next')} className="thumbnails-arrow thumbnails-arrow__right" />
        <RiArrowLeftSLine style={actualScroll >= 0 ? {opacity: 0.3, fontSize:'38px'} : {}} onClick={() => switchSlide('prev')} className="thumbnails-arrow thumbnails-arrow__left" />
      </div>
  </div>
  )
}

export default ThumbnailsContainer

