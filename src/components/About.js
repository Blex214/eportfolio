import React, {useState} from 'react';

const About = ({ setCurrentPage }) => {
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
        <h1>About me</h1>
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
      
      <div style={bioBoxStyle1}>
          <h1>Resume</h1>
      </div>
      <p></p>
      <p></p>
      <p></p>
      <a href="https://docs.google.com/document/d/1sQOkXDJ3hStGWHscoq0TrzTy3aY-5NdI92JSAZfg_Ho/edit?usp=sharing" target = '_blank'>
        <img src={require('./images/resume.png')} alt="resume" style={imageStyle1} />
      </a>
      <p></p>
      <p></p>
      <p></p>

      <div style={bioBoxStyle}>
        <img
          src={require('./images/me.png')}
          alt="Me"
          style={bioimage}
        />
        <h1>Intro:</h1>
        <p>
          My name is Alex Baptista, and I am an early career full stack software developer. I graduated from 
          Penn State Main Campus in May 2023 from the College of Engineering with a bachelors degree in Computer Science and 
          a minor in Planetary Science and Astronomy.
        </p>
        <p></p>
        <h1>My Penn State Journey:</h1>
        <p>
          While at Penn State, I was accepted into the co-ed business fraternity
          <a href="https://www.pctpsu.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}> Phi Chi Theta</a>, 
          Alpha Iota chapter in the Fall 2019 of my freshman year. 
          As a member of Phi Chi Theta I worked with like minded professionally oriented students to develop our business skills
          and grow my professional network. During my four years in this orginization I mentored younger members who were engineering
          majors with resume reviews and mock interviews. 
        </p>
        <p>
          For two years, I was Phi Chi Theta's Family Relations chair. In this position I played a vital role in fostering a positive and supportive 
          environment for the families impacted by pediatric cancer within the 
          <a href="https://donate.thon.org/index.cfm?fuseaction=cms.home" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}> THON </a>
          community. I worked to ensure that the families feel valued, 
          heard, and supported throughout their journey, while also facilitating meaningful connections between the families and Phi Chi Theta.
          I also had the honor of dancing in THON 2023 as one of seven dancers representing Phi Chi Theta. Dancing and being a Family Relations chair 
          has been by far the most rewarding experience of my life and I owe much of who I am today to all my friends in Phi Chi Theta.
        </p>
        <p>
          I also was involved in 
          <a href="https://sites.psu.edu/sedspennstate/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}> SEDS~PSU </a> 
          and 
          <a href="https://nittanyai.psu.edu/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}> Nittany AI Alliance. </a>  
          SEDS is a club for students who are passionate about space exploration 
          and want try their hand at building the technology that humanity may someday use to explore the Universe.
          The Nittany AI Alliance is a collaborative initiative at Penn State University that brings together students, faculty, and industry 
          partners to advance the integration and understanding of artificial intelligence technologies. It serves as a hub for research,
          education, and innovation, fostering AI-driven solutions and promoting AI literacy across various disciplines.
        </p>
      </div>

      <div style={imageContainerStyle}>
        <img
          src={require('./images/psu.png')}
          alt="Psu"
          style={imageStyle}
        />
        <img
          src={require('./images/fightins.png')}
          alt="Phillies"
          style={imageStyle}
        />
        <img
          src={require('./images/eagles.png')}
          alt="Go birds"
          style={imageStyle}
        />
        <img
          src={require('./images/sixers.png')}
          alt="76ers"
          style={imageStyle}
        />
        <img
          src={require('./images/flyers.png')}
          alt="Flyers"
          style={imageStyle}
        />
        <img
          src={require('./images/pct.png')}
          alt="Phi Chi Theta"
          style={imageStyle}
        />
        <img
          src={require('./images/union.png')}
          alt="Union"
          style={imageStyle}
        />
      </div>

      
      </header>
  );
};



const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '100px'
};

const bioimage = {
  width: '15%',
  height: '100%',
  objectFit: 'cover',
  border: '10px solid #531',
  boxShadow: '20px 20px 5px rgba(0, 0, 0, 200)',
};

const imageStyle = {
  width: '15%',
  height: '100%',
  objectFit: 'cover',
};

const imageStyle1 = {
  marginTop: '30px',
  width: '1000px',
  height: '1414px',
  margin: 'auto',
  display: 'block',
};

const bioBoxStyle = {
  marginTop: '100px',
  backgroundColor: '#222',
  textAlign: 'center',
  padding: '20px',
  boxShadow: '20px 20px 5px rgba(0, 0, 0, 200)'
};

const bioBoxStyle1 = {
  height: '100%',
  marginTop: '50px',
  backgroundColor: '#222',
  textAlign: 'center',
  padding: '20px',
  boxShadow: '20px 20px 5px rgba(0, 0, 0, 200)'
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
export default About;
