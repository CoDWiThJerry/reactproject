import React from 'react';
import { useLocation } from 'react-router-dom';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const colors = ['white', 'black', 'navy', 'gray'];

const Productshop = () => {
  const { state: product } = useLocation();

  const [selectedSize, setSize] = React.useState('M');
  const [selectedColor, setColor] = React.useState('white');

  if (!product) return <div className="text-center my-5">Product not found.</div>;

  return (
    <div className="container my-4">
      <div className="row g-4">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-6">
          <h3>{product.title}</h3>
          <p className="fw-bold">₹{product.price}</p>
          <p>{product.description}</p>

          <div className="mb-3">
            <label className="form-label">Size</label>
            <select
              className="form-select w-50"
              value={selectedSize}
              onChange={(e) => setSize(e.target.value)}
            >
              {sizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Color</label>
            <select
              className="form-select w-50"
              value={selectedColor}
              onChange={(e) => setColor(e.target.value)}
            >
              {colors.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <button className="btn btn-success mt-3">
            Add to Cart – {selectedSize}/{selectedColor}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productshop;
