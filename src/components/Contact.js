import React, {useState} from 'react';

const Contact = ({ setCurrentPage }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleLinkClick = (page) => {
    setCurrentPage(page);
  };

  const handleButtonMouseEnter = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleButtonMouseLeave = () => {
    setHoveredButton(null);
  };

  const getButtonStyle = (buttonName) => {
    const baseButtonStyle = {
      padding: '20px 50px',
      backgroundColor: '#556',
      color: '#fff',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      marginRight: '20px',
    };

    if (hoveredButton === buttonName) {
      return {
        ...baseButtonStyle,
        boxShadow: '0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white, 0 0 200px white',
      };
    }

    return baseButtonStyle;
  };
  return (
    <header>
      <div style={headerStyle}>
      <h1>Contact</h1>
      <nav>
      <ul style={buttonContainerStyle}>
        <li>
              <button
                style={getButtonStyle('home')}
                onMouseEnter={() => handleButtonMouseEnter('home')}
                onMouseLeave={handleButtonMouseLeave}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                style={getButtonStyle('about')}
                onMouseEnter={() => handleButtonMouseEnter('about')}
                onMouseLeave={handleButtonMouseLeave}
                onClick={() => handleLinkClick('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                style={getButtonStyle('certifications')}
                onMouseEnter={() => handleButtonMouseEnter('certifications')}
                onMouseLeave={handleButtonMouseLeave}
                onClick={() => handleLinkClick('certifications')}
              >
                Certifications
              </button>
            </li>
            <li>
              <button
                style={getButtonStyle('projects')}
                onMouseEnter={() => handleButtonMouseEnter('projects')}
                onMouseLeave={handleButtonMouseLeave}
                onClick={() => handleLinkClick('projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                style={getButtonStyle('contact')}
                onMouseEnter={() => handleButtonMouseEnter('contact')}
                onMouseLeave={handleButtonMouseLeave}
                onClick={() => handleLinkClick('contact')}
              >
                Contact
              </button>
            </li>
        </ul>
      </nav>
      </div>
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

const headerStyle = {
  backgroundColor: '#222',
  padding: '20px'
};

const buttonContainerStyle = {
  display: 'flex',
  listStyle: 'none',
  padding: '0',
  
};
export default Contact;
