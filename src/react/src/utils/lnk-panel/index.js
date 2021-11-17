import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LnkPanelHeader from './header';
import LnkPanelMainSection from './mainsection';
import LnkPanelLeftBar from './leftbar';
import LnkPanelRightBar from './rightbar';
import MainRouter from 'routers/main';
import LeftRouter from 'routers/left';
import RightRouter from 'routers/right';

import './styles.scss';

class LnkPanel extends React.Component {
  render() {
    return (
      <section id='panel'>
        <LnkPanelHeader />
        <div className='wrapper'>
          <LnkPanelLeftBar><LeftRouter /></LnkPanelLeftBar>
          <LnkPanelMainSection><MainRouter /></LnkPanelMainSection>
          <LnkPanelRightBar><RightRouter /></LnkPanelRightBar>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    header_opened: state.header_opened,
    leftbar_opened: state.leftbar_opened,
    rightbar_opened: state.rightbar_opened
  }
}

export default withRouter(connect(mapStateToProps)(LnkPanel))
