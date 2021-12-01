import React, { useContext } from 'react';

import LnkPanelLogo from './logo';
import { Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
import OrderBill from './order-bill';
import { PanelConfigContext } from '../panelconfig';

import './styles.scss';

const LnkPanelHeader  = () => {

  const headerOpened = useContext(PanelConfigContext).headerOpened[0];

  var styleClass = 'closed';
  if(headerOpened) {
    styleClass = 'opened';
  }

  return (
    <header className={styleClass}>
        <div className='wrapper'>
          <LnkPanelLogo />
          <Switch>
            <Route exact path="/menu" component={OrderBill} />
            <Route exact path="/bill" render={() => <div className='return'><Link to='/menu'>Return to Menu</Link></div>} />
          </Switch>
        </div>
    </header>
  )
}

export default LnkPanelHeader
