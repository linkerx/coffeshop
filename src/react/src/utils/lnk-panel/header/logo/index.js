import React from 'react';
import './styles.scss';

class LnkPanelLogo extends React.Component {
  render() {
    return (
      <div className='logo'>
        <img src='/images/logo_invert.png' alt='Agnos Challenge Cofeeshop' />
        <div className='title'>Agnos Challenge Coffeeshop</div>
      </div>
    )
  }
}

export default LnkPanelLogo;
