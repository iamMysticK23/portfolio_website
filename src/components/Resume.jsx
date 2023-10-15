import React from "react";
import resumeFile from "../documents/KenaiEpps_FEDev_Oct2023.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2023",
      title: "Full Stack Software Engineer Certificate of Completion",
      place: "Coding Temple",
      desc: "Received the following credentials: Python Certified, SQL Certified, CSS Certified, JavaScript Certified, Flask Certified, React Certified, HTML Certified, NodeJS Certified.",
      link: "https://www.credly.com/users/kenai-epps/badges"
    },
    {
      yearRange: "2007 - 2011",
      title: "Bachelor Degree, Bachelor of Science, Computer and Information Sciences",
      place: "Devry University",
      desc: "Completed coursework towards degree path.",
      grade: "3.79"
    },

  ];

  const experienceDetails = [
    {
      yearRange: "2023",
      title: "Full Stack Software Engineer in Training",
      place: "Coding Temple",
      desc: [
        "Constructed an individual Python project for a mock real estate rental company: features user management, property and financial tracking, and ROI calculation.",
        "Launched a Flask project for a blog based on a RESTful Web API: includes login functionality, PostgreSQL database integration, full CRUD operations, and an engaging front-end interface.",
        "Developed an F1 Racer App using JavaScript and Axios: dynamically populates data based on user-specified seasons and rounds.",
        "Engineered a dynamic weather app: utilizes the OpenWeatherMap and Unsplash APIs to provide users with weather details and city images.",
        "Executed an OOP shopping cart webpage in TypeScript: features user interaction, item management, and dynamic cart updates."
      ]
    }
  ];
  
  
  

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-warning text-black text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-warning" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                  <br/>
                  {value.link && (
                        <a
                          href={value.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={"mb-0 " + (darkTheme ? "text-warning" : "")}
                        >
                          View Credentials
                        </a>
                      )}
                      {value.grade && (
                        <p className={"mb-0 " + (darkTheme ? "text-warning" : "")}>
                          Grade: {value.grade}
                        </p>
                      )}
                    </div>
                  ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-warning text-black text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-warning" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc.map((point, pointIndex) =>
                    <li key={pointIndex}>{point}</li>
                    )}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}

        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download Resume
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
