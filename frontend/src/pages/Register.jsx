import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        designation: designation,
      });

      alert("Registered successfully!");
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>Select Role:</label>
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="employee">Hirer / Employee</option>
      </select>
      {role === "employee" && (
        <div>
          <input
            placeholder="Company Name"
            onChange={(e) => setCompany(e.target.value)}
          />

          <input
            placeholder="Designation"
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
      )}

      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account?{" "}
        <button onClick={() => navigate("/login")}>
          Login
        </button>
      </p>
    </div>
  );
}