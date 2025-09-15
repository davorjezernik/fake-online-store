import React from 'react';
import './App.css';
import Navbar from './shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';

function App() {
  return (
    <section className='flex-align-justify'>
      <div className='main-container'>
        <div className='container-one'>
          <Navbar/>
        </div>

        <div className='container-two'>
          <div className='container-two-img flex-align-justify'>
            <img className='homepage-img' src="/img-app/homepage-img.png" alt="homepage-img"/>
          </div>
          <div className='container-two-text flex-align-justify'>
            <h1 className='aot-h1'>FAKE</h1>
            <h2 className='aot-h2'>ONLINE</h2>
            <h1 className='aot-h1'>SHOP</h1>
          </div>
        </div>

        <div className='container-three'>
          <Footer/>
        </div>
      </div>
    </section>
  );
}

export default App;
