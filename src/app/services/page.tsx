import Image from "next/image";
import "../style.css";
const Services = () => {
  return (
    <div className="services menu-container">
      <h3 className="text-base font-semibold text-[#038956]">Our Services</h3>
      <h4>
        Build your <span>pixel-perfect</span> website
      </h4>
      <p>
        We bring together everything that’s required to build websites. Reach
        more customers, save time and money, and boost sales.
      </p>
      <div className="services1">
        <div>
          <span className="badge">Web Development</span>
          <h5>
            Cutting-edge websites crafted
            <br /> in the latest technologies.
          </h5>
          <p>
            We stay ahead of the curve by harnessing the power of HTML5, CSS3,
            JavaScript, React, Angular, Vue.js, and other cutting-edge
            technologies to create dynamic and responsive websites.
          </p>
          <button>Discover</button>
        </div>
        <div>
          <span className="badge">App Development</span>
          <h5>
            Empower your mobile presence with state-of-the-art applications.
          </h5>
          <p>
            Transform your digital footprint with our expertly crafted mobile
            applications, meticulously developed utilizing the latest
            advancements in technology.
          </p>
          <button>Discover</button>
        </div>
      </div>
      <div className="services2">
        <div>
          <span className="badge">Content Management</span>
          <h5>
            Optimize your digital content and enhance online visibility with our
            tailored content management Services.
          </h5>
          <p>
            Transform your digital footprint with our expertly crafted mobile
            applications, meticulously developed utilizing the latest
            advancements in technology.
          </p>
          <button>Discover</button>
        </div>
        <div>
          <span className="badge">SEO Optimization</span>
          <h5>
            Boost your online presence and climb the search engine rankings
          </h5>
          <p>
            we fine-tune your digital strategy to maximize visibility, drive
            organic traffic, and propel your brand to the forefront of online
            search results.
          </p>
          <button>Discover</button>
        </div>
      </div>
      <div className="services3">
        <div>
          <span>
            <span className="badge">Cloud Services</span>
            <h5>
              Unleash the Power of the Cloud: Transform Your Business Today.
            </h5>
            <p>
              Ready to harness the full potential of the cloud? Contact us today
              to learn more about our cloud services and discover how we can
              help you unlock new possibilities for your business.
            </p>
            <button className="primary-button">Discover</button>
          </span>
          <span>
            <span>
              <main>
                <Image
                  src="/security.svg"
                  width={40}
                  height={40}
                  alt="support"
                />{" "}
                Cloud Security
              </main>
              <main>
                <Image src="/saas.svg" width={40} height={40} alt="support" />{" "}
                Software as a Service
              </main>
            </span>
            <span>
              <main>
                <Image
                  src="/migration.svg"
                  width={40}
                  height={40}
                  alt="support"
                />{" "}
                Cloud Migration
              </main>
              <main>
                <Image src="/backup.svg" width={40} height={40} alt="support" />{" "}
                Backup & Restore
              </main>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Services;
