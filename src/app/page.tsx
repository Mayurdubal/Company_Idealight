"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "@formspree/react";

import "./style.css";
import { techStack } from "@/constants";
import ProjectsGrid from "@/components/projectsGrid";
import Testimonial from "@/components/testimonial";
import { useState } from "react";
import TechGrid from "@/components/projectsGrid/techgrid";

export default function Home() {
  const [state, handleSubmit] = useForm("moqovqjk");
  const hasErrors = Array.isArray(state.errors) && state.errors.length > 0;

  return (
    <main className="home">
      {/* banner section */}
      <div className="banner">
        <div className="wrapper">
          <div className="intro">
            <h2>
              Building <span>Visions</span>
            </h2>
            <p>
              Navigating Innovation with Every Click and Creating Unforgettable
              Online Experiences.
            </p>
            <h3>Web, mobile and cloud experts</h3>
            <ul>
              <li>
                <Link className="contact-us" href="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio">Explore Projects</Link>
              </li>
            </ul>
          </div>
          <figure>
            <Image src="/bannerImg.svg" width={600} height={600} alt="Image" />
          </figure>
        </div>
      </div>
      {/* wrapper */}
      <div className="wrapper">
        {/* about section */}
        <div className="about">
          <div className="about-us">
            <h3>About Us</h3>
            <h4>Crafting Interfaces That Connect</h4>
            <p>
              We are passionate about leveraging cutting-edge technology to
              empower businesses and organizations to thrive in the digital age.
              With a focus on web development, mobile app development, and cloud
              services, we deliver innovative solutions that drive growth,
              streamline operations, and enhance customer experiences.
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
              <Link href="/about">
                <button>Learn More </button>
              </Link>
              <Link href="/contact">Let&apos;s Connect</Link>
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
              <Image
                src="/experience.png"
                width={20}
                height={20}
                alt="mission"
              />
              <div>
                <h5>Expertise & Services</h5>
                <p>
                  Web development, mobile app development, software solutions,
                  cloud services, cybersecurity, etc.
                </p>
              </div>
            </li>
            <li>
              <Image src="/develop.png" width={20} height={20} alt="mission" />
              <div>
                <h5>Approach</h5>
                <p>
                  We work closely with our clients to understand their
                  objectives, challenges, and vision, ensuring that we deliver
                  solutions that exceed their expectations.
                </p>
              </div>
            </li>
            <li>
              <Image
                src="/difficulties.png"
                width={20}
                height={20}
                alt="mission"
              />
              <div>
                <h5>Why Us ?</h5>
                <p>
                  Expertise in latest technologies & industry best practices,
                  committed to innovation and continuous improvement, Client
                  centric focus.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div className="services">
          <h3>Our Services</h3>
          <h4>
            Build your <span>pixel-perfect</span> website
          </h4>
          <p>
            We bring together everything that’s required to build websites.
            Reach more customers, save time and money, and boost sales.
          </p>
          <div className="services1">
            <div>
              <span className="badge">Web Development</span>
              <h5>
                Cutting-edge websites crafted
                <br /> in the latest technologies.
              </h5>
              <p>
                We stay ahead of the curve by harnessing the power of HTML5,
                CSS3, JavaScript, React, Angular, Vue.js, and other cutting-edge
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
                Transform your digital footprint with our expertly crafted
                mobile applications, meticulously developed utilizing the latest
                advancements in technology.
              </p>
              <button>Discover</button>
            </div>
          </div>
          <div className="services2">
            <div>
              <span className="badge">Content Management</span>
              <h5>
                Optimize your digital content and enhance online visibility with
                our tailored content management Services.
              </h5>
              <p>
                Transform your digital footprint with our expertly crafted
                mobile applications, meticulously developed utilizing the latest
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
                organic traffic, and propel your brand to the forefront of
                online search results.
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
                  Ready to harness the full potential of the cloud? Contact us
                  today to learn more about our cloud services and discover how
                  we can help you unlock new possibilities for your business.
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
                    <Image
                      src="/saas.svg"
                      width={40}
                      height={40}
                      alt="support"
                    />{" "}
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
                    <Image
                      src="/backup.svg"
                      width={40}
                      height={40}
                      alt="support"
                    />{" "}
                    Backup & Restore
                  </main>
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* tech-stack section */}
        <div className="tech-stack">
          <div>
            <h3>Our Tech Stack</h3>
            <h4>
              Cutting-Edge <span>Technologies</span> Fueling your Websites
            </h4>
            <p>
              Crafted with precision and powered by the latest advancements, our
              websites stand as a testament to innovation.
            </p>
            <TechGrid />

            <ul>
              {techStack.map(({ id, title, img, description }) => (
                <li key={title}>
                  <Image src={img} width={50} height={50} alt={title} />

                  <h5>{title}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* projects section */}
        <div className="projects">
          <h3>Explore our Projects</h3>
          <h4>
            Explore Our Showcase of <span>Innovative Solutions</span> and Client
            Successes
          </h4>
          <p>
            Explore how we&apos;ve helped clients in various industries achieve
            their goals and surpass expectations. Whether it&apos;s e-commerce,
            healthcare, finance, or beyond, our projects showcase a commitment
            to delivering tailored solutions
          </p>
          <ProjectsGrid />
        </div>
        {/* testimonials section */}
        <Testimonial />
        {/* contact section */}
        <div className="contact">
          <h3>Contact</h3>
          <h4>
            Need <span>help ?</span> Say Hello
          </h4>
          <p>
            Feel free to reach out to us using the options below, and our
            dedicated team will respond to your inquiries promptly.
          </p>
          <div className="options">
            <div>
              <button>
                <Image
                  src="/support.svg"
                  width={25}
                  height={25}
                  alt="support"
                />{" "}
                Need Support ?
              </button>
              <button>
                <Image src="/email.svg" width={25} height={25} alt="email" />{" "}
                Have Feedback ?
              </button>
              <button>
                <Image src="/email.svg" width={25} height={25} alt="email" />{" "}
                Need Support ?
              </button>
            </div>
            <div>
              <h4>How can we help you today ?</h4>
              <p>
                Let us know who you are and what you&apos;re looking for below.
              </p>
              <form className="content-form" onSubmit={handleSubmit}>
                <span>
                  <input type="text" name="name" placeholder="Name" required />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </span>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  defaultValue={""}
                  name="message"
                  required
                />
                <button
                  className="themebtu contact-btn"
                  type="submit"
                  disabled={state.submitting}
                >
                  Send
                </button>
              </form>
              <p
                style={{
                  opacity: 1,
                  marginTop: "20px",
                  color: hasErrors ? "red" : "green"
                }}
              >
                {state.succeeded && "Your Message sent successfully!"}
                {hasErrors && "Failed to send Message"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
