import React, { useContext } from 'react';
import { PanelConfigContext } from 'utils/lnk-panel/panelconfig';
import LnkPanelLeftBarToggler from './leftbar-toggler';
import './styles.scss';

const LnkPanelLeftBar  = (props) => {

  const headerOpened = useContext(PanelConfigContext).headerOpened[0];
  const leftbarOpened = useContext(PanelConfigContext).leftbarOpened[0];

  var leftbarClass = 'closed';
  if(leftbarOpened){
    leftbarClass = 'opened';
  }

  var headerClass = 'header_closed';
  if(headerOpened){
    headerClass = 'header_opened';
  }

  var itemClass= leftbarClass+' '+headerClass;

  return (
    <nav id='leftbar' className={itemClass}>
      <LnkPanelLeftBarToggler />
      {props.children}
    </nav>
  )
}

export default LnkPanelLeftBar;
