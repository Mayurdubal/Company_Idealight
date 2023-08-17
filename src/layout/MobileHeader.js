import Link from 'next/link';

const MobileHeader = ({ toggle, close }) => {
  return (
    <div className={`mobile-nav ${toggle ? 'open' : 'hmburger-menu'}`} id="mobile-nav" style={{ display: 'block' }}>
      <div className="res-log">
        <a href="index.html">
          <img src="assets/img/idealite-logo.svg" alt="idealite" />
        </a>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
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
          <Link legacyBehavior href="projects">
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
          <Link legacyBehavior href="contacts">
            contacts
          </Link>
        </li>
      </ul>
      <a href="JavaScript:void(0)" id="res-cross" onClick={() => close()} />
    </div>
  );
};
export default MobileHeader;
