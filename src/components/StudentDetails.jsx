import { useParams } from "react-router-dom"
import { formatBirthDate, onTrackChecker } from "../helpers/helpers";
import "./StudentDetails.css"
import NotesForm from "./NotesForm"
export default function StudentDetails({ students }){
    const {id} = useParams()

    if(students.length === 0|| !id) return <p>Error, could not find student</p>
    
    const studentInfo = students.find((student) => id === student.id)
    const birthday = formatBirthDate(studentInfo.dob)
    const fullName = `${studentInfo.names.preferredName} ${studentInfo.names.middleName} ${studentInfo.names.surname}`
    const {current, goal} = studentInfo.codewars 
    const {scores} = studentInfo.cohort
    const {certifications} = studentInfo

    const goalPercentage = Math.round((current.total / goal.total) * 100 )
    const assignmentPercentage = scores.assignments * 100
    const projectPercentage = scores.projects * 100
    const assessmentPercentage = scores.assessments * 100

    return (
      <div className="student-detail-wrapper">
        <div className="collapsed-info">
            <img src= {studentInfo.profilePhoto} alt="Student Thumbnail"></img>
            <p>{fullName}</p>
            <p>{studentInfo.username}</p>
            <p>{birthday}</p>
            { onTrackChecker(studentInfo) && <p className="onTrack">On track to Graduate </p> }
        </div>
        <div className="form-and-table-wrapper">
          <table className="student-table">
            <thead>
              <tr>
                <th>CodeWars</th>
                <th>Scores</th>
                <th>Certifications</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Current Total: {current.total}</td>
                <td>Assignments: {assignmentPercentage}%</td>
                <td>Resume: {certifications.resume ? "🟢" : "❌"}</td>
              </tr>
              <tr>
                <td>Last Week: {goal.lastWeek}</td>
                <td>Projects: {projectPercentage}%</td>
                <td>LinkedIn: {certifications.linkedin ? "🟢" : "❌"}</td>
              </tr>
              <tr>
                <td>Goal: {goal.total}</td>
                <td>Assessments: {assessmentPercentage}%</td>
                <td>Mock Interview: {certifications.mockInterview ? "🟢" : "❌"}</td>
              </tr>
              <tr>
                <td>Percent of Goal Achieved: <span className="percentage">{goalPercentage}%</span> </td>
                <td></td>
                <td>Github: {certifications.github ? "🟢" : "❌"}</td>
              </tr>
            </tbody>
          </table>
          <NotesForm students={students} student={studentInfo}/>
        </div>
      </div>
    )
}