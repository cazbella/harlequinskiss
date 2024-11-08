import React from 'react';

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';



import Header from './components/Header';
import Banner from './components/Banner';
import GigList from './components/GigList';
import Footer from './components/Footer';
import SocialHeader from './components/SocialHeader';

// import backgroundImage from './assets/images/background.webp';

// const styles = {
//   backgroundImage: `url(${backgroundImage})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
// };


const App = () => (
  <div>
    <SocialHeader />
    <div className="main-content">
      <Header />
      <Banner />
      <GigList />
      <Footer />
    </div>
  </div>
);

export default App;
