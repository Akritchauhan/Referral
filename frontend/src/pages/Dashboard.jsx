import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./common.css";

export default function Dashboard() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) navigate("/");

    axios
      .get("http://127.0.0.1:8000/users/profile/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => navigate("/"));
  }, []);

  return (
    <div className="container">
      <h1>Dashboard</h1>

      <div className="card">
        <h3>Welcome, {user.username}</h3>
        <span className="badge">{user.role}</span>
      </div>

      {user.role === "employee" && (
        <div className="card">
          <button className="btn btn-primary" onClick={() => navigate("/create-job")}>Post Job</button>
          <button className="btn btn-success" onClick={() => navigate("/my-jobs")}>My Jobs</button>
        </div>
      )}

      {user.role === "student" && (
        <div className="card">
          <button className="btn btn-primary" onClick={() => navigate("/jobs")}>View Jobs</button>
          <button className="btn btn-secondary" onClick={() => navigate("/upload")}>Upload Resume</button>
        </div>
      )}

      <button className="btn btn-danger" onClick={() => {
        localStorage.removeItem("token");
        navigate("/");
      }}>
        Logout
      </button>
    </div>
  );
}