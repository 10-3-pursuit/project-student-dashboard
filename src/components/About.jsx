import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText, faComment } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <>
        <div className="container mt-5">
      <h2 className="text-center mb-4">About the Developers</h2>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/021/548/095/small/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
              className="card-img"
              alt="Profile"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                minus accusamus quibusdam vel ex dolore sunt est dolorum dolores
                inventore expedita quam quae doloremque, quasi repellat, eos
                quaerat adipisci vitae.
              </p>
              <div className="d-flex flex-column align-items-start mt-3">
                <a href="#" className="btn btn-dark mb-2 pr-4">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="#" className="btn btn-dark mb-2 pr-6">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="#" className="btn btn-dark mb-2 pr-4">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

    <div className="container mt-5">
      <h2 className="text-center mb-4">About the Developers</h2>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/021/548/095/small/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
              className="card-img"
              alt="Profile"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                minus accusamus quibusdam vel ex dolore sunt est dolorum dolores
                inventore expedita quam quae doloremque, quasi repellat, eos
                quaerat adipisci vitae.
              </p>
              <div className="d-flex flex-column align-items-start mt-3">
                <a href="#" className="btn btn-dark mb-2 pr-10">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="#" className="btn btn-dark mb-2 pr-14">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="#" className="btn btn-dark mb-2 pr-10">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" />
                </a>
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