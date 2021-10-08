import "./MenuSider.css"
import SearchBar from "./SearchBar"
import CategoriesMenu from "./CategoriesMenu"
import { useSelector, useDispatch } from "react-redux"
import { menuHandler } from "../../redux/action"
import Switch from "./Switch"

const MenuSider = () => {
  const CategoriesMovies = ["acción", "comedia", "documental", "drama", "ciencia ficción, acción", "comedia", "documental", "drama", "ciencia ficción, acción", "comedia", "documental", "drama", "ciencia ficción"]
  const CategoriesSeries = ["acción", "comedia", "documental", "drama", "ciencia ficción, acción", "comedia", "documental", "drama", "ciencia ficción, acción", "comedia", "documental", "drama", "ciencia ficción"]
  const menuSider = useSelector( state => state.menuSider)
  const dispatch = useDispatch()
  const menuHandlerFn = () => dispatch(menuHandler())

  return (
  <div 
    className={`menu-sider__container ${menuSider ? "open" : ""}`}>
    <nav className="menu-sider">
      <div className="menu-sider__search-bar__container">
        <SearchBar/>
      </div>
      <div className="menu-sider__switch-container" onClick={menuHandlerFn} >
        <Switch />
      </div>
      <CategoriesMenu name={"Peliculas"} categories={CategoriesMovies} />
      <CategoriesMenu name={"Series"} categories={CategoriesSeries} />
    </nav>
  </div>)
}

export default MenuSider