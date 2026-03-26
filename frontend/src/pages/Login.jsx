import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // ✅ add this

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/users/login/",
        {
          username,
          password,
        }
      );

      // ✅ save token
      localStorage.setItem("token", res.data.access);

      alert("Login successful!");

      // ✅ REDIRECT HERE
      navigate("/dashboard");

    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}