import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import banner3 from './background2.jpg';
import person1 from './banner1.jpg'; // First profile image
import person2 from './banner2.jpg'; // Second profile image

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.name = formData.name ? '' : 'Name is required';
    temp.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Valid email is required';
    temp.subject = formData.subject ? '' : 'Subject is required';
    temp.message = formData.message ? '' : 'Message is required';
    setErrors(temp);
    return Object.values(temp).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {/* Banner */}
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
        <h1 className="fw-bold display-5">#Contact</h1>
        <p className="fs-5">Leave a message. We love to hear from you!</p>
      </div>

      {/* Contact Info + Map */}
      <div className="container my-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-md-6">
            <div className="p-4 h-100 shadow-sm rounded bg-light">
              <p className="text-muted">Get in Touch</p>
              <h4 className="mb-4">Visit one of our locations or contact us today</h4>

              <div className="mb-3 d-flex align-items-start">
                <FaMapMarkerAlt className="me-3 mt-1 text-primary" />
                <p className="mb-0">123 Main Street, New Delhi, India</p>
              </div>

              <div className="mb-3 d-flex align-items-start">
                <FaPhoneAlt className="me-3 mt-1 text-primary" />
                <p className="mb-0">+91 98765 43210</p>
              </div>

              <div className="mb-3 d-flex align-items-start">
                <FaEnvelope className="me-3 mt-1 text-primary" />
                <p className="mb-0">Product@example.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="h-100 shadow-sm rounded overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0159896982765!2d85.31232957422357!3d27.71724567618569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198fd12a64b9%3A0xd90f7aaab6e7d4b3!2sNew%20Road%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1690879840215!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form + Person Info */}
      <div className="container my-5">
        <div className="row g-4">

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <h4 className="mb-4">Send Us a Message</h4>
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                <button type="submit" className="btn btn-success w-100">Send Message</button>
              </form>
            </div>
          </div>

          {/* People Info */}
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              {/* First Person */}
              <div className="text-center mb-4">
                <img
                  src={person1}
                  alt="Rahul Sharma"
                  className="rounded-circle mb-2"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <h6 className="fw-bold mb-1">Rahul Sharma</h6>
                <p className="text-muted small mb-2">Customer Support Manager</p>
                <div className="d-flex justify-content-center gap-2 mb-1">
                  <FaPhoneAlt className="text-primary" /><span>+91 98765 43210</span>
                </div>
                <div className="d-flex justify-content-center gap-2 mb-1">
                  <FaEnvelope className="text-primary" /><span>rahul@example.com</span>
                </div>
              </div>

              <hr />

              {/* Second Person */}
              <div className="text-center">
                <img
                  src={person2}
                  alt="Priya Verma"
                  className="rounded-circle mb-2"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <h6 className="fw-bold mb-1">Priya Verma</h6>
                <p className="text-muted small mb-2">Senior Market Manager</p>
                <div className="d-flex justify-content-center gap-2 mb-1">
                  <FaPhoneAlt className="text-primary" /><span>+91 90123 45678</span>
                </div>
                <div className="d-flex justify-content-center gap-2">
                  <FaEnvelope className="text-primary" /><span>priya@example.com</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
