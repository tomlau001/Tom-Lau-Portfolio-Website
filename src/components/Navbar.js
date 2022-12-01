/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faUser, faBolt, faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"



const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">     
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item active px-lg-4">
              <Link to='Home' className="nav-link ">
                <FontAwesomeIcon icon={faHome} className="px-2"/>
                Home
              </Link>
            </li>

            <li className="nav-item px-lg-4">
              <Link to='AboutMe' className="nav-link ">
                <FontAwesomeIcon icon={faUser} className="px-2"/>
                About Me
              </Link>
            </li>
            
            <li className="nav-item px-lg-4">
              <Link to='MySkills' className="nav-link ">
                <FontAwesomeIcon icon={faBolt} className="px-2"/>
                My Skills 
              </Link>
            </li>

            <li className="nav-item px-lg-4">
              <Link to='Contact' className="nav-link ">
                <FontAwesomeIcon icon={faPaperPlane} className="px-2"/>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar