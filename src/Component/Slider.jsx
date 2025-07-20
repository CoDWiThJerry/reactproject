import React from 'react';
import img1 from './background2.jpg';
import img2 from './background5.jpg';
import img3 from './background1.jpg';

const Slider = () => {
  return (
    <div id="carouselExample" className="carousel slide position-relative" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active position-relative">
          <img src={img1} className="d-block w-100 carousel-image" alt="Slide 1" />
          <div className="carousel-caption text-start">
            <h2 className="fw-bold">Discover New Styles</h2>
            <p className="lead">Upgrade your wardrobe with the latest fashion collections.</p>
            <button className="btn btn-light shadow fw-semibold">Shop Now</button>
          </div>
        </div>

        <div className="carousel-item position-relative">
          <img src={img2} className="d-block w-100 carousel-image" alt="Slide 2" />
          <div className="carousel-caption text-start">
            <h2 className="fw-bold">Exclusive Offers</h2>
            <p className="lead">Don't miss out on trending fashion at unbeatable prices.</p>
            <button className="btn btn-light shadow fw-semibold">Explore</button>
          </div>
        </div>

        <div className="carousel-item position-relative">
          <img src={img3} className="d-block w-100 carousel-image" alt="Slide 3" />
          <div className="carousel-caption text-start">
            <h2 className="fw-bold">Trendy Collections</h2>
            <p className="lead">Find clothes that match your vibe and personality.</p>
            <button className="btn btn-light shadow fw-semibold">See Now</button>
          </div>
        </div>
      </div>

      {/* Bottom Center Arrows */}
      <div className="carousel-arrows d-flex justify-content-center gap-3 position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <button
          className="btn btn-light rounded-circle shadow"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="btn btn-light rounded-circle shadow"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
