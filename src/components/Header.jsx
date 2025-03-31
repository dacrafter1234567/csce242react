import React, { useState } from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './css/Header.css';
import searchIcon from '../assets/searchicon.png';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <header id="main-header">
      <div className="flex-container">
        <section class="logocol">
          <table>
            <tr>
              <th>
                  <Link to="/">
                  <h2>Home</h2>
                </Link>
              </th>
            </tr>
          </table>             
        </section>
        <section className="col9of14"><hr /></section>

        <section className="searchiconcol">
          <table>
            <tr>
              <th>
                <a href="#" id="searchIcon" onClick={() => setShowSearch(!showSearch)}>
                <img src={searchIcon} alt="Search" />
                </a>
                {showSearch && <input type="text" placeholder="Search..." />}
              </th>
            </tr>
          </table>
        </section>

        <section class="searchcol">
          <table>
            <tr>
              <th>
                {<input type="text" placeholder="Search..." />}
              </th>
            </tr>
          </table>
        </section>

        <section className="logincol">
          <table>
            <tr>
              <th>
                <button className="signinbtn" onClick={() => setShowSignIn(!showSignIn)}>
                <h2>Sign In</h2>
                </button>
                {showSignIn && (
                <div className="dropdown">
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="Password" />
                </div>
                )}
              </th>
            </tr>
          </table>
          
        </section>
      </div>
    </header>
  );
};

export default Header;
