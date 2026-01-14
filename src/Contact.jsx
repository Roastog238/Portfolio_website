import React from "react";
import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me through any of the following platforms</p>

        <ul className="contact-list">
          <li>
            <FaEnvelope className="contact-icon email" />
            <a href="mailto:roshankhanal588@gmail.com">
              roshankhanal588@gmail.com
            </a>
          </li>

          <li>
            <FaLinkedin className="contact-icon linkedin" />
            <a
              href="https://www.linkedin.com/in/roshan-khanal-6728a8228/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/roshan-khanal
            </a>
          </li>

          <li>
            <FaGithub className="contact-icon github" />
            <a
              href="https://github.com/Roastog238"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Roastog238
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
