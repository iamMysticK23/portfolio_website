import React, { useState } from "react";
import resumeFile from "../documents/KenaiEpps_FEDev_Oct2023.pdf";



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
              I'm <span className="text-warning">Kenai Epps,</span> an emerging Front End Developer.
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            From a young age, technology has always captivated me. My journey, enriched with extensive retail management experience and time spent as a dedicated truck driver, 
            has shaped my self development and embracing of challenges. 
            In the dynamic world of logistics, I've navigated ever-changing road and weather conditions, 
            managed tight delivery schedules, and proudly upheld a 100% on-time delivery rating. 
            These experiences, from understanding varied personalities to adeptly juggling time, 
            have forged an invaluable skill set.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            Beyond the rigors of professional life, I indulge in the art of content creation. 
            My Canon R8 isn't just a camera; it's an extension of my being. 
            Tools like Final Cut Pro and Adobe Photoshop aren't just software; they're the instruments in my creative symphony. 
            This intersection of technology and creativity paved my path to front end development.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            With a discerning eye for design and a profound passion for tech, 
            I transform abstract visions into digital masterpieces. 
            Armed with React JS, TypeScript, HTML, and CSS, I will ensure that every pixel, every coded element, 
            perfectly aligns with a client's aspirations.
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
                Download CV
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
                        <span>Languages</span>
                    </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                JavaScript | TypeScript | HTML-5 | CSS | Python 
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center my-2 my-md-0">
              <h4 className={"text-12 mb-0 fs-5 fs-sm-4 fs-md-3 fs-lg-2 " + (darkTheme ? "text-white-50" : "text-muted")}>
                        <span>Frameworks</span>
                    </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  React.js | Node.js | Flask | BootStrap5 
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
