import React from 'react';
import banner3 from './background2.jpg';
import aboutImg from './background2.jpg'; // Make sure image path is correct
import tshirt1 from './t shirt4.jpg';
import tshirt2 from './t shirt.jpg';
import tshirt3 from './t shirt2.jpg';
import tshirt4 from './t shirt3.jpg';

const tshirts = [
  {
    id: 1,
    title: 'Classic White Tee',
    price: '$19.99',
    image: tshirt1,
  },
  {
    id: 2,
    title: 'Black Cotton T-shirt',
    price: '$24.99',
    image: tshirt2,
  },
  {
    id: 3,
    title: 'Graphic Print Tee',
    price: '$29.99',
    image: tshirt3,
  },
  {
    id: 4,
    title: 'Blue Polo Shirt',
    price: '$34.99',
    image: tshirt4,
  },
];
const About = () => {
  return (
    <div>

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
        <h1 className="fw-bold display-5">#About</h1>
        <p className="fs-5">Read about our content.</p>
      </div>

      {/* About Section */}
      <div className="container my-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img
              src={aboutImg}
              alt="About Us"
              className="img-fluid rounded shadow-sm w-100"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-light rounded shadow-sm h-100 d-flex flex-column justify-content-center">
              <h3 className="mb-3">Who We Are</h3>
              <p>
                We are a passionate team committed to delivering high-quality products and meaningful experiences.
                Our goal is to create designs that are both visually appealing and user-friendly across all devices.
                Your one-stop destination for all your shopping needs—quality products, affordable prices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* T-shirt Cards */}
      <div className="container my-5">
        <h2 className="text1 text-center mb-4 "><span className='color'>Our popular</span> product </h2>
        <div className="row g-4">
          {tshirts.map((tshirt) => (
            <div key={tshirt.id} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="overflow-hidden">
                  <img
                    src={tshirt.image}
                    className="card-img-top tshirt-hover"
                    alt={tshirt.title}
                    style={{ transition: 'transform 0.4s ease' }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{tshirt.title}</h5>
                  <p className="card-text text-muted">{tshirt.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover CSS */}
      <style>
        {`
          .tshirt-hover:hover {
            transform: scale(1.08);
          }
        `}
      </style>

    </div>
  );
};

export default About;
