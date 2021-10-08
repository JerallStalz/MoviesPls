import "./Home.css"
import TrailerSlider from "../components/TrailerSlider"
import ThumbnailsContainer from "../components/ThumbnailsContainer"

const Home = () => {
  return(
  <div className="home">
    <TrailerSlider />
    <ThumbnailsContainer name={"Acción"}/>
    <ThumbnailsContainer name={"Ciencia ficcion"}/>
    <ThumbnailsContainer name={"Comedia"}/>
  </div>)
}

export default Home