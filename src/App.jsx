import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ✅ Components
import Navbar from './Component/Navbar';
import Slider from './Component/Slider';
import Cards from './Component/Cards';
import ProductList from './Component/ProductList';
import ProductDetail from './Component/ProductDetail';
import SignupSection from './Component/Signupsection';
import Banner from './Component/Banner';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import About from './Component/About';
import Shop from './Component/Shop'; // Main shop page
import ShopListing from './Component/Productshop'; // Detail page or listing
import Productshop from './Component/Productshop';

// ✅ Homepage Layout
const MainLayout = () => (
  <>
    <Slider />
    <ProductList />
    <Banner />
    <ProductList />
    <Cards />
    <SignupSection />
  </>
);

// ✅ Final App Setup
const App = () => {
  return (
    <Router>
      <div id="app-wrapper" className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ShopListing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
