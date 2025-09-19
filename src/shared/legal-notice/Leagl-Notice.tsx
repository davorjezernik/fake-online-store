import React from 'react';
import '../../shop-page/shop-page.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function LegalNotice() {
  return (
    <section className='flex-align-justify'>
      <div className='main-container'>
        <div className='container-one'>
          <Navbar/>
        </div>

        <div className='container-two flex-align-justify'>
          <h1>Legal Notice</h1>
        </div>

        <div className='container-three'>
          <Footer/>
        </div>
      </div>
    </section>
  );
}

export default LegalNotice;
