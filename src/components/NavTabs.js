import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs"
      style={{ display: 'flex', justifyContent: "space-between", flexDirection: 'row', paddingTop: '10px', paddingBottom: "10px", backgroundColor: "#A5C0FA" }}>
      <div className='name'>
        <li className="nav-item" >
          <a
            href="#name"
            onClick={() => handlePageChange('About-Me')}
            className={currentPage === 'name' ? 'nav-link active' : 'nav-link'}
          >
            Halim
          </a>
        </li>
      </div>
      <div className='pages' style={{ display: 'flex', justifyContent: 'end', flexDirection: 'row' }}>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About-Me')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}

            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </div>

    </ul>
  );
}

export default NavTabs;
