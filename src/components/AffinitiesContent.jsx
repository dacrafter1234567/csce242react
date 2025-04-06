import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/AffinitiesContent.css";
import axios from "axios";

import ArconiaLogo from "../assets/ArconiaLogo.jpg";
import discordlogo from "../assets/discordlogo.png";
import deityData from './deities.json'; // Ensure correct path


const DiscordSection = () => (
  <section className="bottomdiscord">
    <table>
      <thead>
        <tr>
          <th>Arconia Discord</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href="#"><img src={discordlogo} alt="Discord" /></a>
            <p>Join the World of Arconia's Discord! It has the developers of the setting, early access to new content, announcements/updates, and more!</p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
);

const StaffSection = () => (
  <section className="bottomstaff">
    <table>
      <thead>
        <tr>
          <th>Staff</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h4>Creators</h4>
            <p className="user">Collin / Dacrafter1</p>
            <h4>Admins</h4>
            <p className="user">Collin / Dacrafter1</p>
            <h4>Mapmakers</h4>
            <p className="user">Collin / Dacrafter1</p>
            <h4>Editors</h4>
            <p className="user">Collin / Dacrafter1</p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
);

const AffinitiesContent = () => {
  const [deities, setDeitiesArchive] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "http://localhost:3001/api/deities/"
      );
      setDeitiesArchive(response.data);
    })();
  }, []);

  const imageBaseUrl = "http://localhost:3000/public/images/";

  return (
    <div className="deity-list">
      {deities.map((deity, index) => (
        <div key={index} className="deitybar">
          <div className="column example">
            <section className="deityimg leftimg">
              <img 
                src={`/assets/${deity.image}`} 
                alt={deity.name} 
              />
            </section>
            <section className="deitydesc">
              <h3>{deity.name}</h3>
              <p><strong>Elemental Affinity:</strong> {deity.elemental_affinity}</p>
              <p><strong>Description:</strong> {deity.description}</p>
              <p><strong>Gender:</strong> {deity.gender}</p>
              <p><strong>Side:</strong> {deity.side}</p>
              <p><strong>Alignment:</strong> {deity.alignment}</p>
              <p><strong>Personality:</strong> {deity.personality}</p>
              <p><strong>Devoted Guilds:</strong></p>
              <ul>
                {deity.devoted_guilds.map((guild, idx) => (
                  <li key={idx}>{guild}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

  

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="undernavtext">
      <Link to="/">
          <img src={ArconiaLogo} className="logoimg" alt="Arconia Logo" />
        </Link>
        <h2>Welcome to the World of Arconia Wiki!</h2>
        <p>
          This wiki is an extensive archive that documents information about the world. 
          We make efforts to make this wiki as resourceful and informative as possible.
        </p>
        <p><b>
          The World of Arconia is a fantasy world inspired by Critical Role's Exandria.
          Its diverse world is split into eight different continents, each containing their own distinct cultures, kingdoms, and history.
          From characters to curses, artifacts to affinities, this wiki will cover everything there is to know about Arconia as it's developed.
        </b></p>
      </div>

      <div className="flex-container">
        <div className="bigleft">
          <AffinitiesContent />
        </div>

        <div className="smallright">
          <div className="flex-container">
            <div className="pageportal">
              <DiscordSection />
              <StaffSection />
            </div>
          </div>
        </div>
      </div>

      <div className="bottommobilestuff">
        <div className="flex-container">
          <div className="column example">
            <DiscordSection />
            <StaffSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
