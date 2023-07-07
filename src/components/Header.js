import React, {useState} from 'react';
import BlogPosts from './blogposts';
const Header = ({ setCurrentPage }) => {
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
      <svg viewBox="0 0 1100 300">
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="80%">Alex Baptista </text>
        <text text-anchor="middle" x="50%" y="80%">Alex Baptista </text>
        
      </symbol>

      <g class = "g-ants">
        <use xlinkHref="#s-text" class="text-copy"></use>
        <use xlinkHref="#s-text" class="text-copy"></use>
        <use xlinkHref="#s-text" class="text-copy"></use>
        <use xlinkHref="#s-text" class="text-copy"></use>
        <use xlinkHref="#s-text" class="text-copy"></use>
      </g>
    </svg>
    <div class="twriter_container">
     <div  class="typewriter">
        <h1>Software Developer. Engineer. Entrepreneur. Space Enthusiast.</h1>
     </div>
    </div>
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
      <div style={bioBoxStyle}>
        <h2>Recent Activity</h2>
        <p>
          Posts:
        </p>
      </div>

      <div>
        <BlogPosts/>
      </div>

    </header>
    
  );
};



const bioBoxStyle = {
  marginTop: '100px',
  backgroundColor: '#222',
  textAlign: 'center',
  padding: '20px'
};

const headerStyle = {
  backgroundColor: '#222',
  padding: '20px'
};

const buttonContainerStyle = {
  display: 'flex',
  listStyle: 'none',
  padding: '0',
  justifyContent: 'center',
};


export default Header;

