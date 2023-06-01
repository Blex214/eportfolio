import React from 'react';

const Header = ({ setCurrentPage }) => {
  const handleLinkClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <header>
      <h1>Alex Baptista</h1>
      <nav>
        <ul>
          <li>
            <button
              style={buttonStyle}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              style={buttonStyle}
              onClick={() => handleLinkClick('about')}
            >
              About
            </button>
          </li>
          <li>
            <button
              style={buttonStyle}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              style={buttonStyle}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <div style={bioBoxStyle}>
        <h2>Welcome!</h2>
        <p>
          This is my personal website where I post what I'm up to and all about me!
        </p>
      </div>
    </header>
    
  );
};


const buttonStyle = {
  padding: '10px 50px',
  backgroundColor: '#556',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  
};

const bioBoxStyle = {
  marginTop: '100px',
  backgroundColor: '#222',
  textAlign: 'center',
  padding: '20px'
};
export default Header;

