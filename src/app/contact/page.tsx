"use client";

import { useForm } from "@formspree/react";
import Image from "next/image";
import "../style.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("moqovqjk");
  const hasErrors = Array.isArray(state.errors) && state.errors.length > 0;

  return (
    <div className="contact menu-container py-20">
      <h3 className="text-base font-semibold text-[#038956]">Contact</h3>
      <h4>
        Need <span>help ?</span> Say Hello
      </h4>
      <p>
        Feel free to reach out to us using the options below, and our dedicated
        team will respond to your inquiries promptly.
      </p>
      <div className="options">
        <div>
          <button>
            <Image src="/support.svg" width={25} height={25} alt="support" />{" "}
            Need Support ?
          </button>
          <button>
            <Image src="/email.svg" width={25} height={25} alt="email" /> Have
            Feedback ?
          </button>
          <button>
            <Image src="/email.svg" width={25} height={25} alt="email" /> Need
            Support ?
          </button>
        </div>
        <div>
          <h4>How can we help you today ?</h4>
          <p>Let us know who you are and what you&apos;re looking for below.</p>
          <form className="content-form" onSubmit={handleSubmit}>
            <span>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
            </span>
            <input type="text" name="subject" placeholder="Subject" required />
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
  );
};
export default Contact;
