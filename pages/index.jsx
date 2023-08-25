import Layout from '@/src/layout/Layout';
import About from './about';
import Services from './services';
import PortfolioGrid from './portfolio';
import Careers from './careers';

const Index = () => {
  return (
    <Layout noHeaderBg headerExtraClass={'two'} blackLogo pageName={'Home'}>
      <section className="hero-section-three gap">
        <div className="swiper-wrapper">
          <div className="row align-items-center">
            <div className="col-xl-5 offset-xl-1">
              <div className="heading-boder">
                <h2>Design and build things for web and mobile.</h2>
                <p>
                  Web, mobile and cloud experts <img src="assets/img/hero-banner-icon.png" alt="cloud" />
                </p>
                <a href="hire" className="themebtu-secondary mb-2">
                  Want to hire freelancers ?
                </a>
                &nbsp; &nbsp;
                <a href="contact" className="themebtu full mb-2">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="three-page-img">
                <img alt="img" className="w-100" src="assets/img/hero-banner.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination two-style" />
      </section>
      <About hideLayout={true} />
      <Services hideLayout={true} />
      <PortfolioGrid hideLayout={true} />
      <Careers hideLayout={true} />
    </Layout>
  );
};
export default Index;
