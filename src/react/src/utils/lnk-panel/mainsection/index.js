import React, { useContext } from 'react';
import { PanelConfigContext } from 'utils/lnk-panel/panelconfig';
import './styles.scss';

const LnkPanelMainSection = (props) => {

  const headerOpened = useContext(PanelConfigContext).headerOpened[0];
  const leftbarOpened = useContext(PanelConfigContext).leftbarOpened[0];
  const rightbarOpened = useContext(PanelConfigContext).rightbarOpened[0];
  
  let leftbarClass = 'leftbar_closed';
  if(leftbarOpened) {
    leftbarClass = 'leftbar_opened';
  }

  let rightbarClass = 'rightbar_closed';
  if(rightbarOpened) {
    rightbarClass = 'rightbar_opened';
  }

  let headerClass = 'header_opened';
  if (!headerOpened) {
    headerClass = 'header_closed';
  }

  let mainClass = leftbarClass+' '+rightbarClass+' '+headerClass;
  return (
    <section id="main" className={mainClass}>
      <div className='wrapper'>
        {props.children}
      </div>
    </section>
  )
}

export default LnkPanelMainSection;
