import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./common.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/users/login/", {
        username,
        password,
      });

      const token = res.data.access;
      localStorage.setItem("token", token);

      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-box fade-in">
  
        <h2 className="auth-title">Welcome Back 👋</h2>
        <p className="auth-subtext">Login to your account</p>
  
        <select className="input" onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="employee">Employee</option>
        </select>
  
        <input className="input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
  
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
  
        <p className="mt-20 text-center">
          Don't have an account?{" "}
          <span className="text-primary" onClick={() => navigate("/register")} style={{ cursor: "pointer" }}>
            Register
          </span>
        </p>
  
      </div>
    </div>
  );
}