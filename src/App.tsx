import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './main-page/main-page';
import ShopPage from './shop-page/shop-page';
import LegalNotice from './shared/legal-notice/Leagl-Notice';
import PrivacyPolicy from './shared/privacy-policy/Privacy-Policy';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
