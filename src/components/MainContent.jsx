import React from 'react';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="undernavtext">
        <img src="images/ArconiaLogo.jpg" className="logoimg" alt="Arconia Logo" />
        <h2>Welcome to the World of Arconia Wiki!</h2>
        <p>This wiki is an extensive archive that documents information about the world...</p>
        <p><b>The World of Arconia is a fantasy world inspired by Critical Role's Exandria...</b></p>
      </div>

      <div className="flex-container">
        {/* Your other sections */}
      </div>
    </main>
  );
};

export default MainContent;

