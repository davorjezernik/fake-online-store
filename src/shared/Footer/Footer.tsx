import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className='link-footer'>
        <a className='link-text' href='/legalnotice'>Legal Notice</a>
      </div>
      <div className='link-footer'>
        <a className='link-text' href='/privacypolicy'>Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
