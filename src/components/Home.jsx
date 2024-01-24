import React from "react";
import StudentList from "./StudentList";
import { useState } from "react";

const Home = ({ students, filteredStudents, cohortHeading }) => {
  return (
    <div className="justify-content-start  mt-5" style={{ marginLeft: "60px"}}>
      <h2>{cohortHeading}</h2>
      <h3>Total Students: {filteredStudents.length}</h3>
      <StudentList students={students} filteredStudents={filteredStudents} />
    </div>
  );
};

export default Home;
