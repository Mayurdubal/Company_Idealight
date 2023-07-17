const Footer = () => {
  return (
    <footer className="gap no-bottom" style={{ backgroundColor: "#222" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-logo">
              <a href="index.html">
                <img alt="img" src="assets/img/logo.png" />
              </a>
              <p>
                Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis. Morbi in sem quis dui placerat ornare.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="links">
              <h6>Additional links</h6>
              <ul>
                <li>
                  <a href="about.html">About us</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="team.html">team</a>
                </li>
                <li>
                  <a href="blog-grid.html">News</a>
                </li>
                <li className="pb-0">
                  <a href="contacts.html">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-news">
              <h6>Latest news</h6>
              <ul>
                <li>
                  <p>
                    Quisque volutpat mattis eros. Nullam malesuadarat ut turpis.
                  </p>
                  <span>dec 10, 2019 / 0 comments</span>
                </li>
                <li className="pt-4">
                  <p>Aliquam porttitor mauris sit amet orci.</p>
                  <span>dec 10, 2019 / 0 comments</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-news">
              <h6>Subscribe</h6>
              <p>
                Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
                diam.
              </p>
              <form>
                <input
                  type="text"
                  name="email"
                  placeholder="your email address"
                />
                <button>go</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Terio - All Rights Reserved | Developed by bslthemes</p>
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
