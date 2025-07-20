import React from 'react';
import bannerImg from './background2.jpg'; // ✅ Correct path if in same folder

const Banner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-center mt-5"
      style={{
        height: '200px',
        width: '100%',
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        flexDirection: 'column',
        padding: '1rem'
      }}
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Welcome to Our Site</h1>
      <h5 style={{ marginBottom: '1rem' }}>Stay updated with the latest news</h5>
      <button className="btn btn-light">Get Started</button>
    </div>
  );
};

export default Banner;
