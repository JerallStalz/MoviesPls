import React, { useState, useRef, useEffect } from "react"
import Iframe from "react-iframe"
import { Link } from "react-router-dom"
import "./Trailer.css"
import { useDispatch } from "react-redux"
import { selectFocus } from "../../redux/action"

const Trailer = ({data}) => {
  const [fold, setFold] = useState(false)
  const ref = useRef(null)
  const [ scrollable, setScrollable ] = useState(false)
  const [ stats, setStats ] = useState ({
    statsHeight: 0,
    maxScroll: 0
  })

  const dispatch = useDispatch()
  const selectFocusFn = (data) => dispatch(selectFocus(data))

  const { maxScroll, statsHeight } = stats

  const getStats = () => {
    setStats({
      ...stats,
      statsHeight: ref.current.offsetHeight,
      maxScroll: ref.current.scrollHeight,
    })
  }
  useEffect(()=> {
    if( ref.current !== null ) {
      getStats()
    }
  },[ref.current])

    useEffect(()=> {
      if( ref !== null ) { 
        window.addEventListener("resize", getStats)
        return () => window.removeEventListener("resize", getStats)
      }
    }, [])

  useEffect(() => {
      if(maxScroll > statsHeight) {
        setScrollable(false)
      } else {
        setScrollable(true)
      }
  }, [maxScroll, statsHeight])

  return (
    <div className="trailer">
    <div style={{paddingBottom: '56.25%'}} className="trailer-iframe">
      <Iframe src={data.trailers[0]} allowFullScreen ></Iframe>
    </div>
    <div className={`trailer-text ${fold ? "fold" : "" }`}>
      <Link to="/movie" onClick={()=> selectFocusFn(data)}>{data.name}</Link>
        <p ref={ref} >{data.synopsis}</p>
      <button style={scrollable ? {display: "none"} : {}} onClick={ () => setFold(!fold)}>{ fold ? "Ver Menos" : "Ver Más..." }</button>
    </div>
  </div>
  )
}

export default Trailer