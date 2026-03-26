import { useEffect, useState } from "react";
import axios from "axios";

export default function ViewJobs() {
  const [jobs, setJobs] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      console.log("No token found");
      return;
    }

    axios
      .get("http://127.0.0.1:8000/jobs/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("JOBS DATA:", res.data); // 🔥 debug
        setJobs(res.data);
      })
      .catch((err) => {
        console.log("ERROR:", err.response || err);
      });
  }, [token]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Jobs</h2>

      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <p>
        <strong>Skills:</strong>{" "}
        {Array.isArray(job.skills_required) 
          ? job.skills_required.join(", ") 
          : job.skills_required || "Not specified"}
      </p>
          </div>
        ))
      )}
    </div>
  );
}