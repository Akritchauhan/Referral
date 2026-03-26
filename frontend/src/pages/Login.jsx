import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // 🔥 NEW

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/users/login/", // ✅ FIXED URL
        {
          username,
          password,
        }
      );

      const token = res.data.access;
      localStorage.setItem("token", token);

      // 🔥 OPTIONAL: verify role
      const profile = await axios.get(
        "http://127.0.0.1:8000/users/profile/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // 🔥 ROLE CHECK (important)
      if (profile.data.role !== role) {
        alert(`You are registered as ${profile.data.role}, not ${role}`);
        return;
      }

      alert(`Login successful as ${role}!`);

      navigate("/dashboard");

    } catch (err) {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      {/* 🔽 ROLE SELECTION */}
      <label>Select Role:</label>
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="employee">Employee / Hirer</option>
      </select>

      <br /><br />

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login as {role}
      </button>

      {/* 🔥 SIGNUP OPTION */}
      <p>
        Don't have an account?{" "}
        <button onClick={() => navigate("/register")}>
          Sign Up
        </button>
      </p>
    </div>
  );
}