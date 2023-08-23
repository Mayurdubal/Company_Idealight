import Link from 'next/link';
import { useState } from 'react';
import MobileHeader from './MobileHeader';

const Header = ({ headerExtraClass, noHeaderBg, blackLogo }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <header
      className={headerExtraClass ? headerExtraClass : ''}
      style={!noHeaderBg ? { backgroundImage: `url(assets/img/header.jpg)` } : { background: 'transparent' }}
    >
      <div className="container">
        <div className="nav flex-sm-nowrap flex-md-wrap">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>{blackLogo ? <img alt="idealite" src="assets/img/idealite-logo.svg" /> : <img alt="idealite" src="assets/img/idealite-logo.svg" />}</a>
              </Link>
            </div>
            <ul className="menu">
              <li>
                <Link legacyBehavior href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="about">
                  About Us
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="services">
                  Services
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="portfolio">
                  Projects
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="hire">
                  Hire Freelancers ?
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="contact">
                  <a className="themebtu">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bar-menu flex-shrink-1" onClick={() => setToggle(true)}>
            <i className="fa-solid fa-bars" />
          </div>
        </div>
      </div>
      <MobileHeader toggle={toggle} close={() => setToggle(false)} />
    </header>
  );
};
export default Header;
