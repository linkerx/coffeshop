import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleRightBar } from 'actions/rightbar';
import './styles.scss';

class LnkPanelRightBarToggler extends React.Component {
  render() {

    var iconClass = "fas fa-times";
    if(!this.props.rightbar_opened) {
      iconClass = "fas fa-bars";
    }

    return (
      <div className='rightbar-toggler'>
        { this.props.rightbar_enabled &&
          <i className={iconClass} onClick={() => this.props.toggleRightBar()}></i>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    rightbar_opened: state.rightbar_opened,
    rightbar_enabled: state.rightbar_enabled
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleRightBar: toggleRightBar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LnkPanelRightBarToggler)
