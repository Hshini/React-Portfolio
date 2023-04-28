import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs"
      style={{ display: 'flex', justifyContent: "end", flexDirection: 'row', paddingTop: '10px', paddingBottom: "10px", backgroundColor: "#0d6efd" }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <div className='pages' style={{ display: 'flex', justifyContent: 'end', flexDirection: 'row' }}>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About-Me')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} style={{color:'black'}}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}

            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link' } style={{color:'black'}}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} style={{color:'black'}}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} style={{color:'black'}}
          >
            Resume
          </a>
        </li>
      </div>

    </ul>
  );
}

export default NavTabs;
