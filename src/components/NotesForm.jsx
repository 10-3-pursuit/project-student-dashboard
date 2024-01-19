import { useParams,useNavigate} from "react-router-dom";
import { useState } from "react";
const URL = import.meta.env.VITE_BASE_API_URL
console.log(URL)
export default function NotesForm({students,student}){
    const {id} = useParams();
    const [newComment, setNewComment] = useState({
        commenter:"author",
        comment:"comment"
      })

    function addComment(id,commentObject){
        const updatedStudents = [...students]
        const studentIndex = updatedStudents.findIndex(student=> student.id === id)
        updatedStudents[studentIndex].notes.push(commentObject)
        const options = {
          method: "PUT",
          body: JSON.stringify(updatedStudents[studentIndex]),
          headers: { "Content-Type": "application/json" },
        };
        return fetch(`${URL}/${id}`, options)
        .then((response) => {
          return response.json();
        })
        .catch((error)=>{
            console.log(error)
        })
      }
  
      function handleChange(e){
        setNewComment({
          ...newComment,
          [e.target.id]:e.target.value
        })
      }
  
      function handleSubmit(event) {
        event.preventDefault();
        addComment(id,newComment)
        .then(()=>{
          setNewComment({
                commenter:"author",
                comment:"comment"
          })
        })
        .catch((error)=>{
          console.error(error)
        })
      }
  
    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <h2>1:1 Notes</h2>
            <label htmlFor="commenter">
                <input onChange={handleChange} value={newComment.commenter} type="text" name="commenter" id="commenter" />
            </label>
            <label htmlFor="comment">
                <input onChange={handleChange} value={newComment.comment} type="text" name="comment" id="comment" />
            </label>
            <button className="comment-form-button">Submit</button>
            <h2>Comments</h2>
            <ul className="comment-list">
                {student.notes.map((note,index)=>{
                    return(
                        <li key={note.commenter + index} className="comment-list-item">
                            <p className="student-comment">{note.commenter} says: {note.comment}</p>
                        </li>
                    )
                })}
            </ul>
        </form>
    )
}