import { useState } from 'react'
import React from 'react';

import './App.css'


import Header from './components/Header';
import Banner from './components/Banner';
import GigList from './components/GigList';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header />
    <Banner />
    <GigList />
    <Footer />
  </div>
);

export default App;