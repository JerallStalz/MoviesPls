import "./Home.css"
import TrailerSlider from "../components/TrailerSlider"
import ThumbnailsContainer from "../components/ThumbnailsContainer"
import { Helmet } from 'react-helmet'

const Home = () => {
  return(
  <div className="home">
    <Helmet>
      <title>Inicio - MoviesPls</title>
    </Helmet>
    <TrailerSlider />
    <ThumbnailsContainer name={"Acción"}/>
    <ThumbnailsContainer name={"Ciencia ficcion"}/>
    <ThumbnailsContainer name={"Comedia"}/>
  </div>)
}

export default Home