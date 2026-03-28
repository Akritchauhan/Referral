import { useEffect, useState } from "react";
import axios from "axios";
import "./common.css";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

export default function ViewJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/jobs/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setJobs(res.data));
  }, []);

  return (
    <>
      <Navbar />
  
      <div className="layout">
        <Sidebar role="student" />
  
        <div className="main">
          <h2>Jobs</h2>
  
          {jobs.map((job) => (
            <div className="card hover-scale" key={job.id}>
              <h3>{job.title}</h3>
              <p className="text-muted">{job.company}</p>
              <p>{job.description}</p>
  
              <button className="btn btn-success">Apply</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}