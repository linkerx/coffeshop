import React from 'react';
import { Switch } from "react-router-dom";
import PanelRoute from 'utils/lnk-panel/route';

import Home from 'views/home';
import Menu from 'views/menu';
import Bill from 'views/bill';
import NotFound from 'views/not-found';
class MainRouter extends React.Component {
  render() {
    return (
      <Switch>
        <PanelRoute exact path="/" component={Home} private={false}/>
        <PanelRoute exact path="/menu" component={Menu} private={false} configuration={{ headerOpened: true }} />
        <PanelRoute exact path="/bill" component={Bill} private={false} configuration={{ headerOpened: true }} />
        <PanelRoute component={NotFound} private={false} />
      </Switch>
    )
  }
}

export default MainRouter;
