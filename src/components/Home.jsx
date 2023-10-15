import React from "react";
import Typewriter from "typewriter-effect";

const Home = ({ classicHeader, darkTheme, handleNavClick }) => {
  return (
    <section id="home">
      <div className="hero-wrap">

        <div className="hero-mask opacity-8 bg-dark" />

        {/* ---------------image background------------------ */}
        <div className={`hero-bg parallax d-none d-md-block`}  // This will display only on medium devices and above
          style={{
            backgroundImage: 'url("https://images.hdqwalls.com/wallpapers/stock-nature-golden-hours-rocks-mountains-orange-sky-4k-5j.jpg")',
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* For smaller devices, you can use a different image or adjust the position/size */}
        <div className={`hero-bg parallax d-md-none`}  // This will display only on devices smaller than medium
          style={{
            backgroundImage: 'url("images/nature_2.jpg")',
            backgroundSize: '25%',
            backgroundPosition: 'center',  // Adjust as required for mobile view
            backgroundRepeat: 'no-repeat',
            minHeight: '200px'  // Adjust based on mobile needs
          }}
        ></div>

        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">Hello!</p>
                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  <Typewriter
                    options={{
                      strings: [
                        "I'm Kenai Epps.",
                        "I'm an emerging Front End Developer.",
                        "I'm eager to Drive Innovation + Achieve Measurable Results.",
                        "I'm a Creator.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <p className="text-5 text-light mb-4">
                  based in San Francisco/Bay Area, California.
                </p>
                <a
                  href="#contact"
                  className="btn btn-outline-warning rounded-pill shadow-none smooth-scroll mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
