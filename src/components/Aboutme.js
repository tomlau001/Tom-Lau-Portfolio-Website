import React,{useEffect} from "react";
import selfIcon from "../img/aboutme.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutme = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-5 bg-dark text-light about" id="AboutMe">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-5 ">
            <img src={selfIcon} className="img-fluid rounded" alt="Img" data-aos="fade-right" data-aos-duration="2000"/>
          </div>

          <div className="col-lg-7 ">
            <h1 data-aos="fade-left" data-aos-duration="1500">About Me</h1>
            <p className="fst-italic text-secondary" data-aos="fade-down" data-aos-duration="1500">
              "Success is not final; failure is not fatal: It is the courage to
              continue that counts." <br /> — Winston S. Churchill
            </p>

            <p className="py-5 aboutme-main" data-aos="fade-up" data-aos-duration="1500">
              Hello, my name is  <span className="fw-bold">Tom Lau</span> and I'm a self-taught 
              person who are interested in programming. I learned programming mainly via YouTube tutorials 
              and Coursera courses. Over the past year, I have learned how to creates websites 
              and applications using web languages and tools such as HTML, CSS, JavaScript, Bootstrap 
              and ReactJs.
              <br />
              <br />
              I love the way of learning through self-taught. Just-in-time learning motivate me to learn continually. I can 
              flexibly management and planning my time by my own. It make me feel happier during the proactive learning process, 
              find my passion back and even more curious than before. 
              <br />
              <br />
              I am now seeking for a job opportunity in front end development to gain hands-on and real life experience. 
              Also want to learn with the companies and co-worker who are like-minded, and we can gaining and improve the 
              skills together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
