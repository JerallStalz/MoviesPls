import { RiArrowLeftSLine } from "react-icons/ri"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { selectFocus, switchHandler } from "../../redux/action"
import "./Search.css"

const Search = () => {    
  const actualSearch = useSelector(state => state.actualSearch)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()
  const selectFocusFn = (data) => dispatch(selectFocus(data))
  const searchData = useSelector( state => state.searchData)

  const toRender = (data) => {
    if (data.length === 0 && !loading) {
      return (
        <h2>No se encontraron resultados para la busqueda, intente de nuevo</h2>
      )
    } else if(loading) {
      return (
      <div className="loading-container">
        <div className="loading"></div>
        <span>Cargando Resultados...</span>
      </div>)
    } else {
      return (
        <div  className='card-container'>
          {data.map( data => (
            <div className="card" key={data._id}>
              <div className="card-img__container">
                <img src={data.thumbnail} alt={data.name}/>
              </div>
              <div className="card-name__container">
                <Link to="/movie" onClick={() => selectFocusFn(data)}>{data.name}</Link>
              </div>
           </div>
          ))}
        </div>
      )
    }
  } 

  return(
  <div className="search">
    <Link to="/" className="search-back__button">
      <RiArrowLeftSLine/>
      <span>Volver al inicio</span>
    </Link>
    <h2 className="search-title">{actualSearch ?`Resultados: ${actualSearch}` : ""}</h2>
    { toRender(searchData) }
  </div>)
}

export default Search