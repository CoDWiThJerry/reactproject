import React from 'react';

const SignupSection = () => {
  return (
    <div
      className="container-fluid py-4"
      style={{
        backgroundColor: '#101b51',
        padding:'0% 6.7%', // light grey background
       
      }}
    >
      <div className="row align-items-center">
        
        {/* Left Div: Paragraph */}
        <div className="col-md-6 mb-4 mb-md-0">
          <p className='p' style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            marginBottom: '0.5rem'
          }}>
            Sign Up For Newsletter
          </p>

          <p className='pera' style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            <span style={{ fontWeight: 'bold', color: '#edcc0d' }}>
              Welcome to our platform!
            </span>{' '}
            Sign up now to receive updates, tips, and more.
          </p>
        </div>

        {/* Right Div: Email Input + Button */}
        <div className="col-md-6">
          <form className="d-flex flex-column flex-sm-row gap-1">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
              style={{
                minHeight: '45px',
                padding: '10px',
                fontSize: '1rem'
              }}
            />
            <button
              type="submit"
              className="btn"
              style={{
                width:'200px',
                minHeight: '45px',
                fontSize: '1rem',
                fontWeight: '500',
                background:'#62bbed',

              }}
            >
              Sign Up
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default SignupSection;
