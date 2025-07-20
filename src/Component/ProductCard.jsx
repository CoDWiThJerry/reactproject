import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`, { state: product }); // pass full object
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column" style={{ overflowY: "auto", maxHeight: "250px" }}>
        <h6 className="card-title">{product.title.substring(0, 40)}...</h6>
        <p className="card-text text-dark fw-bold">₹{product.price}</p>
        <button className="btn btn-outline-success mt-auto" onClick={handleClick}>
          See Detail
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
