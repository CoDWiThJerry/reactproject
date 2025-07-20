import React, { useState } from 'react';
import ProductCard from './ProductCard';
import tshirt1 from './t shirt.jpg';
import tshirt2 from './t shirt2.jpg';
import tshirt3 from './t shirt3.jpg';
import tshirt4 from './t shirt4.jpg';
import tshirt5 from './t shirt5.jpg';
import tshirt6 from './t shirt6.jpg';
import tshirt7 from './t shirt7.jpg';
import tshirt8 from './t shirt8.jpg';

const dummyTshirts = [
  { id: 1, title: 'Classic White Tee', price: 19.99, image: tshirt1 },
  { id: 2, title: 'Black Cotton T-shirt', price: 24.99, image: tshirt2 },
  { id: 3, title: 'Graphic Tee', price: 29.99, image: tshirt3 },
  { id: 4, title: 'Blue Polo', price: 34.99, image: tshirt4 },
  { id: 5, title: 'Slim Fit T-shirt', price: 21.49, image: tshirt5 },
  { id: 6, title: 'Round Neck Tee', price: 18.0, image: tshirt6 },
  { id: 7, title: 'Plain Shirt', price: 25.0, image: tshirt7 },
  { id: 8, title: 'Oversized Tee', price: 22.99, image: tshirt8 },
];

const ProductList = () => {
  const [products] = useState(dummyTshirts); // only dummy data now

  return (
    <div className="container mt-4">
      <h3 className="text1 mb-3">
        <span className="color">T‑Shirt</span> Collection
      </h3>

      <div className="scroll-container">
        <div className="d-flex flex-row gap-3">
          {products.map((product) => (
            <div key={product.id} style={{ minWidth: '250px', flex: '0 0 auto' }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
