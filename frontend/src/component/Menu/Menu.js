import React from 'react';
import { Tooltip } from 'antd';

import playIcon from './icons/play.png';
import sortIcon from './icons/sort.png';
import filterIcon from './icons/filter.png';
import addIcon from './icons/add.png';
import infoIcon from './icons/info.png';
import loginIcon from './icons/login.png';

import './Menu.css'

const Menu = () => {

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="#" className="nav-logo">
              <img
                className="nav-icon"
                src={playIcon}
                alt="Sort">
              </img>
            </a>
          </li>

          <li className="nav-item">
            <Tooltip placement="right" title="Add a link">
              <a href="#" className="nav-link">
                <img
                  className="nav-icon"
                  src={addIcon}
                  alt="Sort">
                </img>
              </a>
            </Tooltip>
          </li>


          <li className="nav-item">
            <Tooltip placement="right" title="Sort results">
              <a href="#" className="nav-link">
                <img
                  className="nav-icon"
                  src={sortIcon}
                  alt="Sort">
                </img>
              </a>
            </Tooltip>
          </li>

          <li className="nav-item">
            <Tooltip placement="right" title="Filter results">
              <a href="#" className="nav-link">
                <img
                  className="nav-icon"
                  src={filterIcon}
                  alt="Sort">
                </img>
              </a>
            </Tooltip>
          </li>

          <li className="nav-item">
            <Tooltip placement="right" title="Info">
              <a href="#" className="nav-link">
                <img
                  className="nav-icon"
                  src={infoIcon}
                  alt="Sort">
                </img>
              </a>
            </Tooltip>
          </li>

          <li className="nav-item">
            <Tooltip placement="right" title="Login">
              <a href="#" className="nav-link">
                <img
                  className="nav-icon"
                  src={loginIcon}
                  alt="Sort">
                </img>
              </a>
            </Tooltip>
          </li>

        </ul>
      </nav>
    </div >
  )
}

export default Menu