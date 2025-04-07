import React from "react";
import { Link } from "react-router-dom";
import ArconiaLogo from "../assets/ArconiaLogo.jpg"; // Adjust the path if needed

const UnderNavText = () => (
  <div className="undernavtext">
    <Link to="/">
      <img src={ArconiaLogo} className="logoimg" alt="Arconia Logo" />
    </Link>
    <h2>Welcome to the World of Arconia Wiki!</h2>
    <p>
      This wiki is an extensive archive that documents information about the world. 
      We make efforts to make this wiki as resourceful and informative as possible.
    </p>
    <p>
      <b>
        The World of Arconia is a fantasy world inspired by Critical Role's Exandria.
        Its diverse world is split into eight different continents, each containing their own distinct cultures, kingdoms, and history.
        From characters to curses, artifacts to affinities, this wiki will cover everything there is to know about Arconia as it's developed.
      </b>
    </p>
  </div>
);

export default UnderNavText;
