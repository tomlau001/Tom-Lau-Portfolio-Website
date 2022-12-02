import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faBolt,
  faPaperPlane,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-dark text-bg-light" id="Contact">
      <div className="container">
        <section className="social-media-icon text-center mb-4">
          <a href="https://www.facebook.com/ " target={"_blank"}>
            <FontAwesomeIcon icon={faFacebook} className="icon-fb mx-2" />
          </a>
          <a href="https://github.com/tomlau001">
            <FontAwesomeIcon icon={faGithub} className="icon-gh mx-2" />
          </a>
          <a href="https://www.instagram.com/" target={"_blank"}>
            <FontAwesomeIcon icon={faInstagram} className="icon-ig mx-2" />
          </a>
          <a href="https://www.linkedin.com/" target={"_blank"}>
            <FontAwesomeIcon icon={faLinkedin} className="icon-li mx-2" />
          </a>
        </section>

        <section className="text-light ">
          <div className="row footer-link gy-2">
            <div className="col-lg-6">
              <Link to="Home" className="footer-items">
                <FontAwesomeIcon icon={faHome} className="px-2 " />
                Home
              </Link>
            </div>

            <div className="col-lg-6 ">
              <Link to="AboutMe" className="footer-items">
                <FontAwesomeIcon icon={faUser} className="px-2" />
                About Me
              </Link>
            </div>

            <div className="col-lg-6 ">
              <Link to="MySkills" className="footer-items">
                <FontAwesomeIcon icon={faBolt} className="px-2" />
                My Skills
              </Link>
            </div>

            <div className="col-lg-6 ">
              <Link to="Contact" className="footer-items">
                <FontAwesomeIcon icon={faPaperPlane} className="px-2" />
                Contact
              </Link>
              <p className="my-2">
                <FontAwesomeIcon icon={faEnvelope} className="px-2 " />
                Email: lauhohofung@gmail.com
              </p>
              <p className="my-2">
                <FontAwesomeIcon icon={faPhone} className="px-2" />
                Phone : +852 5111 8351
              </p>
            </div>
          </div>
        </section>

        <div className="text-center text-light p-6 pb-2 py-5">
        © 2022 Copyright
          <a
            href="https://LHFPortfolioWebsite.com/"
            className="text-light copyright"
            target={"_blank"}
          >
            {" "}
            Tom Lau. All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
