import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Shop.css';
import banner3 from './background2.jpg'
import tshirt1 from './t shirt4.jpg';
import tshirt2 from './t shirt.jpg';
import tshirt3 from './t shirt2.jpg';
import tshirt4 from './t shirt3.jpg';
import tshirt5 from './t shirt4.jpg';
import tshirt6 from './t shirt5.jpg';
import tshirt7 from './t shirt6.jpg';
import tshirt8 from './t shirt7.jpg';

const dummyTshirts = [
  { id: 1, title: 'Classic White Tee', price: 19.99, image: tshirt1, description: "Soft cotton T-shirt perfect for everyday wear." },
  { id: 2, title: 'Black Cotton T-shirt', price: 24.99, image: tshirt2, description: "Premium black T-shirt with stretch fabric." },
  { id: 3, title: 'Graphic Print Tee', price: 29.99, image: tshirt3, description: "Trendy tee with stylish print." },
  { id: 4, title: 'Blue Polo Shirt', price: 34.99, image: tshirt4, description: "Comfortable polo for casual outings." },
  { id: 5, title: 'Slim Fit T-shirt', price: 21.49, image: tshirt5, description: "Tailored slim fit for modern look." },
  { id: 6, title: 'Round Neck T-shirt', price: 18.0, image: tshirt6, description: "Everyday basic round neck T-shirt." },
  { id: 7, title: 'Plain Cotton Shirt', price: 25.0, image: tshirt7, description: "Classic plain shirt for any occasion." },
  { id: 8, title: 'Oversized Tee', price: 22.99, image: tshirt8, description: "Relaxed fit oversized tee." },
];

const Shop = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  const handleSeeMore = () => {
    setVisibleCount(dummyTshirts.length);
  };

  return (
    <>
           {/* Hero Banner */}
          <div
            className="d-flex justify-content-center align-items-center text-center"
            style={{
              height: '400px',
              backgroundImage: `url(${banner3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              flexDirection: 'column',
            }}
          >
            <h1 className="fw-bold display-5">#Shop</h1>
            <p className="fs-5">Try our shop page and enjoy your day!</p>
          </div>  
    <div className="container my-4">
   
      <h2 className="text1 mb-4 text-center "><span className='color'>T‑Shirts </span>Collection</h2>
      <div className="row g-3">
        {dummyTshirts.slice(0, visibleCount).map((p) => (
          <div key={p.id} className="col-6 col-md-4 col-lg-3">
            <div
              className="card h-100"
              onClick={() => navigate(`/shop/${p.id}`, { state: p })}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={p.image}
                className="card-img-top p-3"
                alt={p.title}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{p.title}</h6>
                <p className="card-text fw-bold mt-auto">₹{p.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < dummyTshirts.length && (
        <div className="text-center mt-4">
          <button className="btn btn-outline-success" onClick={handleSeeMore}>
            See More
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default Shop;
