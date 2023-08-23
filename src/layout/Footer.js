const Footer = () => {
  return (
    <footer className="gap no-bottom" style={{ backgroundColor: 'rgba(3, 137, 86, 0.07)' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-logo">
              <a href="index.html">
                <img alt="img" src="assets/img/idealite-logo.svg" />
              </a>
              <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Cras Bibendum Auctor Justo, Ac Bibendum Neque Sollicitudin Ac.</p>
              <p className="pt-10">
                <a href="tel:0123456789">0123456789</a>
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="links">
              <h6 className="txt-green">Explore</h6>
              <ul>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Where to Find Us</a>
                </li>
                <li className="pb-0">
                  <a href="contacts">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="links">
              <h6 className="txt-green">Company</h6>
              <ul>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/portfolio">Work</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li className="pb-0">
                  <a href="blogs">Blogs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="links">
              <h6 className="txt-green">Solutions</h6>
              <ul>
                <li>
                  <a href="/services">App Development</a>
                </li>
                <li>
                  <a href="/services">Web Development</a>
                </li>
                <li>
                  <a href="/services">Cloud Services</a>
                </li>
                <li className="pb-0">
                  <a href="services">Automation Testing</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Idealite Technologies LLP.</p>
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-m" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
