import React from 'react';
import Header from '../components/Header';
import ItemsContent from '../components/ItemsContent';
import Footer from '../components/Footer';
import './css/Items.css';
import '../global.css';

const HomePage = () => {
  return (
    <div id="content">
      <ItemsContent />
    </div>
  );
};

export default HomePage;