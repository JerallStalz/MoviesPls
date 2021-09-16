import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Container = (props) => {
  return(
    <div>
      <LoadRouters routes={props.routes}/>
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