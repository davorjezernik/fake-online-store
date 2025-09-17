import React from 'react';
import'./Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className='logo-container'>
        <img className='logo-nav' src="/img-app/logo.webp" alt="logo" />
      </div>
      <div className='text-container'>
        <div className='link-nav'>
          <a className='link-text' href='/'>HOME</a>
        </div>
        <div className='link-nav'>
          <a className='link-text' href='/shop'>SHOP</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
