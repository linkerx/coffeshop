import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

class LnkPanelLoginButton extends React.Component {
  render() {
    return (
      <div className='login-button'>
        <NavLink to='/login' className='btn-normal'>Ingresar</NavLink>
      </div>
    )
  }
}

export default LnkPanelLoginButton;
