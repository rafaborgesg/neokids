import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Neokids</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;