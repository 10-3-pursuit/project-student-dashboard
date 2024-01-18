import { getOneStudent } from "../api/fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "./Table";

const Student = ({ formattedDateOfBirth, onTrackToGraduate }) => {
  const { id } = useParams();

  //to set the student to have falsy values
  const [student, setStudent] = useState({
    id: "",
    names: {
      preferredName: "",
      middleName: "",
      surname: "",
    },
    username: "",
    dob: "",
    profilePhoto: "",
    codewars: {
      current: { total: 0, lastWeek: 0 },
      goal: { total: 0, lastWeek: 0 },
    },
    certifications: {
      resume: false,
      linkedin: false,
      github: false,
      mockInterview: false,
    },
    notes: [
      {
        commenter: "",
        comment: "",
      },
    ],
    cohort: {
      cohortCode: "",
      cohortStartDate: "",
      scores: { assignments: 0, projects: 0, assessments: 0 },
    },
  });

  useEffect(() => {
    getOneStudent(id).then((data) => setStudent(data));
  }, []);

  const { names, username, dob, profilePhoto } = student;

  return (
    <div>
      <img src={profilePhoto} alt={`${names.preferredName}`} />

      <div>
        <p>{`${names.preferredName} ${names.middleName} ${names.surname}`}</p>
        <p>{`${username}`}</p>
        <p>{formattedDateOfBirth(dob)}</p>
        <p>{onTrackToGraduate(student) ? "On track to Graduate" : " "}</p>
      </div>

      <Table student={student} />
    </div>
  );
};

export default Student;
