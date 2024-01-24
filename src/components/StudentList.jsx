import React from "react";
import StudentCard from "./StudentCard";
// import { useState, useEffect } from "react";
// const URL = import.meta.env.VITE_BASE_API_URL;

const StudentList = ({ students, filteredStudents }) => {
  return (
    <div className="container d-inline-flex p- mt-5  ">
      <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1  ">
    
      {filteredStudents.map((student) => {
     return   <div key={student.id} className="col"> 
     < StudentCard student={student} />
        </div>
      })}
      
    </div>
    </div>
  );
};

export default StudentList;
