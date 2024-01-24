import React from "react";
import { ProgressBar, Badge } from "react-bootstrap";

const ProgressCard = ({ student }) => {
  const { codewars, certifications, cohort } = student;

  const calculatePercentage = (current, goal) => {
    return Math.floor((current / goal) * 100);
  };

  const CheckBadge = ({ condition }) => (
    <Badge bg={condition ? "success" : "danger"}>
      {condition ? "✅ Completed" : "❌ Pending"}
    </Badge>
  );

  return (
    <div className="card mb-4 shadow-sm" style={{ minHeight: "640px" }}>
      <div className="card-header bg-primary text-white">
        <div className="d-flex align-items-center">
          <img
            src={student.profilePhoto}
            alt={`${student.names.preferredName} ${student.names.surname}`}
            className="rounded-circle me-3"
            style={{ width: "50px", height: "50px" }}
          />
          <h5>{`${student.names.preferredName} ${student.names.surname}`}</h5>
        </div>
      </div>
      <div className="card-body d-flex flex-column">
        <section>
          <h5 className="card-title">Codewars</h5>
          <p className="card-text">Current Total: {codewars.current.total}</p>
          <p className="card-text">Last Week: {codewars.current.lastWeek}</p>
          <p className="card-text">Goal: {codewars.goal.total}</p>
          <ProgressBar
            now={calculatePercentage(
              codewars.current.total,
              codewars.goal.total
            )}
            label={`${calculatePercentage(
              codewars.current.total,
              codewars.goal.total
            )}%`}
          />
        </section>

        <section className="mt-4">
          <h5 className="card-title">Scores</h5>
          <p className="card-text">
            Assignments:{" "}
            <ProgressBar
              now={cohort.scores.assignments * 100}
              label={`${Math.round(cohort.scores.assignments * 100)}%`}
            />
          </p>
          <p className="card-text">
            Projects:{" "}
            <ProgressBar
              now={cohort.scores.projects * 100}
              label={`${Math.round(cohort.scores.projects * 100)}%`}
            />
          </p>
          <p className="card-text">
            Assessments:{" "}
            <ProgressBar
              now={cohort.scores.assessments * 100}
              label={`${Math.round(cohort.scores.assessments * 100)}%`}
            />
          </p>
        </section>

        <section className="mt-4">
          <h5 className="card-title">Certifications</h5>
          <p className="card-text">
            Resume: <CheckBadge condition={certifications.resume} />
          </p>
          <p className="card-text">
            LinkedIn: <CheckBadge condition={certifications.linkedin} />
          </p>
          <p className="card-text">
            Mock Interview:{" "}
            <CheckBadge condition={certifications.mockInterview} />
          </p>
          <p className="card-text">
            Github: <CheckBadge condition={certifications.github} />
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProgressCard;
