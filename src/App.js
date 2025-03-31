import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import Locations from './pages/Locations';
import Characters from './pages/Characters';
import Affinities from './pages/Affinities';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<Items />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/affinities" element={<Affinities />} />
        </Routes>
      </Layout>
    </Router>
    </BrowserRouter>
  );
};

export default App;
