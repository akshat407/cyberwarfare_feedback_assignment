import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./FeedbackForm.css";
export default function FeedbackForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // ✅ Use useNavigate for navigation

  const API_URL = "https://cyberwarfare-feedback-assignment.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("All fields are required!");
      return;
    }

    setError("");
    await axios.post(`${API_URL}/feedback`, formData);
    setSubmitted(true);
  };

  return (
    <div className="app-container">
      <h1>Feedback Form</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="feedback-form">
        <input type="text" placeholder="Name" className="input-field" 
              value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input type="email" placeholder="Email" className="input-field" 
              value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <textarea placeholder="Feedback" className="input-field textarea" 
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/* ✅ Button to navigate to Feedback List */}
      <button className="submit-button" onClick={() => navigate("/feedbacks")}>
        View All Feedback
      </button>
    </div>
  );
}
