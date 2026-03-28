import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./common.css";

export default function Dashboard() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/users/profile/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setUser(res.data));
  }, []);

  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar role={user.role} />

        <div className="main">
          <div className="card fade-in">
            <h2>Welcome, {user.username}</h2>
            <p className="text-muted">Role: {user.role}</p>
          </div>
        </div>
      </div>
    </>
  );
}