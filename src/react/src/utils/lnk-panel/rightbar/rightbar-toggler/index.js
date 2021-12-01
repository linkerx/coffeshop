import React, { useContext } from 'react';
import { PanelConfigContext } from 'utils/lnk-panel/panelconfig';
import './styles.scss';

const LnkPanelRightBarToggler = () => {

  const rightbarOpened = useContext(PanelConfigContext).rightbarOpened;
  const rightbarEnabled = useContext(PanelConfigContext).rightbarEnabled;

    var iconClass = "fas fa-times";
    if(!rightbarOpened[0]) {
      iconClass = "fas fa-bars";
    }

    return (
      <div className='rightbar-toggler'>
          { rightbarEnabled[0] &&
            <i className={iconClass} onClick={() => rightbarOpened[1](!rightbarOpened[0])}></i>
          }
      </div>
    )
}

export default LnkPanelRightBarToggler
