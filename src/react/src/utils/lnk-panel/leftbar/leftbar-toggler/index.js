import React, { useContext } from 'react';
import { PanelConfigContext } from 'utils/lnk-panel/panelconfig';
import './styles.scss';

const LnkPanelLeftBarToggler = () => {

  const leftbarOpened = useContext(PanelConfigContext).leftbarOpened;
  const leftbarEnabled = useContext(PanelConfigContext).leftbarEnabled;

    var iconClass = "fas fa-times";
    if(!leftbarOpened[0]) {
      iconClass = "fas fa-bars";
    }

    return (
      <div className='leftbar-toggler'>
          { leftbarEnabled[0] &&
            <i className={iconClass} onClick={() => leftbarOpened[1](!leftbarOpened[0])}></i>
          }
      </div>
    )
}

export default LnkPanelLeftBarToggler
