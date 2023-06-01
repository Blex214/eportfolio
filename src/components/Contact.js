import React from 'react';

const Contact = ({ setCurrentPage }) => {
    const handleLinkClick = (page) => {
      setCurrentPage(page);
    };
  return (
    <header>
      <h1>Contact</h1>
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

      <div style={imageContainerStyle}>
        <a href="mailto:alexbaptista19@gmail.com">
          <img src={require('./images/email.png')} alt="email" style={imageStyle}></img>
        </a>
        <a href="https://www.linkedin.com/in/alexander-baptista-09756316b/">
          <img src={require('./images/linkedin.png')} alt="LinkedIn" style={imageStyle}></img>
        </a>
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

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '100px'
};

export default Contact;
