import React, { useEffect } from "react";
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="header-wraper" id="Home">
      <div className="main-info">
        <h1 data-aos="fade-down" data-aos-duration="2000">
          Hello, I'm <span className="fw-bold">Tom Lau</span>
        </h1>
        <Typed
          className="typed-text text-center"
          strings={["I'm a Self-Taught Developer"]}
          typeSpeed={150}
          backSpeed={50}
          loop
        />
        <a className="main-btn" data-aos="zoom-in" data-aos-duration="1000" href="#">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
