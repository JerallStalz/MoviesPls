import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from "./components/Header"
import "./Container.css"

const Container = (props) => {
  return(
    <div>
      <Header/>
      <div className="container">
        <LoadRouters routes={props.routes}/>
      </div>
    </div>
  ) 
}

function LoadRouters({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default Container;