import React, { useState } from 'react';
import './Employee.css';

const Employee = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  const [submitted, setSubmitted] = useState(false); // <-- track submission

  const empDetails = { name, role, email, dept };

  const empHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://employee-app-i9ib.onrender.com/api/emp/add-emp", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(empDetails)
})


      if (response.ok) {
        setSubmitted(true);  // Show thank you message
      } else {
        alert("Failed to register employee, please try again.");
      }
    } catch (error) {
      alert("Network error, please try again.");
    }
  };

  return (
    <div className="empForm">
      <div className="section">
        <h2 className="form-heading">Employee Registration</h2>

        {submitted ? (
          <div className="thank-you-message">
            <h3>✅ Thank you for registration!</h3>
            <p>Your details have been successfully submitted.</p>
          </div>
        ) : (
          <form onSubmit={empHandler}>
            <label>Employee Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            /><br />
            <label>Employee Role</label>
            <input
              type="text"
              name="role"
              value={role}
              onChange={e => setRole(e.target.value)}
              required
            /><br />
            <label>Employee Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            /><br />
            <label>Employee Department</label>
            <input
              type="text"
              name="dept"
              value={dept}
              onChange={e => setDept(e.target.value)}
              required
            /><br />
            <button type="submit">Submit</button>
          </form>
        )}

      </div>
    </div>
  );
};

export default Employee;
