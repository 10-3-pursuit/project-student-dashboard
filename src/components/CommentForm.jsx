import React, { useState, useEffect } from "react";

const CommentForm = () => {
  const [author, setAuthor] = useState("");
  const [note, setNote] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      author,
      note,
    };

    const updatedComments = [...comments, newComment];

    setComments(updatedComments);
    setAuthor("");
    setNote("");

    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  useEffect(() => {
    // Clear comments from state and localStorage when the component mounts
    setComments([]);
    localStorage.removeItem("comments");
  }, []);

  return (
    <div className="border rounded p-0 bg-light" style={{ maxHeight: "640px" }}>
      <div className="bg-primary text-white p-3 rounded-top">
        <h2 className="mb-0">1:1 Notes</h2>
      </div>
      <div className="p-4" style={{ maxHeight: "560px", overflowY: "auto" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="author" className="form-label fw-bold">
              Name of person writing the note
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="note" className="form-label fw-bold">
              Note
            </label>
            <textarea
              className="form-control"
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div
        className="bg-white rounded-bottom p-4"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        <h3 className="mb-4">Comments</h3>
        <div>
          {comments.map((comment, index) => (
            <div key={index} className="mb-3 p-3 rounded border bg-light">
              <div className="fw-bold">{comment.author}</div>
              <div>{comment.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
