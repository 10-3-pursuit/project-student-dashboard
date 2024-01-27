import React from "react";
import StudentList from "./StudentList";

const Home = ({ students, filteredStudents }) => {
  return (
    <div>
      <StudentList students={students} filteredStudents={filteredStudents} />
    </div>
  );
};

export default Home;
