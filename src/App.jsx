import Aside from "./components/common/Aside";
import Header from "./components/common/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import StudentInfo from "./components/StudentInfo";
import { useState, useEffect } from "react";
const URL = import.meta.env.VITE_BASE_API_URL;
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    fetch(`${URL}/students`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setFilteredStudents(data);
      });
  }, []);

  const handleOnClick = (cohort) => {
    const copiedStudents = students.filter(
      (student) => student.cohort.cohortCode === cohort
    );
    setFilteredStudents(copiedStudents);
  };

  return (
    <>
      <Header />
      <Aside students={students} handleOnClick={handleOnClick} />
      <Routes>
        <Route
          path="/"
          element={
            <Home students={students} filteredStudents={filteredStudents} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/student-info" element={<StudentInfo students={students}/>} />
      </Routes>
   
    </>
  );
}

export default App;
