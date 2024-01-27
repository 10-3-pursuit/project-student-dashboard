import React from "react";
import StudentCard from "./StudentCard";
// import { useState, useEffect } from "react";
// const URL = import.meta.env.VITE_BASE_API_URL;

const StudentList = ({ students, filteredStudents }) => {
  return (
    <div>
      {filteredStudents.map((student) => {
        return <StudentCard key={student.id} student={student} />;
      })}
    </div>
  );
};

export default StudentList;
