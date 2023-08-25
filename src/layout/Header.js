import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import MobileHeader from "./MobileHeader";

const Header = ({ headerExtraClass, noHeaderBg, blackLogo }) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  console.log(router.pathname)

  return (
    <header
      className={headerExtraClass ? headerExtraClass : ""}
      style={!noHeaderBg ? { backgroundImage: `url(assets/img/header.jpg)` } : { background: "transparent" }}
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
                <Link href="/" className={router.pathname == "/" ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="about" className={router.pathname == "/about" ? "active" : ""}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="services" className={router.pathname == "/services" ? "active" : ""}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="portfolio" className={router.pathname == "/portfolio" ? "active" : ""}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="careers" className={router.pathname == "/careers" ? "active" : ""}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="careers" className={router.pathname == "/careers" ? "active" : ""}>
                  Hire Freelancers ?
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="contacts" className={router.pathname == "/contacts" ? "active" : ""}>
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
