import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "./Tooltip";

const Contact = ({ classicHeader, darkTheme }) => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMail(true);
    emailjs
      .sendForm(
        "kenaiepps23",
        "template_4inzj9i",
        form.current,
        "j79rU4kyE6QGMNJve"
      )
      .then(
        (result) => {
          document.getElementById("contact-form").reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkTheme ? "dark" : "light",
          });
          console.log(result.text);
          setSendingMail(false);
        },
        (error) => {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkTheme ? "dark" : "light",
          });
          console.log(error.text);
          setSendingMail(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className={"section " + (darkTheme ? "bg-dark-1" : "bg-light")}
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
            Contact
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Connect With Me
            <span className="heading-separator-line border-bottom border-3 border-warning d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* contact details */}
          <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-start">
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              Location
            </h2>
            <p className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>
              San Francisco/Bay Area
              <br />
              California
            </p>
            {/* <p className={"text-3 mb-1 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-phone" />
              </span>
              (060) 444 434 444
            </p>
            <p className={"text-3 mb-1 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <i className="fas fa-fax" />
              </span>
              (060) 555 545 555
            </p> */}
            <p className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>
              <span className="text-warning text-4 me-2">
                <i className="fas fa-envelope" />
              </span>
              k.epps23@gmail.com
            </p>
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              Follow Me
            </h2>
            <ul
              className={
                "social-icons justify-content-center justify-content-md-start " +
                (darkTheme ? "social-icons-muted" : "")
              }
            >

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
                <Tooltip text="Github" placement="top">
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
          </div>
          {/* contact form */}
          <div className="col-md-8 col-xl-9 order-0 order-md-1">
            <h2
              className={
                "mb-3 text-5 text-uppercase text-center text-md-start " +
                (darkTheme ? "text-white" : "")
              }
            >
              Send Me A Message
            </h2>
            <form
              className={darkTheme ? "form-dark" : ""}
              id="contact-form"
              action="php/mail.php"
              method="post"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="row g-4">
                <div className="col-xl-6">
                  <input
                    name="from_name"
                    type="text"
                    className="form-control"
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="col-xl-6">
                  <input
                    name="user_email"
                    type="email"
                    className="form-control"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="col">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={5}
                    required
                    placeholder="Send me a quick message!"
                    defaultValue={""}
                  />
                </div>
              </div>
              <p className="text-center mt-4 mb-0">
                <button
                  id="submit-btn"
                  className="btn btn-warning rounded-pill d-inline-flex"
                  type="submit"
                >
                  {sendingMail ? (
                    <>
                      <span
                        role="status"
                        aria-hidden="true"
                        class="spinner-border spinner-border-sm align-self-center me-2"
                      ></span>
                      Sending.....
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </p>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
