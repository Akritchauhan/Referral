import { useEffect, useState } from "react";
import axios from "axios";
import "./common.css";

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
    <div className="container">
      <h2>Jobs</h2>

      {jobs.map((job) => (
        <div key={job.id} className="card">
          <h3>{job.title}</h3>
          <p className="text-muted">{job.company}</p>
          <p>{job.description}</p>
          <p className="text-primary">
            {Array.isArray(job.skills_required)
              ? job.skills_required.join(", ")
              : job.skills_required}
          </p>

          <button className="btn btn-success">Apply</button>
        </div>
      ))}
    </div>
  );
}