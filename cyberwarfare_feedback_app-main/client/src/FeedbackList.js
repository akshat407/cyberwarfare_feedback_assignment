import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./FeedbackList.css";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate(); // ✅ Use navigate to go back

  const API_URL = "https://cyberwarfare-feedback-assignment.onrender.com";

  useEffect(() => {
    axios.get(`${API_URL}/feedback`)
      .then(res => setFeedbacks(res.data))
      .catch(err => console.error("Error fetching feedbacks:", err));
  }, []);

  return (
    <div className="feedback-container">
      <h1>All Feedbacks</h1>
      {feedbacks.length === 0 ? <p>No feedback available.</p> : (
        feedbacks.map((fb, index) => (
          <div key={index} className="feedback-card">
            <p><strong>{fb.name}</strong> ({fb.email})</p>
            <p>{fb.message}</p>
          </div>
        ))
      )}

      {/* ✅ Button to go back to Form */}
      <button className="submit-button" onClick={() => navigate("/")}>
        Back to Feedback Form
      </button>
    </div>
  );
}
