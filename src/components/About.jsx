import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const cardStyle = {
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(to right, #007bff, #ffffff)",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const sectionStyle = {
    boxShadow: "inset 0 -3px 6px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    color: "#007bff",
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
  };

  const emailStyle = {
    fontWeight: "bold",
    color: "#007bff",
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
  };

  const headingStyle = {
    background: "#007bff",
    color: "white",
    borderRadius: "50px",
    display: "inline-block",
    padding: "10px 30px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    fontSize: "2rem",
    margin: "20px 0",
  };

  return (
    <>
      <h2 className="text-center" style={headingStyle}>
        About the Developers
      </h2>
      <div className="container mt-5">
        {/* Brenda Soto's Card */}
        <div className="card mb-3" style={cardStyle}>
          <div className="row no-gutters">
            <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
              <img
                src="src/imgs/1516867339326.jpeg"
                className="card-img rounded-circle"
                alt="Brenda Soto"
                style={imageStyle}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={titleStyle}>
                  Brenda Soto
                </h5>
                <p className="card-text" style={sectionStyle}>
                  Brenda Soto is an aspiring full-stack web developer with a
                  rich background in veterinary technology. Transitioning into
                  tech, she brings a unique perspective and problem-solving
                  skills honed over years of hands-on experience. Currently
                  enrolled in Pursuit's 12-month mentorship program, Brenda is
                  passionately learning the intricacies of web development, from
                  front-end design to back-end logic. Her journey is a testament
                  to her adaptability and eagerness to embrace new challenges in
                  the tech world.
                </p>
                <div className="d-flex flex-column align-items-start mt-3">
                  <a
                    href="https://github.com/BSoto85"
                    className="btn btn-outline-dark mb-2"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/brendasotoct/"
                    className="btn btn-outline-dark mb-2"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <p style={emailStyle}>Email: bsoto@pursuit.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Luis Tejada's Card */}
        <div className="card mb-3" style={cardStyle}>
          <div className="row no-gutters">
            <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
              <img
                src="src/imgs/1680630192650.jpeg"
                className="card-img rounded-circle"
                alt="Luis Tejada"
                style={imageStyle}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={titleStyle}>
                  Luis Tejada
                </h5>
                <p className="card-text" style={sectionStyle}>
                  Luis Tejada is an emerging talent in the field of full-stack
                  web development. His enthusiasm for technology and coding is
                  evident in his dedication to mastering both front-end and
                  back-end technologies. As a participant in Pursuit's
                  comprehensive 12-month mentorship program, Luis is rapidly
                  acquiring a diverse set of skills in web development. His
                  journey is marked by a deep commitment to learning and a drive
                  to excel in the ever-evolving landscape of web technologies.
                </p>
                <div className="d-flex flex-column align-items-start mt-3">
                  <a
                    href="https://github.com/Blui322"
                    className="btn btn-outline-dark mb-2"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/luis-tejada-56538b271/"
                    className="btn btn-outline-dark mb-2"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <p style={emailStyle}>Email: luistejada@pursuit.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sincere Clarke's Card */}
        <div className="card mb-3" style={cardStyle}>
          <div className="row no-gutters">
            <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
              <img
                src="src/imgs/Sincere Clarke.jpg"
                className="card-img rounded-circle"
                alt="Sincere Clarke"
                style={imageStyle}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={titleStyle}>
                  Sincere Clarke
                </h5>
                <p className="card-text" style={sectionStyle}>
                  Sincere Clarke is a dynamic and creative full-stack web
                  developer, currently honing his skills through Pursuit's
                  intensive 12-month mentorship program. With a keen eye for
                  design and a logical approach to problem-solving, Sincere is
                  adept at creating seamless and efficient web applications. His
                  journey in the program is characterized by a relentless
                  pursuit of knowledge and a strong desire to make a significant
                  impact in the tech industry through innovative web solutions.
                </p>
                <div className="d-flex flex-column align-items-start mt-3">
                  <a
                    href="https://github.com/remyclarke"
                    className="btn btn-outline-dark mb-2"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sincere-clarke-66353617b/"
                    className="btn btn-outline-dark mb-2"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <p style={emailStyle}>Email: sincereclarke@pursuit.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
