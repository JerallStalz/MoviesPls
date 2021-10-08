import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";
import store from "./redux/store"

function App() {
  return (
  <Router>
    <Provider store={store} >
    <Switch>
    {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
    </Switch>
    </Provider>
  </Router>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;
