import React from 'react';
import SquareLogo from '../assets/images/square_logo.png';
// import '../assets/images/secondImage.png'; 
import './Banner.css';

const Banner = () => (
  <section className="banner">
    <div className="banner-content">
      <img src={SquareLogo} alt="First Image" className="banner-image" />
      {/* <img src="../assets/images/secondImage.png" alt="Second Image" className="banner-image" /> */}
    </div>
  </section>
);

export default Banner;
