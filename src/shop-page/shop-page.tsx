import React from 'react';
import './shop-page.css';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import { Outlet, Link } from 'react-router-dom';

function ShopPage() {

  async function fetchAPI() {
    const URL = 'https://fakestoreapi.com/products';
    const itemsData = await fetch(URL);
    const data = await itemsData.json();
    return data;
  } 
  
  return (
    <section className='flex-align-justify'>
      <div className='main-container'>
        <div className='container-one'>
          <Navbar/>
        </div>
        <div className='layout-shop'>
          <div className='shop-links'>
            <Link className='shop-links-style' to='/shop/clothing' onClick={fetchAPI}>Clothing</Link>
            <Link className='shop-links-style' to='/shop/jewelery'>Jewelery</Link>
            <Link className='shop-links-style' to='/shop/electronics'>Electronics</Link>
          </div>
          <div className='shop-layout-products'>
            <Outlet /> 
          </div>
        </div>
        <div className='container-three'>
          <Footer/>
        </div>
      </div>
    </section>
  );
}

export default ShopPage;
