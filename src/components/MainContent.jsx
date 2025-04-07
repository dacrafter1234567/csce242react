import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./css/MainContent.css";
import ArconiaLogo from "../assets/ArconiaLogo.jpg"; // Adjust the path if needed

import NavigationPortal from './NavigationPortal';
import ResourcefulLinks from './ResourcefulLinks';
import DiscordSection from './DiscordSection';
import StaffSection from './StaffSection';
import UnderNavText from "./UnderNavText";



const MainContent = () => {
  return (
    <main className="main-content">
      <div className="undernavtext">
        <UnderNavText />
      </div>

      <div className="flex-container">
        <div className="bigleft">
          <NavigationPortal />
          <ResourcefulLinks />
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
