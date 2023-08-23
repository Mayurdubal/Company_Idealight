import BrandSlider from '@/src/components/BrandSlider';
import Layout from '@/src/layout/Layout';

const Services = ({ hideLayout = false }) => {
  return (
    <Layout noHeaderBg pageName={'Services'} layout={hideLayout}>
      <section className="discovery gap no-bottom">
        <div className="container">
          <div className="row">
            <h2 className="page-title">Our Services</h2>

            <div className="col-xl-12">
              <div className="d-flex flex-column flex-md-row gap-30 mt-5">
                <div className="card box-shadow border-0">
                  <div className="card-body">
                    <h5 className="card-title">
                      <img src="assets/img/web-development.png" alt="web development" className="pr-30" />
                      Web Development
                    </h5>
                    <p className="card-text text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                </div>
                <div className="card box-shadow border-0">
                  <div className="card-body">
                    <h5 className="card-title">
                      <img src="assets/img/app-development.png" alt="app-development" className="pr-30" />
                      App Development
                    </h5>
                    <p className="card-text text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                </div>
                <div className="card box-shadow border-0">
                  <div className="card-body">
                    <h5 className="card-title">
                      <img src="assets/img/data-analysis.png" alt="data-analysis" className="pr-30" />
                      Data Analysis
                    </h5>
                    <p className="card-text text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column flex-md-row gap-30 mt-5">
                <div className="card box-shadow border-0">
                  <div className="card-body">
                    <h5 className="card-title">
                      <img src="assets/img/seo.png" alt="seo" className="pr-30" />
                      SEO Optimization
                    </h5>
                    <p className="card-text text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                </div>
                <div className="card box-shadow border-0">
                  <div className="card-body">
                    <h5 className="card-title">
                      <img src="assets/img/cms.png" alt="cms" className="pr-30" />
                      Content Management
                    </h5>
                    <p className="card-text text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                </div>
                <div className="card box-shadow border-0">
                  <div className="card-body">
                    <h5 className="card-title">
                      <img src="assets/img/hosting.png" alt="hosting" className="pr-30" />
                      Hosting
                    </h5>
                    <p className="card-text text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="brands-we-work gap">
        <div className="container">
          <h6 className="txt-green">Technologies we use</h6>
          <BrandSlider />
        </div>
      </div>
    </Layout>
  );
};
export default Services;
