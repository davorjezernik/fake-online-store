import React from 'react';
import './shop-page.css';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import { Outlet, Link } from 'react-router-dom';

function ShopPage() {

  //Getting the products from the API
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));
  
  return (
    <section className='flex-align-justify'>
      <div className='main-container'>
        <div className='container-one'>
          <Navbar/>
        </div>
        <div className='layout-shop'>
          <div className='shop-links'>
            <Link className='shop-links-style' to='/shop/randompicks'>Random Picks</Link> 
            <Link className='shop-links-style' to='/shop/clothing'>Clothing</Link>
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
