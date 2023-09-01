import React, {useState} from 'react';

const Certifications = ({ setCurrentPage }) => {
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
        <h1>Certifications</h1>
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
          <img src={require('./images/Databricks1.png')} alt="databricks1" style={imageStyle} />
          <img src={require('./images/Databricks2.png')} alt="databricks2" style={imageStyle} />
          <div style={descriptionStyle}>
            <h2>Databricks Lakehouse Fundamentals</h2>
            <p></p>
            <p></p>
            <p>Issued: August 28th, 2023</p>
            <p>Expires: August 28th, 2024</p>
            <p></p>
            <p></p>
            <p>
              <a href="https://credentials.databricks.com/a3c2c2db-2a67-4ef5-a4b6-3f813f56e24b?record_view=true" target="_blank" rel="noopener noreferrer" style={{ color: 'grey', marginRight: '50px'}}>Learn more</a>      
            </p>
          </div>
        </div>
      </div>

      <div style={projectContainerStyle}>
        <div style={projectBoxStyle}>
          <img src={require('./images/STK1.png')} alt="databricks1" style={imageStyle} />
          <div style={descriptionStyle}>
            <h2>Ansys/AGI ~ Level 1 System Tool Kit(STK) Certification</h2>
            <p></p>
            <p></p>
            <p>Issued: August 5th, 2022</p>
            <p>Expires: Does Not Expire</p>
            <p></p>
            <p></p>
            <p>
              <a href="https://www.agi.com/training-and-certification#cert" target="_blank" rel="noopener noreferrer" style={{ color: 'grey', marginRight: '50px'}}>Learn more</a>      
            </p>
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
export default Certifications;
