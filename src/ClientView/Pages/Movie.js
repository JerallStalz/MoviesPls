import "./Movie.css"
import { useSelector } from "react-redux"
import Iframe from "react-iframe"
import { useHistory } from "react-router"
import {RiArrowLeftSLine} from "react-icons/ri"
import { useEffect } from "react"
import { Helmet } from "react-helmet"

const Movie = () => {
  const actualSelected = useSelector(state => state.actualSelected)
  const history = useHistory()

  useEffect(()=> {
    window.scroll(0, 0)
  }, [])

  function render() {
    if(actualSelected === null) {
      history.push("/")
      return (
        <div>Going Back</div>
      )
    } else {
      return(
        <div className="movie">
          <Helmet>
            <title> {actualSelected.name} - MoviesPls</title>
          </Helmet>
          <button className="go-back__arrow" onClick={history.goBack}>
            <RiArrowLeftSLine/>
            <span>Volver</span>
          </button>
          <div className="movie-data">
            <section style={{backgroundImage: `url(${actualSelected.cover})`}}>
              <div className="movie-data__img-container"> <img alt={actualSelected.name} src={actualSelected.thumbnail}/> </div>
              <div className="movie-data__h3-container"> <h3>{actualSelected.name}</h3> </div>
            </section>
            <article>
              {actualSelected.synopsis}
            </article>
          </div>
          <div className="movie-trailer">
            <h4>Trailers</h4>
            <Iframe src={actualSelected.trailers[0]} />
          </div>
        </div>)
    }
  }
  return render()

}

export default Movie