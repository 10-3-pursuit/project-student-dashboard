import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Aside from "./components/common/Aside";
import Home from "./components/Home";
import About from "./components/About";
import StudentInfo from "./components/StudentInfo";
import "bootstrap/dist/css/bootstrap.min.css";
const URL = import.meta.env.VITE_BASE_API_URL;
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [cohortHeading, setCohortHeading] = useState("All Students");

  useEffect(() => {
    fetch(`${URL}/students`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setFilteredStudents(data);
      });
  }, []);

  const handleOnClick = (cohort, formattedCohort) => {
    const copiedStudents = students.filter(
      (student) => student.cohort.cohortCode === cohort
    );
    setFilteredStudents(copiedStudents);
    setCohortHeading(formattedCohort);
  };
  return (
    <>
      <div className="background">
        <Header setFilteredStudents={setFilteredStudents} students={students} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      students={students}
                      filteredStudents={filteredStudents}
                      cohortHeading={cohortHeading}
                    />
                  }
                />
                <Route path="/about" element={<About />} />
                <Route
                  path="/student-info/:studentId"
                  element={<StudentInfo students={students} />}
                />
                <Route path="*" element={<div>404 Not Found</div>} />
              </Routes>
            </div>
            <div className="col-4">
              <Aside students={students} handleOnClick={handleOnClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
