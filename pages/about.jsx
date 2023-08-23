import Layout from '@/src/layout/Layout';

const About = ({ hideLayout = false }) => {
  return (
    <Layout noHeaderBg pageName={'About'} layout={hideLayout}>
      <section className="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-xl-5">
              <img src="assets/img/about-us.png" alt="about us" />
            </div>
            <div className="col-xs-12 col-xl-7">
              <h2 className="aboutus--title">About Us</h2>
              <p className="aboutus--desc">
                We are web, mobile and cloud expert. we are a multi-disciplinary maker with over 5+ years of experience in wide range of design disciplines,
                entrepreneur, front-end developer, back-end developer, cloud architect and more.
              </p>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Our Experience
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Our Approach
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Why Us ?
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <p className="tab-pane-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque quibusdam fuga natus non necessitatibus eveniet maiores nostrum esse
                    ut voluptates sint dolore.
                  </p>
                  <ul className="about-list-group">
                    <li className="about-list-group-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path
                          d="M9.20937 14.4812L15.4 8.29063L14.3938 7.30625L9.20937 12.4906L6.58437 9.86562L5.6 10.85L9.20937 14.4812ZM10.5 19.25C9.30417 19.25 8.17396 19.0203 7.10938 18.5609C6.04479 18.1016 5.1151 17.4745 4.32031 16.6797C3.52552 15.8849 2.89844 14.9552 2.43906 13.8906C1.97969 12.826 1.75 11.6958 1.75 10.5C1.75 9.28958 1.97969 8.15208 2.43906 7.0875C2.89844 6.02292 3.52552 5.09687 4.32031 4.30938C5.1151 3.52188 6.04479 2.89844 7.10938 2.43906C8.17396 1.97969 9.30417 1.75 10.5 1.75C11.7104 1.75 12.8479 1.97969 13.9125 2.43906C14.9771 2.89844 15.9031 3.52188 16.6906 4.30938C17.4781 5.09687 18.1016 6.02292 18.5609 7.0875C19.0203 8.15208 19.25 9.28958 19.25 10.5C19.25 11.6958 19.0203 12.826 18.5609 13.8906C18.1016 14.9552 17.4781 15.8849 16.6906 16.6797C15.9031 17.4745 14.9771 18.1016 13.9125 18.5609C12.8479 19.0203 11.7104 19.25 10.5 19.25ZM10.5 17.9375C12.5708 17.9375 14.3281 17.212 15.7719 15.7609C17.2156 14.3099 17.9375 12.5562 17.9375 10.5C17.9375 8.42917 17.2156 6.67188 15.7719 5.22812C14.3281 3.78437 12.5708 3.0625 10.5 3.0625C8.44375 3.0625 6.6901 3.78437 5.23906 5.22812C3.78802 6.67188 3.0625 8.42917 3.0625 10.5C3.0625 12.5562 3.78802 14.3099 5.23906 15.7609C6.6901 17.212 8.44375 17.9375 10.5 17.9375Z"
                          fill="#038956"
                        />
                      </svg>{' '}
                      Trusted Partner
                    </li>
                    <li className="about-list-group-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path
                          d="M9.20937 14.4812L15.4 8.29063L14.3938 7.30625L9.20937 12.4906L6.58437 9.86562L5.6 10.85L9.20937 14.4812ZM10.5 19.25C9.30417 19.25 8.17396 19.0203 7.10938 18.5609C6.04479 18.1016 5.1151 17.4745 4.32031 16.6797C3.52552 15.8849 2.89844 14.9552 2.43906 13.8906C1.97969 12.826 1.75 11.6958 1.75 10.5C1.75 9.28958 1.97969 8.15208 2.43906 7.0875C2.89844 6.02292 3.52552 5.09687 4.32031 4.30938C5.1151 3.52188 6.04479 2.89844 7.10938 2.43906C8.17396 1.97969 9.30417 1.75 10.5 1.75C11.7104 1.75 12.8479 1.97969 13.9125 2.43906C14.9771 2.89844 15.9031 3.52188 16.6906 4.30938C17.4781 5.09687 18.1016 6.02292 18.5609 7.0875C19.0203 8.15208 19.25 9.28958 19.25 10.5C19.25 11.6958 19.0203 12.826 18.5609 13.8906C18.1016 14.9552 17.4781 15.8849 16.6906 16.6797C15.9031 17.4745 14.9771 18.1016 13.9125 18.5609C12.8479 19.0203 11.7104 19.25 10.5 19.25ZM10.5 17.9375C12.5708 17.9375 14.3281 17.212 15.7719 15.7609C17.2156 14.3099 17.9375 12.5562 17.9375 10.5C17.9375 8.42917 17.2156 6.67188 15.7719 5.22812C14.3281 3.78437 12.5708 3.0625 10.5 3.0625C8.44375 3.0625 6.6901 3.78437 5.23906 5.22812C3.78802 6.67188 3.0625 8.42917 3.0625 10.5C3.0625 12.5562 3.78802 14.3099 5.23906 15.7609C6.6901 17.212 8.44375 17.9375 10.5 17.9375Z"
                          fill="#038956"
                        />
                      </svg>{' '}
                      Product Security
                    </li>
                    <li className="about-list-group-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path
                          d="M9.20937 14.4812L15.4 8.29063L14.3938 7.30625L9.20937 12.4906L6.58437 9.86562L5.6 10.85L9.20937 14.4812ZM10.5 19.25C9.30417 19.25 8.17396 19.0203 7.10938 18.5609C6.04479 18.1016 5.1151 17.4745 4.32031 16.6797C3.52552 15.8849 2.89844 14.9552 2.43906 13.8906C1.97969 12.826 1.75 11.6958 1.75 10.5C1.75 9.28958 1.97969 8.15208 2.43906 7.0875C2.89844 6.02292 3.52552 5.09687 4.32031 4.30938C5.1151 3.52188 6.04479 2.89844 7.10938 2.43906C8.17396 1.97969 9.30417 1.75 10.5 1.75C11.7104 1.75 12.8479 1.97969 13.9125 2.43906C14.9771 2.89844 15.9031 3.52188 16.6906 4.30938C17.4781 5.09687 18.1016 6.02292 18.5609 7.0875C19.0203 8.15208 19.25 9.28958 19.25 10.5C19.25 11.6958 19.0203 12.826 18.5609 13.8906C18.1016 14.9552 17.4781 15.8849 16.6906 16.6797C15.9031 17.4745 14.9771 18.1016 13.9125 18.5609C12.8479 19.0203 11.7104 19.25 10.5 19.25ZM10.5 17.9375C12.5708 17.9375 14.3281 17.212 15.7719 15.7609C17.2156 14.3099 17.9375 12.5562 17.9375 10.5C17.9375 8.42917 17.2156 6.67188 15.7719 5.22812C14.3281 3.78437 12.5708 3.0625 10.5 3.0625C8.44375 3.0625 6.6901 3.78437 5.23906 5.22812C3.78802 6.67188 3.0625 8.42917 3.0625 10.5C3.0625 12.5562 3.78802 14.3099 5.23906 15.7609C6.6901 17.212 8.44375 17.9375 10.5 17.9375Z"
                          fill="#038956"
                        />
                      </svg>{' '}
                      System Security
                    </li>
                    <li className="about-list-group-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path
                          d="M9.20937 14.4812L15.4 8.29063L14.3938 7.30625L9.20937 12.4906L6.58437 9.86562L5.6 10.85L9.20937 14.4812ZM10.5 19.25C9.30417 19.25 8.17396 19.0203 7.10938 18.5609C6.04479 18.1016 5.1151 17.4745 4.32031 16.6797C3.52552 15.8849 2.89844 14.9552 2.43906 13.8906C1.97969 12.826 1.75 11.6958 1.75 10.5C1.75 9.28958 1.97969 8.15208 2.43906 7.0875C2.89844 6.02292 3.52552 5.09687 4.32031 4.30938C5.1151 3.52188 6.04479 2.89844 7.10938 2.43906C8.17396 1.97969 9.30417 1.75 10.5 1.75C11.7104 1.75 12.8479 1.97969 13.9125 2.43906C14.9771 2.89844 15.9031 3.52188 16.6906 4.30938C17.4781 5.09687 18.1016 6.02292 18.5609 7.0875C19.0203 8.15208 19.25 9.28958 19.25 10.5C19.25 11.6958 19.0203 12.826 18.5609 13.8906C18.1016 14.9552 17.4781 15.8849 16.6906 16.6797C15.9031 17.4745 14.9771 18.1016 13.9125 18.5609C12.8479 19.0203 11.7104 19.25 10.5 19.25ZM10.5 17.9375C12.5708 17.9375 14.3281 17.212 15.7719 15.7609C17.2156 14.3099 17.9375 12.5562 17.9375 10.5C17.9375 8.42917 17.2156 6.67188 15.7719 5.22812C14.3281 3.78437 12.5708 3.0625 10.5 3.0625C8.44375 3.0625 6.6901 3.78437 5.23906 5.22812C3.78802 6.67188 3.0625 8.42917 3.0625 10.5C3.0625 12.5562 3.78802 14.3099 5.23906 15.7609C6.6901 17.212 8.44375 17.9375 10.5 17.9375Z"
                          fill="#038956"
                        />
                      </svg>{' '}
                      Operational Security
                    </li>
                  </ul>
                </div>

                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <p className="tab-pane-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque quibusdam fuga natus non necessitatibus eveniet maiores nostrum esse
                    ut voluptates sint dolore.
                  </p>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                  <p className="tab-pane-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque quibusdam fuga natus non necessitatibus eveniet maiores nostrum esse
                    ut voluptates sint dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
