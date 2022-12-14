import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-up">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactcontainer" data-aos="fade-up">
          <a
            href="https://www.linkedin.com/in/abhishek-anand-b592a4221"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/AvisakeAnand"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          <a
            href="mailto:avisakea@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
          </a>
          <a href="tel:+919693362852" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
          </a>
        </div>
      </div>
    </>
  );
};
