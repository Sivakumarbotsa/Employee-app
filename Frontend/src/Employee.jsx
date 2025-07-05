import React, {useState} from 'react'
import './Employee.css'

const Employee = () => {
    const [name,setName]=useState("");
    const [role,setRole]=useState("");
    const [email,setEmail]=useState("");
    const [dept,setDept]=useState("");

    const empDetails={name, role, email, dept};

    const empHandler=async(e)=>{
        e.preventDefault();
        console.log(empDetails);
        const response = await fetch('http://localhost:5000/api/emp/add-emp', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(empDetails)
        });
        const data = await response.json();
        console.log(data);
    }
 
return (
    <div className="empForm">
        <div className="section">
            <h2 className="form-heading">Employee Registration</h2>
            <form onSubmit={empHandler}>
                <label>Employee Name</label>
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/><br />
                <label>Employee Role</label>
                <input type="text" name="role" onChange={(e)=>setRole(e.target.value)}/><br />
                <label>Employee Email</label>
                <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}/><br />
                <label>Employee Department</label>
                <input type="text" name="dept" onChange={(e)=>setDept(e.target.value)}/><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
)

}

export default Employee