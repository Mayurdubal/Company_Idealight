import Image from "next/image";
import Link from "next/link";
import "../style.css";
const About = () => {
  return (
    <div className="about menu-container">
      <div className="about-us">
        <h3 className="text-base font-semibold text-[#038956]">About Us</h3>
        <h4>Crafting Interfaces That Connect</h4>
        <p>
          We are passionate about leveraging cutting-edge technology to empower
          businesses and organizations to thrive in the digital age. With a
          focus on web development, mobile app development, and cloud services,
          we deliver innovative solutions that drive growth, streamline
          operations, and enhance customer experiences.
        </p>
        <ul>
          <li>
            <Image src="/tick.svg" width={15} height={15} alt="tick" />
            Trusted Partner
          </li>
          <li>
            <Image src="/tick.svg" width={15} height={15} alt="tick" />
            Client Centric focus
          </li>
          <li>
            <Image src="/tick.svg" width={15} height={15} alt="tick" />
            Quality Assurance
          </li>
        </ul>
        <div>
          <button>Learn More</button>
          <Link href="/">Let&apos;s Connect</Link>
        </div>
      </div>
      <ul className="about-list">
        <li>
          <Image src="/mission.png" width={20} height={10} alt="mission" />
          <div>
            <h5>Mission</h5>
            <p>
              Our mission is to empower businesses with innovative digital
              solutions that drive growth and success.
            </p>
          </div>
        </li>
        <li>
          <Image src="/experience.png" width={20} height={20} alt="mission" />
          <div>
            <h5>Expertise & Services</h5>
            <p>
              Web development, mobile app development, software solutions, cloud
              services, cybersecurity, etc.
            </p>
          </div>
        </li>
        <li>
          <Image src="/develop.png" width={20} height={20} alt="mission" />
          <div>
            <h5>Approach</h5>
            <p>
              We work closely with our clients to understand their objectives,
              challenges, and vision, ensuring that we deliver solutions that
              exceed their expectations.
            </p>
          </div>
        </li>
        <li>
          <Image src="/difficulties.png" width={20} height={20} alt="mission" />
          <div>
            <h5>Why Us ?</h5>
            <p>
              Expertise in latest technologies & industry best practices,
              committed to innovation and continuous improvement, Client centric
              focus.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default About;
