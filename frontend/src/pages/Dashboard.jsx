import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      alert("Please login first");
      navigate("/");
      return;
    }

    axios
      .get("http://127.0.0.1:8000/users/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch(() => {
        alert("Session expired");
        localStorage.removeItem("token");
        navigate("/");
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <h3>Welcome, {user.username}</h3>
      <p>Role: {user.role}</p>

      <hr />

      {/* 👨‍💼 Employee = Recruiter */}
      {user.role === "employee" && (
        <>
          <button onClick={() => navigate("/create-job")}>Post Job</button>
          <button onClick={() => navigate("/my-jobs")}>My Jobs</button>
        </>
      )}

      {/* 👨‍🎓 Student */}
      {user.role === "student" && (
        <>
          <button onClick={() => navigate("/jobs")}>View Jobs</button>
          <button onClick={() => navigate("/upload")}>Upload Resume</button>
        </>
      )}

      <br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}