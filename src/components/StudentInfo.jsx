import React from "react";
import StudentCard from "./StudentCard";
import ProgressList from "./ProgressList";
import CommentForm from "./CommentForm";

const StudentInfo = ({ students }) => {
  const { studentId } = useParams();
  const student = students.find(s => s.id === studentId);

  return (
    <div>
      <section>
        <StudentCard student={student} />
      </section>
      <section>
        <ProgressList student={student} />
      </section>
      <section>
        <CommentForm student={student} />
      </section>
    </div>
  );
};

export default StudentInfo;
