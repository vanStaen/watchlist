import React from 'react';
import { Tooltip } from 'antd';

import playIcon from './icons/play.png';
import sortIcon from './icons/sort.png';
import filterIcon from './icons/filter.png';
import addIcon from './icons/add.png';
import infoIcon from './icons/info.png';
import loginIcon from './icons/login.png';

import './Menu.css'

const Menu = (props) => {

  const toggleFilterVisible = () => {
    props.isFilterVisible ?
      props.setIsFilterVisible(false)
      :
      props.setIsFilterVisible(true);
  }

  const styleFilterButton = props.isFilterVisible ? "nav-link nav-link-active" : "nav-link";
  const styleLoginButton = props.token != null ? "nav-link nav-link-active" : "nav-link";
  const tipLoginButton = props.token != null ? "Click to logout" : "Login";

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <div className="nav-logo">
              <img
                className="nav-icon"
                src={playIcon}
                alt="Sort">
              </img>
              <Tooltip placement="right" title="Visit the author's page.">
                <a href="http://www.clementvanstaen.com"
                  target="_blank">
                  <img src="https://avatars0.githubusercontent.com/u/12551446"
                    className="link-text logo-text"
                    alt="Loading" />
                </a>
              </Tooltip>
            </div>
          </li>

          {props.token != null && (<li className="nav-item" onClick={() => props.setShowAddForm(!props.showAddForm)}>
            <Tooltip placement="right" title="Add a link">
              <div className="nav-link">
                <img
                  className="nav-icon"
                  src={addIcon}
                  alt="Sort">
                </img>
              </div>
            </Tooltip>
          </li>)}

          {/* <li className="nav-item">
            <Tooltip placement="right" title="Sort results">
              <a href="#" className="nav-link">
                <img
                  className="nav-icon"
                  src={sortIcon}
                  alt="Sort">
                </img>
              </a>
            </Tooltip>
          </li> */}

          <li className="nav-item"
            onClick={toggleFilterVisible}>
            <Tooltip placement="right" title="Filter results">
              <a href="#" className={styleFilterButton}>
                <img
                  className="nav-icon"
                  src={filterIcon}
                  alt="Sort"
                >
                </img>
              </a>
            </Tooltip>
          </li>

          {/* <li className="nav-item">
            <Tooltip placement="right" title="Info & Impressum">
              <a href="#" className="nav-link">
                <img
                  className="nav-icon"
                  src={infoIcon}
                  alt="Sort">
                </img>
              </a>
            </Tooltip>
          </li> */}

          <li className="nav-item">
            <Tooltip placement="right" title={tipLoginButton}>
              <span className={styleLoginButton}>
                {props.token != null ?
                  (<img
                    className="nav-icon"
                    src={loginIcon}
                    alt="Login"
                    onClick={() => props.logout()}>
                  </img>)
                  :
                  (<img
                    className="nav-icon"
                    src={loginIcon}
                    alt="Login"
                    onClick={() => { props.setShowLoginForm(!props.showAddForm) }
                    }>
                  </img>)
                }
              </span>
            </Tooltip>
          </li>

        </ul>
      </nav>
    </div >
  )
}

export default Menu