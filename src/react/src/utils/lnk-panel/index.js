import React, { useState } from 'react';

import LnkPanelHeader from './header';
import LnkPanelMainSection from './mainsection';
import LnkPanelLeftBar from './leftbar';
import LnkPanelRightBar from './rightbar';
import MainRouter from 'routers/main';
import LeftRouter from 'routers/left';
import RightRouter from 'routers/right';

import { PanelConfigContext } from './panelconfig';

import './styles.scss';

const LnkPanel = () => {
  
  const panelConfig = {
    headerOpened: useState(false),
    leftbarOpened: useState(false),
    leftbarEnabled: useState(false),
    rightbarOpened: useState(false),
    rightbarEnabled: useState(false),
  }

    return (
      <PanelConfigContext.Provider value={panelConfig}>
      <section id='panel'>
        <LnkPanelHeader />
        <div className='wrapper'>
          <LnkPanelLeftBar><LeftRouter /></LnkPanelLeftBar>
          <LnkPanelMainSection><MainRouter /></LnkPanelMainSection>
          <LnkPanelRightBar><RightRouter /></LnkPanelRightBar>
        </div>
      </section>
      </PanelConfigContext.Provider>
    );
}

export default LnkPanel
