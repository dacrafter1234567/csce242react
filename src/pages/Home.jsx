import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import '../css/Home.css';

const HomePage = () => {
  return (
    <div id="content">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default HomePage;
