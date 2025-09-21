import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './main-page/main-page';
import ShopPage from './shop-page/shop-page';
import LegalNotice from './shared/legal-notice/Leagl-Notice';
import PrivacyPolicy from './shared/privacy-policy/Privacy-Policy';
import RandomPicks from './shop-page/random-pick/random-pick';
import Clothing from './shop-page/clothing/clothing';
import Jewelery from './shop-page/jewelery/jewelery';
import Electronics from './shop-page/electronics/electronics';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<ShopPage />}> 
          <Route path="randompicks" element={<RandomPicks />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="jewelery" element={<Jewelery />} />
          <Route path="electronics" element={<Electronics />} />
        </Route>
        <Route path="/legalnotice" element={<LegalNotice />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
