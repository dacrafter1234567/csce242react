import React, { useState } from 'react';
import '../css/Header.css';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <header id="main-header">
      <div className="flex-container">
        <section className="logocol">
          <h2><a href="#">Home</a></h2>
        </section>
        <section className="col9of14"><hr /></section>

        <section className="searchiconcol">
          <a href="#" id="searchIcon" onClick={() => setShowSearch(!showSearch)}>
            <img src="images/searchicon.png" alt="Search" />
          </a>
          {showSearch && <input type="text" placeholder="Search..." />}
        </section>

        <section className="logincol">
          <button className="signinbtn" onClick={() => setShowSignIn(!showSignIn)}>
            <h2>Sign In</h2>
          </button>
          {showSignIn && (
            <div className="dropdown">
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
            </div>
          )}
        </section>
      </div>
    </header>
  );
};

export default Header;
