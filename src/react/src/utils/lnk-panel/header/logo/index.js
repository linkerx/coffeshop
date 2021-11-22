import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class LnkPanelLogo extends React.Component {
  render() {
    return (
      <div className='logo'>
        <Link to='/'>
          <img src='/images/logo_invert.png' alt='Agnos Challenge Cofeeshop' />
          <div className='title'>Agnos Challenge Coffeeshop</div>
        </Link>
      </div>
    )
  }
}

export default LnkPanelLogo;
