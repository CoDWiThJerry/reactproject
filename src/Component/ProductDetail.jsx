import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const { state: product } = useLocation();

  if (!product) return <p className="text-center mt-5">Product not found.</p>;

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-7">
          <h3>{product.title}</h3>
          <p className="text-muted">Category: T-Shirts</p>
          <h4 className="text-primary">₹{product.price}</h4>
          <p>{product.description || 'Comfortable cotton t-shirt with stylish look.'}</p>
          <button className="btn btn-success">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
