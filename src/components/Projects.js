import React, {useState} from 'react';

const Projects = ({ setCurrentPage }) => {
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
      <h1>Projects</h1>
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

      <div style={projectContainerStyle}>
        <div style={projectBoxStyle}>
          <div style={descriptionStyle}>
            <h2>BlexCloud</h2>
            <p>An application that creates a WordCloud out of Google search results</p>
            <p></p>
            <p></p>
            <p></p>
            <p><a href="https://github.com/Blex214/blexcloud" target="_blank" rel="noopener noreferrer" style={{ color: 'grey' }}>The code</a></p>
          </div>
          <img src={require('./images/Blexcloud1.png')} alt="Blexcloud1" style={imageStyle} />
          
          <img src={require('./images/Blexcloud2.png')} alt="Blexcloud2" style={imageStyle} />
          
          <img src={require('./images/Blexcloud3.png')} alt="Blexcloud3" style={imageStyle} />
        </div>
      </div>

      <div style={projectContainerStyle}>
        <div style={projectBoxStyle}>
          <img src={require('./images/AIPR1.jpg')} alt="AIPR1" style={imageStyle} />
          <div style={descriptionStyle}>
            <h2>AI Powered Recycling ~ AIPR</h2>
            <p>An award winning solution for sorting recyclable waste using artificial intellgience and robotics</p>
            <p></p>
            <p></p>
            <p></p>
            <p>
              <a href="https://www.youtube.com/watch?v=1LzOsPAORoU" target="_blank" rel="noopener noreferrer" style={{ color: 'grey', marginRight: '50px'}}>Learn more</a>      
              <a href="https://www.psu.edu/news/research/story/two-student-teams-awarded-25000-using-artificial-intelligence-good/" target="_blank" rel="noopener noreferrer" style={{ color: 'grey' }}>News</a>
            </p>
          </div>
        </div>
      </div>

      <div style={projectContainerStyle}>
        <div style={projectBoxStyle}>
          <div style={descriptionStyle}>
            <h2>My own website... this website!</h2>
            <p>I created my own eportfolio where you can learn all about my interests, experiences and skills</p>
            <p></p>
            <p></p>
            <p></p>
            <p><a href="https://github.com/Blex214/eportfolio" target="_blank" rel="noopener noreferrer" style={{ color: 'grey' }}>The code</a></p>
          </div>
          <p></p>
          <p></p>
          <p></p>
          <img src={require('./images/mywebsite.png')} alt="mysite1" target="_blank" rel="noopener noreferrer" style={imageStyle} />
        </div>
      </div>
      <div style={projectContainerStyle}>
        <div style={projectBoxStyle}>
          <img src={require('./images/toby.jpg')} alt="Toby" style={imageStyle} />
          <div style={descriptionStyle}>
            <h2>Toby Bot</h2>
            <p>A chat and sound bot for Discord inspired by my Cocker Spaniel/ Beagle mixed dog Toby</p>
            <p></p>
            <p></p>
            <p></p>
            <p><a href="https://github.com/Blex214/Discord-Bot-Toby" target="_blank" rel="noopener noreferrer" style={{ color: 'grey' }}>The code</a></p>
          </div>
        </div>
      </div>

      <p></p>
      <p></p>
      <p></p>
    </header>

  );
};



const projectContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '100px',
  backgroundColor: '#222',
  boxShadow: '20px 20px 5px rgba(0, 0, 0, 200)'
  };
  
  const projectBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
  marginTop: '20px',
  marginLeft: '20px',
  };
  
  const imageStyle = {
  width: '400px',
  height: '400px',
  marginRight: '10px',
  };
  
  const descriptionStyle = {
  marginLeft: '20px',
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
export default Projects;
