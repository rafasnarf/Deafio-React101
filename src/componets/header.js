import React, { Component } from 'react';

import facebook from '../assets/facebook-1.svg';

import './header.css';

class Header extends Component {
  render() {
    return (
      <div className='navbar'>
        <img src={facebook} alt='Facebook' />
        <p>Meu perfil</p>

      </div>
    )
  }
}

export default Header;