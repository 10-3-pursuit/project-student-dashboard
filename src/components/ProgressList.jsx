import React from 'react';

const ProgressCard = ({ student }) => {
  const { codewars, certifications, cohort } = student;

  const calculatePercentage = (current, goal) => {
    return Math.floor((current / goal) * 100);
  };

  return (
    <div className="card mb-3">
      <div className="card-header bg-primary text-white">
        <div className="d-flex align-items-center">
          <img src={student.profilePhoto} alt={`${student.names.preferredName} ${student.names.surname}`} className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
          <h5>{`${student.names.preferredName} ${student.names.surname}`}</h5>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">Codewars</h5>
        <p className="card-text">Current Total: {codewars.current.total}</p>
        <p className="card-text">Last Week: {codewars.current.lastWeek}</p>
        <p className="card-text">Goal: {codewars.goal.total}</p>
        <p className="card-text">Percent of Goal Achieved: {calculatePercentage(codewars.current.total, codewars.goal.total)}%</p>
        <h5 className="card-title mt-4">Scores</h5>
        <p className="card-text">Assignments: {Math.round(cohort.scores.assignments * 100)}%</p>
        <p className="card-text">Projects: {Math.round(cohort.scores.projects * 100)}%</p>
        <p className="card-text">Assessments: {Math.round(cohort.scores.assessments * 100)}%</p>
        <h5 className="card-title mt-4">Certifications</h5>
        <p className="card-text">
          Resume: {certifications.resume ? <span className="text-success">✅</span> : <span className="text-danger">❌</span>}
        </p>
        <p className="card-text">
          LinkedIn: {certifications.linkedin ? <span className="text-success">✅</span> : <span className="text-danger">❌</span>}
        </p>
        <p className="card-text">
          Mock Interview: {certifications.mockInterview ? <span className="text-success">✅</span> : <span className="text-danger">❌</span>}
        </p>
        <p className="card-text">
          Github: {certifications.github ? <span className="text-success">✅</span> : <span className="text-danger">❌</span>}
        </p>
      </div>
    </div>
  );
};

export default ProgressCard;