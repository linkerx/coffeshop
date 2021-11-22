import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './styles.scss';

import LnkPanelLogo from './logo';
import { Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
import OrderBill from './order-bill';

class LnkPanelHeader extends React.Component {
  render() {

    var styleClass = '';
    if(this.props.header_opened != null) {
      styleClass = 'opened';
      if (!this.props.header_opened) {
        styleClass = 'closed';
      }
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
}

function mapStateToProps(state) {
  return {
    user: state.user,
    header_opened: state.header_opened
  }
}

export default withRouter(connect(mapStateToProps)(LnkPanelHeader))
