import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from "./components/Header"
import MenuSider from './components/MenuSider';
import "./Container.css"
import "./media.css"
import Footer from './components/Footer';

const Container = (props) => {
  return(
    <div>
      <MenuSider />
      <Header/>
      <div className="container">
        <LoadRouters routes={props.routes}/>
      </div>
      <Footer />
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