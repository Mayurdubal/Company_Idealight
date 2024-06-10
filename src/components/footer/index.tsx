import Image from "next/image";
import Link from "next/link";

import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-1">
        <div className="intro">
          <Image src="/logo.svg" width={100} height={100} alt="Idealite logo" />
          <p>
            We are passionate about leveraging cutting-edge technology to
            empower businesses and organizations to thrive in the digital age.
          </p>
        </div>
        <div className="explore">
          <h5>Explore</h5>
          <ul>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Where to Find Us</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="company">
          <h5>Company</h5>
          <ul>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Work</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="solution">
          <h5>Solutions</h5>
          <ul>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Work</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="touch">
          <h5>Get in Touch</h5>

          <div className="map">
            <a
              href="https://www.google.com/maps/place/SH-20,+Ajanta+Square,+Ajanta+Theater,+OFF+L+T+Road,+Borivali+West,+Mumbai,+Maharashtra+400092/@19.1822222,72.8443333,17z/data=!3m1!4b1!4m5!3m4!1s0x3be77e5a083c390f:0x8288419c87d98a1f!8m2!3d19.1822222!4d72.8443333"
              target="_blank"
              rel="noopener noreferrer"
            >
              SH-20, Ajanta Square, Ajanta Theater, OFF L T Road, Borivali West,
              Mumbai Mumbai Suburban Maharashtra, Pin Code - 400092
            </a>
          </div>
          <span>
            <Image src="/call.svg" width={15} height={15} alt="call" />
            <a href="tel:917977113822">917977113822</a>
          </span>
          <span>
            <Image src="/email.svg" width={15} height={15} alt="call" />
            <a href="mailto:harshit@idealite.in">harshit@idealite.in</a>
          </span>
        </div>
      </div>
      <div className="footer-2">
        <p>© Idealite Technologies LLP. All rights Reserved</p>
        <ul>
          <li>
            <Link href="/">Terms & Conditions</Link>
          </li>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
