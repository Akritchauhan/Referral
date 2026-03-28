import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./common.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/users/register/", {
        username,
        password,
        role,
        company_name: company,
        designation,
      });

      alert("Registered Successfully!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-box fade-in">
  
        <h2 className="auth-title">Create Account 🚀</h2>
        <p className="auth-subtext">Start your journey</p>
  
        <input className="input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
  
        <select className="input" onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="employee">Employee</option>
        </select>
  
        {role === "employee" && (
          <>
            <input className="input" placeholder="Company" onChange={(e) => setCompany(e.target.value)} />
            <input className="input" placeholder="Designation" onChange={(e) => setDesignation(e.target.value)} />
          </>
        )}
  
        <button className="btn btn-primary" onClick={handleRegister}>
          Register
        </button>
  
        <p className="mt-20 text-center">
          Already have an account?{" "}
          <span className="text-primary" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            Login
          </span>
        </p>
  
      </div>
    </div>
  );
}