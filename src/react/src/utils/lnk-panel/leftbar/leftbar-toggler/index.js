import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleLeftBar } from 'actions/panel/leftbar';
import './styles.scss';

class LnkPanelLeftBarToggler extends React.Component {
  render() {

    var iconClass = "fas fa-times";
    if(!this.props.leftbar_opened) {
      iconClass = "fas fa-bars";
    }

    return (
      <div className='leftbar-toggler'>
          { this.props.leftbar_enabled &&
            <i className={iconClass} onClick={() => this.props.toggleLeftBar()}></i>
          }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    leftbar_opened: state.leftbar_opened,
    leftbar_enabled: state.leftbar_enabled
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleLeftBar: toggleLeftBar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LnkPanelLeftBarToggler)
