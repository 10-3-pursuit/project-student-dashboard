import React from "react";
import { useParams } from "react-router-dom";
import StudentCard from "./StudentCard";
import ProgressList from "./ProgressList";
import CommentForm from "./CommentForm";

const StudentInfo = ({ students }) => {
  const { studentId } = useParams();
  const student = students.find((s) => s.id.toString() === studentId);

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div>
      <div className="container-fluid studentBG col-12">
        <section>
          <StudentCard student={student} />
        </section>
        <div className="container-fluid">
          <section className="row">
            <section className="col-md-6">
              <ProgressList student={student} />
            </section>
            <section className="col-md-6">
              <div style={{ height: "640px" }}>
                <CommentForm />
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
