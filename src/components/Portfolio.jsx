/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
 // eslint-disable-next-line 
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    REACTPROJECTS: "React.js",
    FLASKPROJECTS: "Flask",
    OTHER: "Other",
  };

  const projectsData = [
    {
      title: "TrekTracker App",
      projectInfo:`
      At its core, TrekTracker is an ode to my passion for hiking, 
      offering nature enthusiasts a platform to discover trails around them. 
      I created this app at Coding Temple's bootcamp. 
      TrekTracker harnesses the power of React JS and Material UI for a 
      sleek front-end experience. Simultaneously, the robust backbone of the 
      application is strengthened by Google's authentication, Firestore, and storage, ensuring a seamless backend integration.
      `,
      technologies: "ReactJS, HTML5, MaterialUI, CSS3, OpenWeatherMap API, GoogleMaps API and TrailAPI, Google Firebase, Google Firestore and Google Storage",
      industry: "Technology",
      date: "October 2023",
      url: {
        name: "Live Demo",
        link: "https://trektracker-app.web.app/",
      },
      socialLinks: {
        github: "https://github.com/iamMysticK23/CT_CapstoneProject_TrekTrackerm",

      },
      thumbImage: "images/projects/trektracker.png",
      sliderImages: [
        "images/projects/trektracker.png",
        "images/projects/trektracker_login.png",
        "images/projects/traillist.png",
      ],
      categories: [filters.REACTPROJECTS],
    },
    {
      title: "TheBlogSpot",
      projectInfo:
       `Users can create their accounts through a registration process. Initially, all users are assigned the "blogger" role, 
       and an additional "admin" role is available to simulate administrator privileges within the blog system.
       Upon successful registration, users gain access to the site and can perform various actions, 
       such as creating, updating, and deleting their blog posts. They also have the ability to manage their own user profiles.
       When it comes to deleting blog posts, users are restricted to removing their own posts from the system. 
       However, the feature allowing administrators to delete posts from all users' accounts may be considered for future development.
       Users are granted the freedom to edit both their blog posts and personal profile information. 
       Additionally, they have the option to permanently delete their posts from the database whenever necessary.`,
      technologies: "Flask, Jinja, HTML5, CSS3",
      industry: "Blog",
      date: "September 2023",
      url: {
        name: "Live Demo",
        link: "https://theblogspot-xh32.onrender.com",
      },
      socialLinks: {
        github: "https://github.com/iamMysticK23/W6_WeekendAssignment",

      },
      thumbImage: "images/projects/tbs_1.jpeg",
      sliderImages: [
        "images/projects/tbs_1.jpeg",
        "images/projects/tbs_2.jpeg",
        "images/projects/tbs_3.jpeg",
        "images/projects/tbs_4.jpeg",
        "images/projects/tbs_5.jpeg",
        "images/projects/tbs_6.jpeg",
      ],
      categories: [filters.REACTPROJECTS],
    },
    {
      title: "Dynamic Weather App",
      projectInfo:`
      This weather app was designed to be dynamic, user-friendly and informative. I added humidity, high, low and additional weather information.
      It is designed using CSS with Bootstrap 5. I wanted the app to have run smoothly and be visually appealing. 
      `,
      technologies: "Javscript, HTML5, CSS3, BootStrap5, OpenWeatherMap API,",
      industry: "Technology/Weather",
      date: "September 2023",
      url: {
        name: "Live Demo",
        link: "https://ke-weather-app.netlify.app/",
      },
      socialLinks: {
        github: "https://github.com/iamMysticK23/W7-WeekendHW/",

      },
      thumbImage: "images/projects/weatherapp1.png",
      sliderImages: [
        "images/projects/weatherapp1.png",
        "images/projects/weatherapp2.png",
        "images/projects/weatherapp3.png",
      ],
      categories: [filters.REACTPROJECTS],
    },
    {
      title: "Secure Password Generator",
      projectInfo:`
      The Secure Password Generator is a robust JavaScript-powered application, 
      designed to fortify online protection by generating randomized and sturdy passwords. 
      In a single click, users can ensure they're steps ahead in safeguarding their digital accounts.
      
      Recent Enhancements (10/23/2023):

      Integrated Light/Dark Mode for user convenience.
      Introduced a flexible drop-down for character length choices ranging from 10 to 20 characters.
      Provided toggle options for the inclusion of special characters and numbers, giving users a more personalized password creation experience.
      `,
      technologies: "Javscript, HTML5, CSS3",
      industry: "Technology",
      date: "October 2023",
      url: {
        name: "Live Demo",
        link: "https://password-generator-ke.netlify.app",
      },
      socialLinks: {
        github: "https://github.com/iamMysticK23/password-generator-ke",

      },
      thumbImage: "images/projects/password-gen1.png",
      sliderImages: [
        "images/projects/password-gen2.png",
        "images/projects/password-gen3.png",
      ],
      categories: [filters.REACTPROJECTS],
    },
  
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "vertical",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  // eslint-disable-next-line no-unused-vars
  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          {/* <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul> */}
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
    <div className="row portfolio-filter filter-container g-4">
        {projectsData.length > 0 &&
            projectsData.map((project, index) => (
                <div className="col-12 filter-item" key={project.title}>
                    <div className="portfolio-box rounded d-flex flex-column flex-lg-row">
                          {/* Image Carousel on the left */}
                          <div className="portfolio-img bg-dark col-12 col-lg-8" style={{  padding: '5px',}}>
                              <div id={`carousel${project.title.replace(/\s/g, '')}`} className="carousel slide" data-bs-ride="carousel">
                                  <div className="carousel-inner">
                                      {project.sliderImages.map((image, index) => (
                                          <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                              <img
                                                  onLoad={() => {
                                                      setimagesLoaded(imagesLoaded + 1);
                                                  }}
                                                  src={image}
                                                  alt={`${project.title} slide ${index + 1}`} 
                                                  className="img-fluid d-block portfolio-image"
                                                  style={{ width: '100%', height: 'auto', maxWidth: '690px', maxHeight: '690px', margin: 'auto', marginTop: '100px',marginBottom: '50px', filter:'none' }}
                                              />
                                          </div>
                                      ))}
                                  </div>
                                  <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${project.title.replace(/\s/g, '')}`} data-bs-slide="prev">
                                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span className="visually-hidden">Previous</span>
                                  </button>
                                  <button className="carousel-control-next" type="button" data-bs-target={`#carousel${project.title.replace(/\s/g, '')}`} data-bs-slide="next">
                                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span className="visually-hidden">Next</span>
                                  </button>
                              </div>
                          </div>
                            {/* Description on the right */}
                            <div className="portfolio-description col-12 col-lg-4 p-3 bg-secondary">
                            <h5 className="text-warning fw-bold text-center">{project.title}</h5>
                            <p className="text-light">{project.projectInfo}</p>
                            <p className="text-light"><strong>Technologies:</strong> {project.technologies}</p>
                            <p className="text-light"><strong>Industry:</strong> {project.industry}</p>
                            <p className="text-light"><strong>Date:</strong> {project.date}</p>
                            <a
                                className="btn btn-primary mb-2"
                                href={project.url.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit: {project.url.name}
                            </a>
                            <div className="mt-2">
                                <a href={project.socialLinks.github} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', fontSize: '24px' }}><i className="fab fa-github"></i></a>
                                {/* <a href={project.socialLinks.twitter} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}><i className="fab fa-twitter"></i></a>
                                <a href={project.socialLinks.google} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}><i className="fab fa-google"></i></a>
                                <a href={project.socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}><i className="fab fa-instagram"></i></a>
                                <a href={project.socialLinks.mail} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}><i className="fas fa-envelope"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
    </div>
</div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
