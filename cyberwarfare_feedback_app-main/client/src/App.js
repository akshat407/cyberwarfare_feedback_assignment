// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// export default function App() {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [error, setError] = useState("");
//   const [submitted, setSubmitted] = useState(false); // State to track form submission

//   const API_URL = "http://localhost:5000";

//   useEffect(() => {
//     axios.get(`${API_URL}/feedback`)
//       .then(res => setFeedbacks(res.data))
//       .catch(err => console.error("Error fetching feedbacks:", err));
//   }, []);


  
//   const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
//       setError("All fields are required!");
//       return;
//     }
//     if (!isValidName(formData.name)) {
//       setError("Name must only contain letters and spaces.");
//       return;
//     }

//     setError("");
//     const newFeedback = { ...formData, timestamp: new Date().toISOString() };
//     await axios.post(`${API_URL}/feedback`, newFeedback);
    
//     setFeedbacks([newFeedback, ...feedbacks]);
//     setSubmitted(true); // Show animation after submission
//   };

//   const formatTimestamp = (timestamp) => {
//     const options = { timeZone: "Asia/Kolkata", hour12: true, hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short", year: "numeric" };
//     return new Date(timestamp).toLocaleString("en-IN", options);
//   };

//   return (
//     <div className="app-container">
//       <div className="content">
//         <div className={`feedback-form-container ${submitted ? "submitted-animation" : ""}`}>
//           {!submitted ? (
//             <>
//               <h1 className="title">Feedback Form</h1>
//               {error && <p className="error-message">{error}</p>}
//               <form onSubmit={handleSubmit} className="feedback-form">
//                 <input type="text" placeholder="Name" className="input-field" 
//                       value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
//                 <input type="email" placeholder="Email" className="input-field" 
//                       value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
//                 <textarea placeholder="Feedback" className="input-field textarea" 
//                           value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
//                 <button type="submit" className="submit-button">Submit</button>
//               </form>
//             </>
//           ) : (
//             <div className="success-message">
//               <h2>✅ Feedback Submitted!</h2>
//               <p>Thank you for your valuable feedback.</p>
//               <button className="submit-button" onClick={() => {
//                 setFormData({ name: "", email: "", message: "" });
//                 setSubmitted(false);
//               }}>
//                 Submit Another Feedback
//               </button>
//             </div>
//           )}
//         </div>

//         <div className="feedback-section">
//           <h2 className="title">Feedbacks</h2>
//           {feedbacks.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map((fb, index) => (
//             <div key={index} className="neon-feedback">
//               <p><strong>{fb.name}</strong> ({fb.email})</p>
//               <p>{fb.message}</p>
//               <p className="timestamp">{formatTimestamp(fb.timestamp)}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );  
// }

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./App.css";

// export default function FeedbackForm() {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [error, setError] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const API_URL = "http://localhost:5000";

//   useEffect(() => {
//     axios.get(`${API_URL}/feedback`)
//       .then(res => setFeedbacks(res.data))
//       .catch(err => console.error("Error fetching feedbacks:", err));
//   }, []);

//   const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
//       setError("All fields are required!");
//       return;
//     }
//     if (!isValidName(formData.name)) {
//       setError("Name must only contain letters and spaces.");
//       return;
//     }

//     setError("");
//     const newFeedback = { ...formData, timestamp: new Date().toISOString() };
//     await axios.post(`${API_URL}/feedback`, newFeedback);

//     setFeedbacks([newFeedback, ...feedbacks]);
//     setSubmitted(true);
//   };

//   return (
//     <div className="app-container">
//       <div className="content">
//         <div className={`feedback-form-container ${submitted ? "submitted-animation" : ""}`}>
//           {!submitted ? (
//             <>
//               <h1 className="title">Feedback Form</h1>
//               {error && <p className="error-message">{error}</p>}
//               <form onSubmit={handleSubmit} className="feedback-form">
//                 <input type="text" placeholder="Name" className="input-field" 
//                       value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
//                 <input type="email" placeholder="Email" className="input-field" 
//                       value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
//                 <textarea placeholder="Feedback" className="input-field textarea" 
//                           value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
//                 <button type="submit" className="submit-button">Submit</button>
//               </form>

//               {/* View All Feedbacks Button */}
//               <div className="view-feedbacks-container">
//                 <Link to="/feedbacks">
//                   <button className="view-feedbacks-button">📜 View All Feedbacks</button>
//                 </Link>
//               </div>
//             </>
//           ) : (
//             <div className="success-message">
//               <h2>✅ Feedback Submitted!</h2>
//               <p>Thank you for your valuable feedback.</p>
//               <button className="submit-button" onClick={() => {
//                 setFormData({ name: "", email: "", message: "" });
//                 setSubmitted(false);
//               }}>
//                 Submit Another Feedback
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Routes, Route } from "react-router-dom";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";
import "./App.css";   
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FeedbackForm />} />
      <Route path="/feedbacks" element={<FeedbackList />} />
    </Routes>
  );
}

