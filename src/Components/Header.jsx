import React from 'react';
import '../Style/header.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='container'>
              <div className="content">
                <h3>WASSERSTOFF</h3>
                <div className='Input-div'>
                <input type="text"  className="inputbar"/><SearchIcon className='searchIcon'/>
                </div>
                <nav>
                            <ul>
                                          <li>Statistics</li>
                                          <li>Overview</li>
                                          <li>Dashboard</li>
                                          <li>Analytics</li>
                            </ul>
                </nav>
                <div className="logos">
                  <PersonOutlineIcon/>
                  <div className="sidebar">
                  <DehazeIcon />
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Header