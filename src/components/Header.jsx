import React, { useState } from "react";
import { Tooltip } from "./Tooltip";
import { Link } from "react-scroll";

const Header = ({ classicHeader, darkTheme, homeRef, handleNavClick }) => {
  const [isNavModalClose, setIsNavModalClose] = useState(true);


  return (
    <header id="header" className="sticky-top">
      {/* Navbar */}
      <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
        <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
          {/* Logo */}
          <Link
            smooth
            duration={500}
            style={{  cursor: "pointer" }}
            to="home"
            className="mb-lg-auto mt-lg-4"
            onClick={(e) => {
              e.preventDefault();
              setIsNavModalClose(true);
            }}
          >
            <span className="bg-warning rounded-circle d-flex justify-content-center align-items-center p-1 mb-lg-3 d-none d-lg-inline-block" style={{ width: '200px', height: '200px'}}>
              <img
                className="img-fluid rounded-circle"
                src="images/kenai_profile.jpg"
                title="Hello, I'm Kenai!"
                alt="Kenai outside at a park"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </span>

            <h1 className="text-5 text-white text-center mb-0 d-lg-block">
              Kenai Epps
            </h1>
          </Link>
          {/* Logo End */}
          <div
            id="header-nav"
            className={
              isNavModalClose
                ? "collapse navbar-collapse w-100 my-lg-auto "
                : "show navbar-collapse w-100 my-lg-auto"
            }
           
          >
            <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
              <li className="nav-item">
                <Link
                  target={homeRef}
                  className="nav-link"
                  smooth
                  duration={500}
                  style={{ cursor: "pointer"}}
                  activeClass="active"
                  spy
                  to="home"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);

                  }}

                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  smooth
                  duration={500}
                  style={{ cursor: "pointer"}}
                  activeClass="active"
                  spy
                  to="about"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="services"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  +More
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="resume"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Portfolio
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
            <li className="social-icons-linkedin">
              <Tooltip text="LinkedIn" placement="top">
                <a
                  href="https://www.linkedin.com/in/kenai-epps/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </Tooltip>
            </li>

            <li className="social-icons-github">
              <Tooltip text="GitHub" placement="top">
                <a
                  href="https://github.com/iamMysticK23"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </Tooltip>
            </li>
            <li className="social-icons-instagram">
            <Tooltip text="Instagram" placement="top">
              <a
              href="http://www.instagram.com/hmkexpeditions"
              target="_blank"
              rel="noopener noreferrer"
              >
              <i className="fab fa-instagram" />
              </a>
            </Tooltip>
          </li>
          <li className="social-icons-youtube">
              <Tooltip text="Youtube" placement="top">
                <a
                href="https://www.youtube.com/channel/UC5xF6HWcdTo6sc2Z8WVCrvw"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="fab fa-youtube" />
                </a>
              </Tooltip>
            </li>
          </ul>
          <button
            onClick={(e) => {
              setIsNavModalClose(!isNavModalClose);
            }}
            className={
              isNavModalClose ? "navbar-toggler" : "navbar-toggler show"
            }
            id="navbar-toggler"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default Header;
