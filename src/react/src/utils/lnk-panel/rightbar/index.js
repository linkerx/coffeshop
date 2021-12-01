import React, { useContext } from 'react';
import { PanelConfigContext } from 'utils/lnk-panel/panelconfig';
import LnkPanelRightBarToggler from './rightbar-toggler';
import './styles.scss';

const LnkPanelRightBar = (props) => {

  const headerOpened = useContext(PanelConfigContext).headerOpened[0];
  const rightbarOpened = useContext(PanelConfigContext).rightbarOpened[0];

  var rightbarClass = 'closed';
  if(rightbarOpened){
    rightbarClass = 'opened';
  }

  var headerClass = 'header_closed';
  if(headerOpened){
    headerClass = 'header_opened';
  }

  var itemClass= rightbarClass+' '+headerClass;

  return (
    <nav id='rightbar' className={itemClass}>
      <LnkPanelRightBarToggler />
      {props.children}
    </nav>
  )
}

export default LnkPanelRightBar;
