import React from "react";
import { Link } from "react-router-dom";

const StudentCard = ({ student }) => {
  const { profilePhoto, names, username, dob } = student;
  const { preferredName, middleName, surname } = names;

  const birthdayFormatting = (dob) => {
    const studentBDay = new Date(dob);
    return studentBDay.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isOnTrack = (student) => {
    const { certifications, codewars } = student;

    const certificationsCompleted =
      certifications.resume &&
      certifications.linkedin &&
      certifications.github &&
      certifications.mockInterview;

    const codeWarsScoreOver850 = codewars.current.total > 850;

    return certificationsCompleted && codeWarsScoreOver850;
  };

  const studentStatus = isOnTrack(student);

  return (
    <Link to={`/student-info/${student.id}`} className="text-decoration-none">
      <div className="justify-content-start mt-5  d-md-block">
        <div
          className="text-center card border-4 border-primary text-bg-dark mb-3 row align-items-start"
          style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="row  g-0  ">
            <div className="col col-md-4">
              <img
                src={profilePhoto}
                className="img-fluid rounded-start h-100 w-100"
                alt={`${preferredName} ${surname}`}
              />
            </div>
            <div className="col col-md-8">
              <div className="card-body h-100">
                <h5 className="card-title">{`${preferredName} ${middleName} ${surname}`}</h5>
                <p className="card-text">Username: {username}</p>
                <p className="card-text">Birthday: {birthdayFormatting(dob)}</p>
                {studentStatus && (
                  <p className="text-primary">On track to Graduate</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StudentCard;
