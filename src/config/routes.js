import Container from '../ClientView/Container'
import Home from "../ClientView/Pages/Home"
import Movie from "../ClientView/Pages/Movie"
import Search from "../ClientView/Pages/Search"


const routes = [
  {
    path: "/",
    exact: false,
    component: Container,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/search",
        exact: true,
        component: Search
      },
      {
        path: "/movie",
        exact: false,
        component: Movie
      }
    ]
  }
]


export default routes