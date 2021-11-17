import React from 'react';
import { Route, Switch} from "react-router-dom";
import PrivateRoute from 'routers/private';

import Home from 'views/home';
import Menu from 'views/menu';
import NotFound from 'views/not-found';
class MainRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default MainRouter;
