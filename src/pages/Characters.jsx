import React from 'react';
import Header from '../components/Header';
import CharactersContent from '../components/CharactersContent';
import Footer from '../components/Footer';
import './css/Locations.css';
import '../global.css';

const HomePage = () => {
  return (
    <div id="content">
      <CharactersContent />
    </div>
  );
};

export default HomePage;