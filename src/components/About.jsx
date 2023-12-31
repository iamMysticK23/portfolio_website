import React, { useState } from "react";
import resumeFile from "../documents/KenaiEpps_FEDev2023.pdf";



const AboutUs = ({ classicHeader, darkTheme }) => {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyles = {
    transition: '0.3s',
    color: isHovered ? '#5f5f5f' : '#FFC007',
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Get To Know More
            <span className="heading-separator-line border-bottom border-3 border-warning d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-warning">Kenai Epps,</span> a Front End Developer.
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            ▪️💻 I am a front-end developer with a full stack software engineer certificate from Coding Temple. 
                I specialize in creating intuitive and visually compelling user interfaces that enhance digital user experiences and drive innovation.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            ▪️📚 My diverse background, which spans from retail management to dedicated truck driving, 
                has equipped me with skills in leadership, communication, problem-solving, and time management. 
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            ▪️📷 I have also developed a passion for digital artistry, 
                using tools like Final Cut Pro, Adobe Photoshop, and Adobe Lightroom to craft visual narratives. 
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            ▪️📲 I apply these skills and passions to web development, 
                using technologies like React JS, TypeScript, JavaScript, HTML, and CSS to bring abstract concepts to digital life. 
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Kenai Epps
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a
                    href="mailto:k.epps23@gmail.com"
                    style={linkStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    k.epps23@gmail.com
                  </a>
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">Location:</span>San Francisco/Bay Area,
                  California
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-warning rounded-pill"
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
                <div className="col-6 col-md-3">
                  <div className="featured-box text-center my-2 my-md-0">
                  <h4 className={"text-12 mb-0 fs-5 fs-sm-4 fs-md-3 fs-lg-2 " + (darkTheme ? "text-white-50" : "text-muted")}>
                        <span>Recent</span>
                    </h4>

                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                 Software Engineer Bootcamp Graduate
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center my-2 my-md-0">
              <h4 className={"text-12 mb-0 fs-5 fs-sm-4 fs-md-3 fs-lg-2 " + (darkTheme ? "text-white-50" : "text-muted")}>
                        <span>Lang</span>
                    </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                JavaScript | TypeScript | HTML-5 | CSS | Python 
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center my-2 my-md-0">
              <h4 className={"text-12 mb-0 fs-5 fs-sm-4 fs-md-3 fs-lg-2 " + (darkTheme ? "text-white-50" : "text-muted")}>
                        <span>FrmWrk</span>
                    </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  ReactJS | NodeJS | Flask | BootStrap5 
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center my-2 my-md-0">
              <h4 className={"text-12 mb-0 fs-5 fs-sm-4 fs-md-3 fs-lg-2 " + (darkTheme ? "text-white-50" : "text-muted")}>
                        <span>Extras+</span>
                    </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  APIs | SQL | Responsive Web Design | Object-Oriented Programming
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
