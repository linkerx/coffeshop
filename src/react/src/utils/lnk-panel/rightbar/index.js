import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './styles.scss';

class LnkPanelRightBar extends React.Component {
  render() {

    var leftbarClass = '';
    if(this.props.rightbar_opened != null){
      leftbarClass = 'opened';
      if(!this.props.rightbar_opened) {
        leftbarClass = 'closed';
      }
    }

    var headerClass = '';
    if(this.props.header_opened != null){
      headerClass = 'header_opened';
      if(!this.props.header_opened) {
        headerClass = 'header_closed';
      }
    }

    var itemClass= leftbarClass+' '+headerClass;

    return (
      <nav id='rightbar' className={itemClass}>
        {this.props.children}
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    rightbar_items: state.rightbar_items,
    rightbar_opened: state.rightbar_opened,
    header_opened: state.header_opened
  }
}

export default withRouter(connect(mapStateToProps)(LnkPanelRightBar))
