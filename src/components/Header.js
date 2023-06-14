import React from 'react';
import BlogPosts from './blogposts';
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

