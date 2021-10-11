import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import Search from './Search.js';
import NavBarCss from './NavBar.module.css';
import { ChatDotsFill, BellFill, ChevronDown } from 'react-bootstrap-icons';

export default function Header() {
  return (
    <React.Fragment>
      <div className={NavBarCss.header}>
        <div className={NavBarCss.headerIconGroup}>
          <Link to="/" className={NavBarCss.link}>
            <img alt="logo" src={Logo} className={NavBarCss.imgSize} />
          </Link>
          <Link to="/" className={NavBarCss.link}>
            <p className={NavBarCss.paddingLateral}>Inicio</p>
          </Link>
        </div>
        <Search />
        <div className={NavBarCss.headerIconGroup}>
          <Link to="#" className={NavBarCss.link}>
            <BellFill className={NavBarCss.imgSize} />
          </Link>
          <Link to="#" className={NavBarCss.link}>
            <ChatDotsFill className={NavBarCss.imgSize} />
          </Link>
          <Link to="#" className={NavBarCss.link}>
            <div className={NavBarCss.userName}>
              <p>E</p>
            </div>
          </Link>
          <Link to="#" className={NavBarCss.link}>
            <ChevronDown className={NavBarCss.smallSize} />
          </Link>
        </div>
      </div>
      <div className={NavBarCss.outsideButtoms}>
        <button>+</button>
        <button>?</button>
      </div>
    </React.Fragment>
  );
}
