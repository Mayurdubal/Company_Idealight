import Image from "next/image"
import Link from "next/link";

import "./style.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer-1">
        <div className="intro">
          <Image src="/logo.png" width={100} height={100} alt="Idealite logo" />
          <p>We are passionate about leveraging cutting-edge technology to empower businesses and organizations to thrive in the digital age.</p>
        </div>
        <div className="explore">
          <h5>Explore</h5>
          <ul>
            <li>
              <Link href="/">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/">
                Where to Find Us
              </Link>
            </li>
            <li>
              <Link href="/">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="company">
          <h5>Company</h5>
          <ul>
            <li>
              <Link href="/">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/">
                Work
              </Link>
            </li>
            <li>
              <Link href="/">
                Services
              </Link>
            </li>
            <li>
              <Link href="/">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="solution">
          <h5>Solutions</h5>
          <ul>
            <li>
              <Link href="/">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/">
                Work
              </Link>
            </li>
            <li>
              <Link href="/">
                Services
              </Link>
            </li>
            <li>
              <Link href="/">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="touch">
          <h5>Get in Touch</h5>
          <p>205, Dwarka Palace, Vimal Dairy Rd, Kashi Nagar, Bhayandar East, Mumbai, Maharashtra 401105</p>
        </div>
      </div>
      <div className="footer-2">
        <p>© Idealite Technologies LLP. All rights Reserved</p>
        <ul>
          <li>
            <Link href="/">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link href="/">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer