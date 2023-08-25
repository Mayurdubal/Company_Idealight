import Layout from "@/src/layout/Layout";

const Contacts = ({ hideLayout = false }) => {
  return (
    <Layout noHeaderBg pageName={"Contact"} layout={hideLayout}>
      <section className="contact-page gap">
        <div className="container">
          <div className="heading">
            <h2 className="txt-green">Contact Us</h2>
          </div>
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="sidebar d-flex flex-wrap">
                <li className="w-50">
                  <h4 className="txt-green">Address</h4>
                  <span>205, Dwarka Palace, Vimal Dairy Rd, Kashi Nagar, Bhayandar East, Mumbai, Maharashtra 401105</span>
                </li>
                <li className="w-50">
                  <h4 className="txt-green">Working Hours</h4>
                  <span>
                    Monday to Friday: 9AM - 8PM <br /> Week-End: 10AM - 5PM
                  </span>
                </li>
                <li className="w-50">
                  <h4 className="txt-green">Contact</h4>
                  <a href="tel:+917977113822">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path
                          d="M17.1875 10.9115C16.8924 10.9115 16.645 10.8116 16.4453 10.612C16.2457 10.4123 16.1458 10.1649 16.1458 9.86979C16.1458 9.57465 16.2457 9.32725 16.4453 9.1276C16.645 8.92795 16.8924 8.82812 17.1875 8.82812C17.4826 8.82812 17.73 8.92795 17.9297 9.1276C18.1293 9.32725 18.2292 9.57465 18.2292 9.86979C18.2292 10.1649 18.1293 10.4123 17.9297 10.612C17.73 10.8116 17.4826 10.9115 17.1875 10.9115ZM14.7917 8.41145L13.8021 7.39583C14.2535 6.94444 14.7712 6.59288 15.3551 6.34114C15.9391 6.0894 16.5511 5.96354 17.1911 5.96354C17.8311 5.96354 18.4418 6.0894 19.0234 6.34114C19.605 6.59288 20.1215 6.94444 20.5729 7.39583L19.5833 8.41145C19.2535 8.08159 18.8866 7.82986 18.4826 7.65624C18.0786 7.48263 17.6469 7.39583 17.1875 7.39583C16.7281 7.39583 16.2964 7.48263 15.8924 7.65624C15.4884 7.82986 15.1215 8.08159 14.7917 8.41145ZM12.7865 6.35416L11.7969 5.36458C12.526 4.63541 13.3507 4.07552 14.2708 3.68489C15.191 3.29427 16.1632 3.09895 17.1875 3.09895C18.2118 3.09895 19.184 3.29427 20.1042 3.68489C21.0243 4.07552 21.849 4.63541 22.5781 5.36458L21.5885 6.35416C20.9979 5.76251 20.3234 5.31078 19.5652 4.99898C18.8069 4.68716 18.0127 4.53124 17.1827 4.53124C16.3526 4.53124 15.5635 4.69115 14.8155 5.01096C14.0676 5.33077 13.3912 5.7785 12.7865 6.35416ZM20.7031 21.875C18.5851 21.875 16.48 21.3542 14.388 20.3125C12.296 19.2708 10.4167 17.9167 8.75 16.25C7.08333 14.5833 5.72917 12.704 4.6875 10.612C3.64583 8.51996 3.125 6.41493 3.125 4.29687C3.125 3.96204 3.23661 3.68302 3.45982 3.45981C3.68303 3.2366 3.96205 3.12499 4.29688 3.12499H7.94271C8.17901 3.12499 8.39 3.20746 8.57568 3.37239C8.76134 3.53732 8.88021 3.75868 8.93229 4.03645L9.63542 7.3177C9.67014 7.56076 9.6658 7.78211 9.6224 7.98177C9.57899 8.18142 9.48785 8.35069 9.34896 8.48958L6.74479 11.1198C7.71701 12.7344 8.80642 14.1406 10.013 15.3385C11.2196 16.5365 12.5868 17.5521 14.1146 18.3854L16.5885 15.8333C16.7622 15.6424 16.9618 15.5078 17.1875 15.4297C17.4132 15.3516 17.6389 15.3385 17.8646 15.3906L20.9635 16.0677C21.2294 16.1263 21.4477 16.2581 21.6186 16.4632C21.7896 16.6683 21.875 16.9097 21.875 17.1875V20.7031C21.875 21.0379 21.7634 21.317 21.5402 21.5402C21.317 21.7634 21.038 21.875 20.7031 21.875ZM5.96354 9.68749L8.07292 7.55208L7.47396 4.68749H4.6875C4.6875 5.36458 4.79167 6.10677 5 6.91406C5.20833 7.72135 5.52951 8.64583 5.96354 9.68749ZM15.5729 19.1406C16.2847 19.4705 17.0573 19.7396 17.8906 19.9479C18.724 20.1562 19.5313 20.2778 20.3125 20.3125V17.526L17.6302 16.9792L15.5729 19.1406Z"
                          fill="black"
                        />
                      </svg>{" "}
                      +91 7977113822
                    </span>
                  </a>
                </li>
                <li className="w-50">
                  <h4 className="txt-green">Socials</h4>
                  <ul className="brandicon">
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
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-xl-1 col-lg-1"><div class="border-line"></div></div>
            <div className="col-xl-4 col-lg-4">
              <h4 className="txt-green">Get In Touch</h4>
              <form className="content-form pt-10" method="POST">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea placeholder="Your Message" defaultValue={""} required />
                <button className="themebtu contact-btn">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contacts;
