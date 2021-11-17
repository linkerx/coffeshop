import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import LnkPanelLeftBarToggler from './leftbar-toggler';
import './styles.scss';

class LnkPanelLeftBar extends React.Component {
  render() {

    var rightbarClass = '';
    if(this.props.leftbar_opened != null){
      rightbarClass = 'opened';
      if(!this.props.leftbar_opened) {
        rightbarClass = 'closed';
      }
    }

    var headerClass = '';
    if(this.props.header_opened != null){
      headerClass = 'header_opened';
      if(!this.props.header_opened) {
        headerClass = 'header_closed';
      }
    }

    var itemClass= rightbarClass+' '+headerClass;

    return (
      <nav id='leftbar' className={itemClass}>
        <LnkPanelLeftBarToggler />
        {this.props.children}
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    leftbar_opened: state.leftbar_opened,
    header_opened: state.header_opened
  }
}

export default withRouter(connect(mapStateToProps)(LnkPanelLeftBar))
