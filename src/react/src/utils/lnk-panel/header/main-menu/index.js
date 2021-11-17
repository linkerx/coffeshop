import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavItem from './item';
import './styles.scss';

class LnkPanelMainMenu extends React.Component {
  render(){
    return(
      <nav id='main-menu'>
        { this.props.menu &&
          <div className='items'>
            <ul>{this.props.menu.map(item => (<NavItem key={item.id} item={item} />))}</ul>
          </div>
        }
      </nav>
    )
  }
}


function mapStateToProps(state) {
  return {
    menu: state.menu,
  }
}

export default withRouter(connect(mapStateToProps)(LnkPanelMainMenu));
