import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="text-center skills py-5" id="MySkills">
      <div className="container">
        <h1>My Skills</h1>
        <p className="text-muted pb-5 pt-3">
          {" "}
          <i>The skills I have learned from the past year </i>
        </p>
        <div className="row py-3 g-3">
          <div className="col-lg-4">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="card"
            >
              <FontAwesomeIcon icon={faJs} className="skill-icon pt-3" />
              <div class="card-body">
                <h5 class="card-title">Javascript</h5>
                <p class="card-text text-hidden">
                  JavaScript is a scripting or programming language that allows
                  you to implement complex features on web pages — every time a
                  web page does more than just sit there and display static
                  information for you to look at — displaying timely content
                  updates, interactive maps, animated 2D/3D graphics, scrolling
                  video jukeboxes, etc. — you can bet that JavaScript is
                  probably involved. It is the third layer of the layer cake of
                  standard web technologies, two of which (HTML and CSS) we have
                  covered in much more detail in other parts of the Learning
                  Area.t est.
                </p>
                <button type="button" class="btn btn-dark ">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
                    className="text-decoration-none text-light"
                    target={"_blank"}
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div data-aos="fade-down" data-aos-duration="1500" className="card">
              <FontAwesomeIcon icon={faBootstrap} className="skill-icon pt-3" />
              <div class="card-body">
                <h5 class="card-title">Bootstrap 5</h5>
                <p class="card-text text-hidden">
                  Bootstrap is a Powerful, extensible, and feature-packed
                  frontend toolkit. Build and customize with Sass, utilize
                  prebuilt grid system and components, and bring projects to
                  life with powerful JavaScript plugins
                </p>
                <button type="button" class="btn btn-dark ">
                  <a
                    href="https://getbootstrap.com/docs/5.2/getting-started/introduction/"
                    className="text-decoration-none text-light"
                    target={"_blank"}
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="card"
            >
              <FontAwesomeIcon icon={faReact} className="skill-icon pt-3" />
              <div class="card-body">
                <h5 class="card-title">React JS</h5>
                <p class="card-text text-hidden">
                  React is a free and open-source front-end JavaScript library
                  for building user interfaces based on UI components. It is
                  maintained by Meta and a community of individual developers
                  and companies.
                </p>
                <button type="button" class="btn btn-dark ">
                  <a
                    href="https://reactjs.org/tutorial/tutorial.html"
                    className="text-decoration-none text-light"
                    target={"_blank"}
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-evenly g-3">
          <div className="col-lg-4">
            <div data-aos="fade-left" data-aos-duration="1500" className="card">
              <FontAwesomeIcon icon={faCss3} className="skill-icon pt-3" />
              <div class="card-body">
                <h5 class="card-title">CSS 3</h5>
                <p class="card-text text-hidden">
                  Cascading Style Sheets is a style sheet language used for
                  describing the presentation of a document written in a markup
                  language such as HTML or XML. CSS is a cornerstone technology
                  of the World Wide Web, alongside HTML and JavaScript.
                </p>
                <button type="button" class="btn btn-dark ">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS"
                    className="text-decoration-none text-light"
                    target={"_blank"}
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div data-aos="fade-up" data-aos-duration="1500" className="card">
              <FontAwesomeIcon icon={faHtml5} className="skill-icon pt-3" />
              <div class="card-body">
                <h5 class="card-title">HTML5</h5>
                <p class="card-text text-hidden">
                  HTML stands for Hyper Text Markup Language. HTML is the
                  standard markup language for creating Web pages. HTML
                  describes the structure of a Web page. HTML consists of a
                  series of elements. HTML elements tell the browser how to
                  display the content.
                </p>
                <button type="button" class="btn btn-dark ">
                  <a
                    href="https://www.hostinger.com/tutorials/what-is-html"
                    className="text-decoration-none text-light"
                    target={"_blank"}
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div data-aos="fade-left" data-aos-duration="1500" className="card">
              <FontAwesomeIcon icon={faDisplay} className="skill-icon pt-3" />
              <div class="card-body">
                <h5 class="card-title ">Responsive Web Design</h5>
                <p class="card-text text-hidden">
                  Responsive web design (RWD) is a web design approach to make
                  web pages that render well on all screen sizes and resolutions
                  while ensuring good usability. It is the way to design for a
                  multi-device web
                </p>
                <button type="button" class="btn btn-dark ">
                  <a
                    href="https://kinsta.com/blog/responsive-web-design/"
                    className="text-decoration-none text-light"
                    target={"_blank"}
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
