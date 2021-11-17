import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './styles.scss';

class LnkPanelMainSection extends React.Component {
  render() {
    var leftbarClass = '';
    if(this.props.leftbar_opened != null) {
      leftbarClass = 'leftbar_closed';
      if(this.props.leftbar_opened) {
        leftbarClass = 'leftbar_opened';
      }
    }

    var rightbarClass = '';
    if(this.props.rightbar_opened != null) {
      rightbarClass = 'rightbar_closed';
      if(this.props.rightbar_opened) {
        rightbarClass = 'rightbar_opened';
      }
    }

    var headerClass = '';
    if(this.props.header_opened != null) {
      headerClass = 'header_opened';
      if (!this.props.header_opened) {
        headerClass = 'header_closed';
      }
    }

    var mainClass = leftbarClass+' '+rightbarClass+' '+headerClass;
    return (
      <section id="main" className={mainClass}>
        <div className='wrapper'>
          {this.props.children}
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    header_opened: state.header_opened,
    leftbar_opened: state.leftbar_opened,
    rightbar_opened: state.rightbar_opened
  }
}

export default withRouter(connect(mapStateToProps)(LnkPanelMainSection))
